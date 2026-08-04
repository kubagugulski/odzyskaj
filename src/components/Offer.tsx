import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Lock } from 'lucide-react';

export default function Offer() {
  return (
    <section id="zamowienie" className="py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-slate-900 rounded-[2.5rem] p-8 md:p-14 border border-slate-800 relative overflow-hidden"
      >
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-lime-400 to-transparent opacity-50" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Zacznij odzyskiwać swój czas już dziś
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            59 zł to tyle, co jedna dostawa jedzenia z pizzerii. Jedzenie zniknie w 20 minut — ten e-book da Ci 3 godziny wolnego czasu każdego dnia.
          </p>
        </div>

        <div className="flex flex-col items-center bg-slate-950 rounded-[2rem] p-8 md:p-12 mb-8 border border-slate-800 shadow-xl relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-2xl text-slate-500 line-through font-medium">89 zł</span>
            <span className="bg-lime-400/10 text-lime-400 px-3 py-1 rounded-full text-sm font-bold border border-lime-400/20">
              Oszczędzasz 30 zł
            </span>
          </div>
          <div className="text-6xl md:text-7xl font-black text-white tracking-tight mb-10">
            59 zł
          </div>
          
          <button className="w-full sm:w-auto bg-lime-400 hover:bg-lime-300 text-slate-950 font-black text-xl px-10 py-6 rounded-2xl shadow-[0_0_40px_-10px_rgba(163,230,53,0.4)] transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 mb-8">
            KUPUJĘ E-BOOKA <ArrowRight className="w-6 h-6" />
          </button>
          
          <div className="flex flex-col items-center gap-5 text-slate-400 w-full">
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <Lock className="w-4 h-4 text-lime-400" />
              Bezpieczna, szyfrowana płatność
            </div>
            <div className="flex items-center justify-center gap-3 md:gap-4 flex-wrap w-full opacity-60">
              <span className="font-bold border border-slate-700 px-4 py-2 rounded-xl text-xs tracking-wider">BLIK</span>
              <span className="font-bold border border-slate-700 px-4 py-2 rounded-xl text-xs tracking-wider">Apple Pay</span>
              <span className="font-bold border border-slate-700 px-4 py-2 rounded-xl text-xs tracking-wider">VISA</span>
              <span className="font-bold border border-slate-700 px-4 py-2 rounded-xl text-xs tracking-wider">Mastercard</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-slate-400 mt-8 relative z-10 text-center">
          <ShieldCheck className="w-6 h-6 text-lime-400 shrink-0" />
          <span className="text-lg">Gwarancja 100% satysfakcji. 14 dni na zwrot bez pytań.</span>
        </div>

      </motion.div>
    </section>
  );
}
