import { motion } from "framer-motion";
import { ParkingMeterIcon, HeartIcon, Target, Sparkles } from "lucide-react";

const features = [
  {
    icon: ParkingMeterIcon,
    title: "Craft over speed",
    description:
      "We refuse to ship anything we wouldn't proudly show our peers.",
  },
  {
    icon: HeartIcon,
    title: "Owners, not vendors",
    description:
      "We treat your product like ours — outcomes over hours.",
  },
  {
    icon: Target,
    title: "Measured by impact",
    description:
      "Every engagement has a clear north-star metric we move.",
  },
  {
    icon: Sparkles,
    title: "Polish is the product",
    description: "The motion, the latency, the empty states. All of it.",
  },
];

export default function WhatWeBelieve() {
  return (
    <section className="py-8 px-6 md:px-2 bg-[#FDFBF9]">
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div className="inline-flex uppercase items-center gap-2 px-4 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-orange-600 text-xs font-semibold mb-6">
          <span className="w-1.5 h-1.5  rounded-full bg-orange-400" />
          What we believe
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Four principles <span className="text-orange-400">we don't compromise.</span>{" "}
          {/* Engineered For <span className="text-orange-500">Scale.</span> */}
        </h2>
        <p className="text-slate-600 text-lg mb-16">
          The reasons our clients keep coming back, project after project.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              // className="bg-white p-8 rounded-3xl border border-slate-100 shadow-none hover:shadow-[0_4px_20px_5px_rgba(0,0,0,0.05)] hover:shadow-4xl hover:-translate-y-2 cursor-pointer transition-all duration-700"
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-shadow duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-orange-50 text-orange-300 rounded-2xl mb-6">
                <feature.icon size={24} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
