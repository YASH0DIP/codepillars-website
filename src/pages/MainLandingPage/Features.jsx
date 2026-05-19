import { Rocket, ShieldCheck, Layers3, PenTool } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Fast Delivery",
    description:
      "Sprint-shaped, milestone-driven. Most MVPs ship in 8–12 weeks.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Code",
    description:
      "OWASP-grade reviews, automated SAST/DAST, audit trails by default.",
  },
  {
    icon: Layers3,
    title: "Scalable Architecture",
    description:
      "Built to handle 10x — service boundaries, queues, observability.",
  },
  {
    icon: PenTool,
    title: "Clean UI/UX",
    description: "Design systems that survive 5 years of feature growth.",
  },
];

export default function Features() {
  return (
    <section className="py-8 px-6 bg-[#FDFBF9]">
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-orange-600 text-xs font-semibold mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
          Why teams pick us
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Designed For <span className="text-orange-500">Impact.</span>{" "}
          Engineered For <span className="text-orange-500">Scale.</span>
        </h2>
        <p className="text-slate-600 text-lg mb-16">
          The reasons our clients keep coming back, project after project.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-orange-50 text-orange-500 rounded-2xl mb-6">
                <feature.icon size={24} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
