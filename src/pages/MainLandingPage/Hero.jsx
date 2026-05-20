import { ArrowUpRight, Star, Briefcase, Users } from "lucide-react";
import heroImg from "../../assets/hero-bg.jpg";

const stats = [
  { icon: Star, label: "Rating", value: "4.9" },
  { icon: Briefcase, label: "Projects Delivered", value: "500+" },
  { icon: Users, label: "Global Clients", value: "50+" },
];

export default function Hero() {
  return (
    <section
      className="relative pt-32 pb-20 px-6 text-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Optional Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-[#FDFBF9]/30 pointer-events-none" />

      {/* Content wrapper to keep it above the overlay */}
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-orange-600 text-xs font-semibold mb-6">
          <span>✨</span> Digital Product & AI Development Agency
        </div>

        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 max-w-5xl mx-auto">
          We Build Digital Experiences <br />
          <span className="text-orange-500">That Scale.</span>
        </h1>

        <p className="text-lg max-w-4xl mx-auto mb-10 leading-relaxed text-white">
          Transforming ideas into powerful web, mobile, AI and cloud
          solutions—engineered for ambitious teams that refuse to ship anything
          average.
        </p>

        <div className="flex items-center justify-center gap-4 mb-16">
          <button className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800">
            Start Your Project <ArrowUpRight size={20} />
          </button>
          <button className="flex items-center gap-2 bg-white border border-slate-200 px-8 py-4 rounded-full font-semibold hover:border-slate-300">
            View Our Work <ArrowUpRight size={20} />
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-slate-100 hover:border-amber-500 shadow-sm min-w-50"
            >
              <div className="p-2 bg-orange-50 rounded-lg text-orange-500">
                <stat.icon size={24} />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
