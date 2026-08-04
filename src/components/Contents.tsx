import { motion } from 'motion/react';
import { BookOpen, Brain, Battery, Shield, Rocket } from 'lucide-react';

const chapters = [
  {
    num: "01",
    title: "Dlaczego odcina Ci prąd o 17:00?",
    desc: "Poznaj prawdziwy mechanizm zmęczenia psychicznego i dowiedz się, dlaczego siedzenie przy biurku wykończa bardziej niż praca fizyczna.",
    icon: Battery
  },
  {
    num: "02",
    title: "Złote 30 minut. Jak wracać do domu, żeby nie spaść na kanapę",
    desc: "Praktyczny protokół na pierwsze pół godziny po wejściu do mieszkania, który oszukuje układ nerwowy i zapobiega wpadnięciu w 'tryb warzywa'.",
    icon: Rocket
  },
  {
    num: "04",
    title: "Jak odciąć głowę od pracy i zatrzymać scrollowanie",
    desc: "Narzędzia do natychmiastowego wyłączenia analizowania firmowych spraw oraz zatrzymania nawykowego sięgania po ekran.",
    icon: Brain
  },
  {
    num: "05",
    title: "Małe kroki do długoterminowej energii",
    desc: "Nawykowe mikro-zmiany, które sprawią, że przestaniesz wreszcie żyć od weekendu do weekendu.",
    icon: BookOpen
  },
  {
    num: "Bonus",
    title: "Twój Plan Ratunkowy",
    desc: "Gotowa ściąga krok po kroku na dni z 0% baterii – co robić, kiedy naprawdę nie masz siły na nic.",
    icon: Shield
  },
  {
    num: "Dodatek",
    title: "Historie zmian (Case Studies)",
    desc: "Prawdziwe przykłady osób, które wdrożyły system i odzyskały popołudnia.",
    icon: BookOpen
  }
];

export default function Contents() {
  return (
    <section className="py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Co dokładnie znajdziesz w środku?
        </h2>
        <p className="text-slate-400 text-lg">Bez owijania w bawełnę. Sama praktyka.</p>
      </div>

      <div className="space-y-6">
        {chapters.map((ch, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1 }}
            className="group flex flex-col md:flex-row gap-6 md:gap-8 p-8 rounded-[2rem] bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
          >
            <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-800 text-lime-400 group-hover:bg-lime-400 group-hover:text-slate-950 transition-colors">
              <ch.icon className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                  {ch.num === 'Bonus' ? 'Zakończenie' : ch.num === 'Dodatek' ? 'Dodatek' : `Rozdział ${ch.num}`}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{ch.title}</h3>
              <p className="text-slate-400 text-lg leading-relaxed">{ch.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
