import { motion } from 'motion/react';
import { Star, Zap, CreditCard, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 mb-8 shadow-sm backdrop-blur-sm"
      >
        <div className="flex text-amber-400">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
        </div>
        <span className="text-sm font-medium text-slate-300">Ocena 4.9/5 od pierwszych czytelników</span>
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6"
      >
        Wracasz z pracy o 17:00 i spędzasz resztę dnia <span className="text-lime-400">na kanapie?</span>
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed"
      >
        Przestań oddawać swoje prywatne życie za pensję. Zobacz, jak odzyskać 3-4 godziny czystej energii każdego dnia — bez durnych porad typu "pij więcej wody".
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="w-full sm:w-auto flex flex-col items-center gap-5"
      >
        <a href="#zamowienie" className="w-full sm:w-auto bg-lime-400 hover:bg-lime-300 text-slate-950 font-bold text-lg md:text-xl px-8 py-5 rounded-2xl shadow-[0_0_40px_-10px_rgba(163,230,53,0.4)] transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
          ODZYSKUJĘ SWÓJ CZAS<Zap className="w-6 h-6" />
        </a>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-slate-500 font-medium">
          <span className="flex items-center gap-1.5"><CreditCard className="w-4 h-4" /> Płatność BLIK / Apple Pay</span>
          <span className="hidden sm:inline text-slate-700">•</span>
          <span className="flex items-center gap-1.5"><Mail className="w-4 h-4" /> E-book PDF na mailu w 30s</span>
        </div>
      </motion.div>
    </section>
  );
}
