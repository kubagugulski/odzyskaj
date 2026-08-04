import type { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';
import { Resend } from 'resend';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const resend = new Resend(process.env.RESEND_API_KEY!);

// Wyłączamy automatyczne parsowanie JSON, aby Stripe mógł zweryfikować raw body
export const config = {
  api: {
    bodyParser: false,
  },
};

// Funkcja pomocnicza do odczytu surowego bufora (Raw Body)
async function getRawBody(req: VercelRequest): Promise<Buffer> {
  const chunks: Uint8Array[] = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

// Funkcja pomocnicza do hashowania SHA-256 (wymóg Meta CAPI)
function hashData(data: string): string {
  return crypto.createHash('sha256').update(data.trim().toLowerCase()).digest('hex');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const sig = req.headers['stripe-signature'];
  let event: Stripe.Event;

  try {
    const rawBody = await getRawBody(req);
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig as string,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error(`Błąd weryfikacji Webhooka: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Obsługa udanej płatności
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const customerEmail = session.customer_details?.email;

    if (customerEmail) {
      // 1. Wysyłka maila z e-bookiem przez Resend
      try {
        const filePath = path.join(process.cwd(), 'public', 'ebook-download.pdf');
        const fileBuffer = fs.readFileSync(filePath);

        await resend.emails.send({
          from: 'Odzyskaj Popołudnia <kontakt@odzyskajpopoludnia.pl>',
          replyTo: 'zonaniematka@gmail.com', 
          to: customerEmail,
          subject: 'Twój e-book jest gotowy! 📚 (Jak odzyskaj swoje popołudnia)',
          html: `
            <h2>Cześć!</h2>
            <p>Dziękuję za zakup e-booka <strong>"Jak odzyskać swoje popołudnia"</strong>.</p>
            <p>Plik PDF znajdziesz w załączniku do tego maila.</p>
            <p>Owocnej lektury!</p>
          `,
          attachments: [
            {
              filename: 'Jak_Odzyskac_Popoludnia.pdf',
              content: fileBuffer,
            },
          ],
        });

        console.log(`E-mail pomyślnie wysłany do: ${customerEmail}`);
      } catch (error) {
        console.error('Błąd podczas wysyłania e-maila:', error);
      }

      // 2. Wysyłka zdarzenia Purchase do Meta CAPI
      try {
        const pixelId = process.env.META_PIXEL_ID;
        const accessToken = process.env.META_ACCESS_TOKEN;

        if (pixelId && accessToken) {
          // Wyciągamy kwotę ze Stripe (Stripe przechowuje kwoty w groszach/centach)
          const value = session.amount_total ? session.amount_total / 100 : 59.00;
          const currency = session.currency ? session.currency.toUpperCase() : 'PLN';

          const capiResponse = await fetch(
            `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                data: [
                  {
                    event_name: 'Purchase',
                    event_time: Math.floor(Date.now() / 1000),
                    action_source: 'website',
                    event_id: session.id, // Przekazujemy ID sesji Stripe do deduplikacji
                    user_data: {
                      em: [hashData(customerEmail)],
                    },
                    custom_data: {
                      currency: currency,
                      value: value,
                      content_name: 'Jak odzyskać swoje popołudnia',
                    },
                  },
                ],
              }),
            }
          );

          if (capiResponse.ok) {
            console.log(`Zdarzenie Purchase wysłane do Meta CAPI dla: ${customerEmail}`);
          } else {
            const errorData = await capiResponse.json();
            console.error('Błąd odpowiedzi Meta CAPI:', errorData);
          }
        } else {
          console.warn('Brak ustawionych zmiennych META_PIXEL_ID lub META_ACCESS_TOKEN w Vercelu.');
        }
      } catch (capiError) {
        console.error('Błąd połączenia z Meta CAPI:', capiError);
      }
    }
  }

  return res.status(200).json({ received: true });
}