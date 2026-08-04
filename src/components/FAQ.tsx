import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Ile czasu zajmie mi przeczytanie?",
    a: "E-book ma zwięzłą formę bez lania wody. Przeczytasz go w około 45 minut i od razu możesz wdrożyć wnioski."
  },
  {
    q: "W jakiej formie otrzymam produkt?",
    a: "W formie pliku PDF, który natychmiast po opłaceniu trafia na Twój podany adres e-mail. Możesz go czytać na telefonie, tablecie lub komputerze."
  },
  {
    q: "Co jeśli to u mnie nie zadziała?",
    a: "Daję Ci 14 dni na przetestowanie protokołu. Jeśli nie odzyskasz energii po pracy — napisz do mnie, a zwrócę Ci 100% pieniędzy. Bez kruczków i trudnych pytań."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 px-4 sm:px-6 max-w-3xl mx-auto mb-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Najczęstsze pytania
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div 
            key={i} 
            className={`border rounded-2xl overflow-hidden transition-colors ${openIndex === i ? 'bg-slate-900 border-lime-900/50' : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'}`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-6 md:p-8 text-left"
            >
              <span className="text-lg md:text-xl font-semibold text-slate-200 pr-4">{faq.q}</span>
              <ChevronDown className={`w-6 h-6 text-slate-500 shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-lime-400' : ''}`} />
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 md:px-8 pb-6 md:pb-8 text-slate-400 text-lg leading-relaxed">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
