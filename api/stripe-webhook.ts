import type { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';
import { Resend } from 'resend';
import fs from 'fs';
import path from 'path';

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
      try {
        // Pobieramy plik PDF z folderu /public
        const filePath = path.join(process.cwd(), 'public', 'ebook-download.pdf');
        const fileBuffer = fs.readFileSync(filePath);

        // Wysyłka maila przez Resend
        await resend.emails.send({
          from: 'Odzyskaj Popołudnia <kontakt@odzyskajpopoludnia.pl>',
          replyTo: 'zonaniematka@gmail.com', 
          to: customerEmail,
          subject: 'Twój e-book jest gotowy! 📚 (Jak odzyskać swoje popołudnia)',
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
    }
  }

  return res.status(200).json({ received: true });
}