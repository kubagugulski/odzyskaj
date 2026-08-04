import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Regulamin() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link to="/" className="inline-flex items-center gap-2 text-lime-400 hover:text-lime-300 font-medium mb-8">
        <ArrowLeft className="w-5 h-5" /> Wróć do strony głównej
      </Link>
      
      <article className="prose prose-invert prose-slate max-w-none prose-headings:text-lime-400 prose-a:text-lime-400 hover:prose-a:text-lime-300">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">REGULAMIN SKLEPU INTERNETOWEGO ODZYSKAJPOPOLUDNIA.PL</h1>
        
        <h3 className="text-xl font-semibold mt-8 mb-4">§ 1. Postanowienia ogólne</h3>
        <ol className="list-decimal pl-5 space-y-2 text-slate-300">
          <li>Sklep internetowy działający pod adresem odzyskajpopoludnia.pl prowadzony jest przez firmę: Jakub Gugulski, NIP: 6821811984, z siedzibą przy ul. Ratajów 30, 32-090 Słomniki.</li>
          <li>Adres poczty elektronicznej do kontaktu ze Sprzedawcą: zonaniematka@gmail.com.</li>
          <li>Niniejszy Regulamin określa zasady korzystania ze Sklepu, składania zamówień na produkty cyfrowe (E-booki), realizacji zamówień, korzystania z 14-dniowej Gwarancji Satysfakcji, składania reklamacji oraz praw przysługujących Kupującemu.</li>
          <li>Do korzystania ze Sklepu niezbędne jest urządzenie z dostępem do sieci Internet, standardowa przeglądarka internetowa, aktywny adres e-mail oraz oprogramowanie umożliwiające otwieranie plików w formacie PDF.</li>
        </ol>

        <h3 className="text-xl font-semibold mt-8 mb-4">§ 2. Przedmiot sprzedaży i definicje</h3>
        <ol className="list-decimal pl-5 space-y-2 text-slate-300">
          <li>Sprzedawca – podmiot wskazany w § 1 ust. 1 Regulaminu.</li>
          <li>Kupujący – osoba fizyczna, osoba prawna lub jednostka organizacyjna nieposiadająca osobowości prawnej, składająca zamówienie w Sklepie.</li>
          <li>Konsument – osoba fizyczna dokonująca zakupu niezwiązanego bezpośrednio z jej działalnością gospodarczą lub zawodową.</li>
          <li>E-book – treść cyfrowa w postaci pliku elektronicznego (w formacie PDF), dostępna w ofercie Sklepu.</li>
        </ol>

        <h3 className="text-xl font-semibold mt-8 mb-4">§ 3. Składanie i realizacja zamówień</h3>
        <ol className="list-decimal pl-5 space-y-2 text-slate-300">
          <li>Zamówienia w Sklepie można składać 24 godziny na dobę, 7 dni w tygodniu za pośrednictwem formularza zamieszczonego na stronie odzyskajpopoludnia.pl.</li>
          <li>W celu złożenia zamówienia Kupujący wybiera produkt, podaje adres e-mail niezbędny do dostarczenia E-booka oraz wybiera metodę płatności.</li>
          <li>Zamówienie zostaje zrealizowane niezwłocznie po zaksięgowaniu płatności. E-book wysyłany jest automatycznie na adres e-mail podany przez Kupującego w procesie zamówienia.</li>
        </ol>

        <h3 className="text-xl font-semibold mt-8 mb-4">§ 4. 14-dniowa Gwarancja Satysfakcji (Prawo do zwrotu)</h3>
        <ol className="list-decimal pl-5 space-y-2 text-slate-300">
          <li>Niezależnie od przepisów ustawowych dotyczących treści cyfrowych, Sprzedawca przyznaje Kupującemu 14-dniową Dobrowolną Gwarancję Satysfakcji.</li>
          <li>Kupujący ma prawo odstąpić od umowy i otrzymać zwrot 100% wpłaconej kwoty w terminie 14 dni od dnia zakupu E-booka, bez konieczności podawania przyczyny.</li>
          <li>Aby skorzystać z Gwarancji Satysfakcji i otrzymać zwrot pieniędzy, Kupujący zobowiązany jest wysłać krótką informację o chęci zwrotu na adres e-mail: zonaniematka@gmail.com przed upływem 14 dni od daty zakupu.</li>
          <li>Zwrot środków zostanie dokonany niezwłocznie, nie później niż w terminie 14 dni od dnia otrzymania zgłoszenia, przy użyciu takiego samego sposobu płatności, jakiego użył Kupujący, chyba że Kupujący wyraźnie zgodzi się na inny sposób zwrotu.</li>
        </ol>

        <h3 className="text-xl font-semibold mt-8 mb-4">§ 5. Reklamacje i zgodność towaru z umową</h3>
        <ol className="list-decimal pl-5 space-y-2 text-slate-300">
          <li>Sprzedawca ma obowiązek dostarczyć E-booka wolnego od wad technicznych i zgodnego z umową.</li>
          <li>W przypadku wystąpienia problemów technicznych z dostarczeniem lub otwarciem pliku, Kupujący ma prawo złożyć reklamację, wysyłając zgłoszenie na adres e-mail: zonaniematka@gmail.com.</li>
          <li>Reklamacja powinna zawierać adres e-mail podany podczas zakupu oraz opis problemu.</li>
          <li>Sprzedawca rozpatrzy reklamację w terminie do 14 dni od dnia jej otrzymania i poinformuje Kupującego o decyzji drogą elektroniczną.</li>
        </ol>

        <h3 className="text-xl font-semibold mt-8 mb-4">§ 6. Prawa autorskie i licencja</h3>
        <ol className="list-decimal pl-5 space-y-2 text-slate-300">
          <li>Wszelkie E-booki oferowane w Sklepie stanowią utwory w rozumieniu ustawy z dnia 4 lutego 1994 r. o prawie autorskim i prawach pokrewnych i chronione są prawem autorskim.</li>
          <li>Zakup E-booka uprawnia Kupującego do korzystania z niego wyłącznie na własny użytek osobisty.</li>
          <li>Kupujący nie ma prawa do kopiowania, rozpowszechniania, odsprzedawania, komercyjnego wykorzystywania ani udostępniania E-booka osobom trzecim w jakiejkolwiek formie bez pisemnej zgody Sprzedawcy.</li>
        </ol>

        <h3 className="text-xl font-semibold mt-8 mb-4">§ 7. Ochrona danych osobowych (RODO)</h3>
        <ol className="list-decimal pl-5 space-y-2 text-slate-300">
          <li>Administratorem danych osobowych Kupujących jest Sprzedawca (Jakub Gugulski, NIP: 6821811984).</li>
          <li>Dane osobowe (adres e-mail, dane płatnicze) przetwarzane są wyłącznie w celu realizacji zamówienia, rozliczeń podatkowych, obsługi zwrotów oraz rozpatrywania ewentualnych reklamacji, zgodnie z rozporządzeniem RODO.</li>
          <li>Kupujący ma prawo dostępu do treści swoich danych, ich poprawiania, usunięcia oraz ograniczenia przetwarzania.</li>
        </ol>

        <h3 className="text-xl font-semibold mt-8 mb-4">§ 8. Postanowienia końcowe</h3>
        <ol className="list-decimal pl-5 space-y-2 text-slate-300">
          <li>Sprzedawca zastrzega sobie prawo do zmiany Regulaminu z ważnych przyczyn (np. zmiany w przepisach prawa, zmiany metod płatności). Do zamówień złożonych przed zmianą Regulaminu stosuje się wersję obowiązującą w momencie składania zamówienia.</li>
          <li>W sprawach nieuregulowanych w niniejszym Regulaminie zastosowanie mają przepisy prawa polskiego, w tym Kodeksu cywilnego oraz Ustawy o prawach konsumenta.</li>
        </ol>
      </article>
    </div>
  );
}
