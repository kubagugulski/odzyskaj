import { motion } from 'motion/react';
import { Download, CheckCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dziekuje() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-12 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 md:p-14 max-w-2xl w-full relative overflow-hidden shadow-2xl"
      >
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-lime-400 to-transparent opacity-50" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-lime-500/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative z-10">
          <div className="flex justify-center mb-8">
            <div className="p-5 bg-lime-500/10 rounded-full text-lime-400 border border-lime-500/20 shadow-[0_0_30px_rgba(163,230,53,0.2)]">
              <CheckCircle className="w-16 h-16" />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Dziękuję za zakup!
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-lg mx-auto">
            Twój e-book "Jak odzyskać swoje popołudnia" jest gotowy do pobrania. Wysłaliśmy również kopię na Twój adres e-mail.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <a href="/ebook-download.pdf" download className="w-full sm:w-auto bg-lime-400 hover:bg-lime-300 text-slate-950 font-black text-lg md:text-xl px-10 py-6 rounded-2xl shadow-[0_0_40px_-10px_rgba(163,230,53,0.4)] transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3">
              <Download className="w-6 h-6 shrink-0" /> POBIERZ E-BOOKA (PDF)
            </a>
            
            <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
              <Mail className="w-4 h-4 shrink-0" /> Sprawdź folder SPAM, jeśli nie widzisz maila.
            </div>
          </div>
        </div>
      </motion.div>
      
      <div className="mt-12">
        <Link to="/" className="text-slate-500 hover:text-slate-400 underline underline-offset-4 transition-colors font-medium">
          Wróć do strony głównej
        </Link>
      </div>
    </div>
  );
}
