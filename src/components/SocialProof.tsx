import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

const testimonials = [
  {
    name: "Kasia",
    text: "O 17:30 zawsze wpadałam w tryb warzywa i scrollowałam TikToka do 22:00. Zastosowałam protokół z rozdziału 2 i pierwszy raz od roku miałam siłę wyjść z domu po pracy."
  },
  {
    name: "Tomek",
    text: "Myślałem, że mam chroniczne zmęczenie i brałem suplementy. Okazało się, że po prostu źle odcinałem głowę od firmy. Ten e-book zwraca się po pierwszym dniu."
  },
  {
    name: "Marta",
    text: "Przeczytane w jeden wieczór. Zero lania wody, same konkretne nawyki przełączania mózgu z pracy na dom."
  }
];

export default function SocialProof() {
  return (
    <section className="py-16 px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Też masz wrażenie, że <span className="text-slate-400">"po prostu tak wygląda dorosłość"</span>?
        </h2>
        <p className="text-slate-400 text-lg">Zobacz, z czym najczęściej mierzą się czytelnicy przed lekturą:</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1 }}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-8 relative flex flex-col justify-between"
          >
            <MessageCircle className="w-10 h-10 text-slate-800 absolute top-6 right-6" />
            <p className="text-slate-300 leading-relaxed mb-8 italic relative z-10 text-lg">"{t.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center font-bold text-lg text-slate-400">
                {t.name[0]}
              </div>
              <span className="font-semibold text-white">{t.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
