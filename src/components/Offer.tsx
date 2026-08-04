import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Lock } from 'lucide-react';

export default function Offer() {
  return (
    <section id="zamowienie" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-slate-900 rounded-[2.5rem] p-8 md:p-14 border border-slate-800 relative overflow-hidden"
      >
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-lime-400 to-transparent opacity-50" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="text-center mb-12 md:mb-16 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Zacznij odzyskiwać swój czas już dziś
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            59 zł to tyle, co jedna dostawa jedzenia z pizzerii. Jedzenie zniknie w 20 minut — ten e-book da Ci 3 godziny wolnego czasu każdego dnia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
          
          {/* MOCKUP E-BOOKA */}
          <div className="flex justify-center items-center lg:order-1 perspective-[1000px]">
            <motion.div 
              animate={{ rotateY: [-5, 5, -5], rotateX: [2, -2, 2] }} 
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-64 md:w-80 aspect-[2/3] rounded-r-3xl rounded-l-md shadow-[20px_20px_40px_rgba(0,0,0,0.5)] overflow-hidden bg-[#F5F5F0] border-l-[12px] border-[#E5E5E0] flex flex-col justify-center items-center text-center p-8 transform-gpu"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Opcjonalny obrazek użytkownika (odkomentuj, gdy dodasz plik mockup.png do folderu public) */}
              {/* <img src="/mockup.png" alt="Mockup E-booka" className="absolute inset-0 w-full h-full object-cover z-20" /> */}
              
              <div className="w-px h-16 bg-slate-800/20 mb-6" />
              <h3 className="text-3xl md:text-4xl font-serif text-slate-900 font-medium leading-tight mb-6 tracking-tight">
                JAK ODZYSKAĆ<br/>SWOJE<br/>POPOŁUDNIA.
              </h3>
              <div className="border-t border-b border-slate-800/20 py-3 mb-6 w-full">
                <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-slate-800 uppercase">
                  PROSTE SPOSOBY NA<br/>CHRONICZNE ZMĘCZENIE.
                </p>
              </div>
              <div className="w-px h-16 bg-slate-800/20 mt-2" />
              
              {/* Efekt światła na okładce */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent pointer-events-none" />
            </motion.div>
          </div>

          {/* CENNIK I CTA */}
          <div className="flex flex-col items-center bg-slate-950 rounded-[2rem] p-8 md:p-10 border border-slate-800 shadow-xl lg:order-2 w-full max-w-md mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-2xl text-slate-500 line-through font-medium">89 zł</span>
              <span className="bg-lime-400/10 text-lime-400 px-3 py-1 rounded-full text-sm font-bold border border-lime-400/20">
                Oszczędzasz 30 zł
              </span>
            </div>
            <div className="text-6xl md:text-7xl font-black text-white tracking-tight mb-8">
              59 zł
            </div>
            
            <button className="w-full bg-lime-400 hover:bg-lime-300 text-slate-950 font-black text-lg md:text-xl px-8 py-6 rounded-2xl shadow-[0_0_40px_-10px_rgba(163,230,53,0.4)] transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 mb-8">
              KUPUJĘ ZA <ArrowRight className="w-6 h-6" />
            </button>
            
            <div className="flex flex-col items-center gap-5 text-slate-400 w-full">
              <div className="flex items-center justify-center gap-2 text-sm font-medium">
                <Lock className="w-4 h-4 text-lime-400" />
                Bezpieczna, szyfrowana płatność
              </div>
              <div className="flex items-center justify-center gap-3 flex-wrap w-full opacity-60">
                <span className="font-bold border border-slate-700 px-3 py-1.5 rounded-xl text-xs tracking-wider">BLIK</span>
                <span className="font-bold border border-slate-700 px-3 py-1.5 rounded-xl text-xs tracking-wider">Apple Pay</span>
                <span className="font-bold border border-slate-700 px-3 py-1.5 rounded-xl text-xs tracking-wider">GPay</span>
                <span className="font-bold border border-slate-700 px-3 py-1.5 rounded-xl text-xs tracking-wider">VISA</span>
              </div>
            </div>
          </div>
          
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-slate-400 mt-12 relative z-10 text-center">
          <ShieldCheck className="w-6 h-6 text-lime-400 shrink-0" />
          <span className="text-lg">Gwarancja 100% satysfakcji. 14 dni na zwrot bez pytań.</span>
        </div>

      </motion.div>
    </section>
  );
}
