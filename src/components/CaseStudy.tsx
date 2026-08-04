import { motion } from 'motion/react';
import { Battery, BatteryCharging, XCircle, CheckCircle2 } from 'lucide-react';

export default function CaseStudy() {
  return (
    <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Metamorfoza po przeczytaniu
        </h2>
        <p className="text-slate-400 text-lg">Od gnicia na łóżku do wolnego wieczoru</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
        {/* BEFORE */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-10"
        >
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-800">
            <div className="p-3 bg-red-950/50 text-red-400 rounded-2xl">
              <Battery className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Przed</h3>
          </div>
          <ul className="space-y-6">
            {[
              "Powrót do domu bez sił",
              "Leżenie 'tylko na 10 minut'",
              "Wybudzenie o 20:00 z frustracją",
              "Scrollowanie telefonu w nieskończoność",
              "Wyrzuty sumienia o 23:00"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-slate-300 text-lg">
                <XCircle className="w-6 h-6 text-red-500/80 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* AFTER */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="bg-lime-950/10 border border-lime-900/30 rounded-3xl p-8 md:p-10 relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-lime-500/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-lime-900/30 relative z-10">
            <div className="p-3 bg-lime-500/20 text-lime-400 rounded-2xl">
              <BatteryCharging className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Po Lekturze</h3>
          </div>
          <ul className="space-y-6 relative z-10">
            {[
              "Powrót do domu z planem",
              "Zastosowanie 30-minutowego resetu",
              "Energia na hobby, trening i sprzątanie",
              "Odcinka od spraw zawodowych",
              "Wolny wieczór ze spokojną głową"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-slate-200 text-lg">
                <CheckCircle2 className="w-6 h-6 text-lime-400 shrink-0 mt-0.5" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
