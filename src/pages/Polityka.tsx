import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Polityka() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link to="/" className="inline-flex items-center gap-2 text-lime-400 hover:text-lime-300 font-medium mb-8">
        <ArrowLeft className="w-5 h-5" /> Wróć do strony głównej
      </Link>
      
      <article className="prose prose-invert prose-slate max-w-none prose-headings:text-lime-400 prose-a:text-lime-400 hover:prose-a:text-lime-300">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">POLITYKA PRYWATNOŚCI I PLIKÓW COOKIES</h1>
        <h2 className="text-2xl font-bold mb-8 text-slate-300">SERWISU ODZYSKAJPOPOLUDNIA.PL</h2>
        
        <h3 className="text-xl font-semibold mt-8 mb-4">§ 1. Administrator Danych Osobowych</h3>
        <ul className="list-disc pl-5 space-y-2 text-slate-300">
          <li>Administratorem Danych Osobowych serwisu odzyskajpopoludnia.pl jest firma: Jakub Gugulski, z siedzibą przy ul. Ratajów 30, 32-090 Słomniki, NIP: 6821811984.</li>
          <li>W sprawach związanych z ochroną danych osobowych oraz realizacją praw użytkowników można kontaktować się pod adresem e-mail: zonaniematka@gmail.com.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-4">§ 2. Cele, podstawy prawne i czas przetwarzania danych</h3>
        <p className="mb-4 text-slate-300">Dane osobowe użytkowników przetwarzane są w następujących celach:</p>
        <ul className="list-disc pl-5 space-y-4 text-slate-300">
          <li>
            <strong>Realizacja zamówienia i dostarczenie E-booka:</strong>
            <ul className="list-circle pl-5 mt-2 space-y-1 text-slate-400">
              <li>Zakres danych: adres e-mail, imię i nazwisko (jeśli podano), dane płatności.</li>
              <li>Podstawa prawna: niezbędność do wykonania umowy sprzedaży (art. 6 ust. 1 lit. b RODO).</li>
              <li>Okres przechowywania: czas niezbędny do realizacji zamówienia, a następnie okres przedawnienia ewentualnych roszczeń.</li>
            </ul>
          </li>
          <li>
            <strong>Obsługa reklamacji oraz 14-dniowej Gwarancji Satysfakcji (zwrotów):</strong>
            <ul className="list-circle pl-5 mt-2 space-y-1 text-slate-400">
              <li>Zakres danych: adres e-mail, numer zamówienia, dane do zwrotu środków.</li>
              <li>Podstawa prawna: prawnie uzasadniony interes Administratora oraz obowiązek prawny (art. 6 ust. 1 lit. c i f RODO).</li>
              <li>Okres przechowywania: 5 lat od końca roku kalendarzowego, w którym upłynął termin rozliczenia transakcji (wymogi podatkowe).</li>
            </ul>
          </li>
          <li>
            <strong>Obowiązki księgowe i podatkowe:</strong>
            <ul className="list-circle pl-5 mt-2 space-y-1 text-slate-400">
              <li>Zakres danych: dane wymagane do wystawienia dowodu sprzedaży/faktury.</li>
              <li>Podstawa prawna: wypełnienie obowiązków prawnych ciążących na Administratorze (art. 6 ust. 1 lit. c RODO).</li>
              <li>Okres przechowywania: 5 lat, licząc od końca roku kalendarzowego, w którym upłynął termin płatności podatku.</li>
            </ul>
          </li>
          <li>
            <strong>Analityka, statystyka i marketing (np. Piksel TikToka):</strong>
            <ul className="list-circle pl-5 mt-2 space-y-1 text-slate-400">
              <li>Zakres danych: adres IP, dane o urządzeniu, przeglądarce i aktywności na stronie.</li>
              <li>Podstawa prawna: prawnie uzasadniony interes Administratora polegający na optymalizacji reklamy i serwisu (art. 6 ust. 1 lit. f RODO) oraz zgoda na pliki cookies.</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-4">§ 3. Odbiorcy danych (Udostępnianie danych osobom trzecim)</h3>
        <p className="mb-4 text-slate-300">Administrator nie sprzedaje ani nie udostępnia danych osobowych podmiotom nieuprawnionym. Dane są przekazywane wyłącznie zaufanym podmiotom wspierającym obsługę Sklepu na podstawie umów powierzenia przetwarzania danych:</p>
        <ul className="list-disc pl-5 space-y-2 text-slate-300">
          <li>Dostawcom usług płatniczych (np. operatorom płatności BLIK, kart płatniczych, szybkich przelewów) – w celu sfinalizowania transakcji.</li>
          <li>Dostawcy hostingu i serwerów – w celu przechowywania danych na bezpiecznych serwerach.</li>
          <li>Dostawcom systemów wysyłkowych/mailingowych – w celu automatycznego wysłania pliku E-booka na e-mail po dokonaniu wpłaty.</li>
          <li>Dostawcom narzędzi analitycznych i reklamowych (np. TikTok, Google) – w celu mierzenia skuteczności kampanii reklamowych.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-4">§ 4. Prawa Użytkownika</h3>
        <p className="mb-4 text-slate-300">Każdemu użytkownikowi, którego dane dotyczą, przysługują następujące prawa wynikające z RODO:</p>
        <ul className="list-disc pl-5 space-y-2 text-slate-300">
          <li>Prawo dostępu do swoich danych oraz otrzymania ich kopii.</li>
          <li>Prawo do sprostowania (poprawiania) swoich danych.</li>
          <li>Prawo do usunięcia danych („prawo do bycia zapomnianym”) – jeśli nie ma podstaw prawnych do ich dalszego przetwarzania (np. wymogów podatkowych).</li>
          <li>Prawo do ograniczenia przetwarzania danych.</li>
          <li>Prawo do wniesienia sprzeciwu wobec przetwarzania danych na podstawie prawnie uzasadnionego interesu.</li>
          <li>Prawo do wniesienia skargi do organu nadzorczego: Jeśli uznasz, że Twoje dane są przetwarzane niezgodnie z prawem, masz prawo złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych (PUODO).</li>
        </ul>
        <p className="mt-4 text-slate-300">W celu realizacji swoich praw skontaktuj się pod adresem: zonaniematka@gmail.com.</p>

        <h3 className="text-xl font-semibold mt-8 mb-4">§ 5. Pliki Cookies (Ciasteczka)</h3>
        <ul className="list-disc pl-5 space-y-4 text-slate-300">
          <li>Serwis odzyskajpopoludnia.pl używa plików cookies (niewielkich plików tekstowych zapisywanych na urządzeniu użytkownika).</li>
          <li>
            Stosowane są dwa główne rodzaje plików cookies:
            <ul className="list-circle pl-5 mt-2 space-y-1 text-slate-400">
              <li><strong>Niezbędne:</strong> umożliwiające prawidłowe działanie strony, koszyka i procesów płatności.</li>
              <li><strong>Analityczne / Marketingowe (np. TikTok Pixel):</strong> pomagające mierzyć ruch na stronie oraz analizować, które reklamy generują sprzedaż.</li>
            </ul>
          </li>
          <li>Użytkownik może w każdej chwili zmienić ustawienia dotyczące plików cookies w swojej przeglądarce internetowej (w tym całkowicie zablokować ich zapisywanie). Ograniczenie stosowania plików cookies niezbędnych może jednak wpłynąć na niektóre funkcjonalności strony (np. proces zakupu).</li>
        </ul>
      </article>
    </div>
  );
}
