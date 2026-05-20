import { motion } from "framer-motion";

const data = [
  {
    title: "OUR MISSION",
    desc: "To help ambitious teams turn ideas into world-class digital products — without the agency drama.",
  },
  {
    title: "OUR VISION",
    desc: "A future where every team — startup or enterprise — has access to product-grade engineering and design.",
  },
];

export default function MissionVision() {
  return (
    <section className="py-10 bg-[#FDFBF9] px-6 md:px-2">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-12 rounded-2xl border-2 border-slate-50 hover:border-orange-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-shadow duration-300"
          >
            <h3 className="text-orange-400 font-bold text-2xl tracking-widest mb-6">
              {item.title}
            </h3>
            <p className="text-slate-900 text-xl md:text-xl leading-relaxed font-medium">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}