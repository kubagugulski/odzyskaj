import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 max-w-4xl mx-auto text-center mb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-lime-950/20 border border-lime-900/40 rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-lime-500/5 to-transparent pointer-events-none" />
        
        <div className="relative z-10">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-lime-500/10 rounded-full text-lime-400">
              <ShieldCheck className="w-12 h-12" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Nic nie ryzykujesz. Serio.
          </h2>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Daję Ci 14 dni na przetestowanie protokołu z e-booka. Jeśli wdrożysz moje metody i nadal będziesz padać na kanapę o 17:00 — po prostu napisz, a zwrócę Ci 100% pieniędzy. Zero kruczków.
          </p>
          
          <div className="flex flex-col items-center gap-5">
            <a href="#zamowienie" className="w-full sm:w-auto bg-lime-400 hover:bg-lime-300 text-slate-950 font-black text-xl px-10 py-6 rounded-2xl shadow-[0_0_40px_-10px_rgba(163,230,53,0.4)] transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3">
              KUPUJĘ E-BOOKA <ArrowRight className="w-6 h-6" />
            </a>
            <span className="text-slate-500 font-medium">Kliknij, aby odzyskać 3 godziny każdego dnia.</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
