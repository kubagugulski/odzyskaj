import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-12 px-4 text-center text-slate-500 text-sm mt-auto">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        <p className="text-base text-slate-400">© {new Date().getFullYear()} Jak odzyskać swoje popołudnia. Wszelkie prawa zastrzeżone.</p>
        <div className="flex gap-6 underline underline-offset-4 opacity-70 hover:opacity-100 transition-opacity">
          <Link to="/regulamin">Regulamin</Link>
          <Link to="/polityka-prywatnosci">Polityka Prywatności</Link>
        </div>
      </div>
    </footer>
  );
}
