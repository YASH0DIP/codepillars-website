import {
  Rocket,
  ThumbsUp,
  Globe,
  Award,
  Cloud,
  Server,
  Palette,
  Layout,
  MessageSquare,
  ShoppingBag,
} from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import {} from "lucide-react";
import { useEffect, useState } from "react";

// Map companies to their respective icons
const companies = [
  { name: "Microsoft", icon: Cloud },
  { name: "AWS", icon: Server },
  { name: "Adobe", icon: Palette },
  { name: "Figma", icon: Layout },
  { name: "Slack", icon: MessageSquare },
  { name: "Shopify", icon: ShoppingBag },
];

const stats = [
  { icon: Rocket, value: "500+", label: "Projects Delivered" },
  { icon: ThumbsUp, value: "98%", label: "Client Satisfaction" },
  { icon: Globe, value: "50+", label: "Global Clients" },
  { icon: Award, value: "8+", label: "Years Experience" },
];

export default function TrustedCompanies() {
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (isPaused) {
      // setTimeout(() => {
      controls.stop();
      // }, 500);
    } else {
      // setTimeout(() => {
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          duration: 60,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
      // }, 500);
    }
  }, [isPaused, controls]);

  return (
    <section
      className="py-8 px-6 bg-[#FDFBF9]"
      // style={{ fontFamily: "Poppins" }}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block px-4 py-1 mb-6 text-sm font-medium text-orange-500 rounded-full border border-orange-200 bg-orange-50">
          Trusted by startups & global businesses
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Trusted By{" "}
          <span className="text-orange-500">Innovative Companies</span>{" "}
          Worldwide
        </h2>
        <p className="text-slate-500 mb-12">
          Helping startups, SaaS businesses, and enterprises build scalable
          digital experiences.
        </p>

        <div className="flex overflow-hidden mb-16 py-4 mask-linear-fade">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={controls}
            initial={{ x: "0%" }} // Set initial position
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => {
              setIsPaused(false);
            }}
          >
            {[...companies, ...companies].map((company, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.25, y: -1 }}
                className="flex items-center gap-3 px-8 py-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-amber-500 hover:shadow-orange-100 hover:shadow-lg transition-all duration-100 cursor-pointer"
              >
                <company.icon className="w-6 h-6 text-slate-700" />
                <span className="text-lg font-bold text-slate-900">
                  {company.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-lg shadow-sm text-left hover:border-amber-500"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-orange-50 text-orange-500 rounded-lg mb-4">
                <stat.icon size={24} />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
