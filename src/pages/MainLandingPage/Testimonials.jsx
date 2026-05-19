import { Quote } from "lucide-react";
import avatar from "../../assets/avatar.jpg";

const testimonials = [
  {
    name: "Michael Carter",
    role: "Founder, GrowthSync",
    text: "Their team delivered a seamless web experience with modern design standards, smooth communication, and outstanding development quality.",
    avatar: avatar,
  },
  {
    name: "Sarah Johnson",
    role: "CEO, NexaTech",
    text: "CodePillars transformed our vision into a premium digital platform with exceptional UI/UX and scalable development.",
    avatar: avatar,
  },
  {
    name: "David Wilson",
    role: "CTO, CloudNova",
    text: "CodePillars helped us scale our product with enterprise-level execution, clean UI/UX, and a highly reliable development process.",
    avatar: avatar,
  },
];

export default function Testimonials() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div className="inline-flex px-4 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-orange-600 text-sm font-semibold mb-6">
          TESTIMONIAL
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Some Words From Our <span className="text-orange-400">Happy Clients</span>
        </h2>
        <p className="text-slate-500 mb-20 text-lg">
          Trusted by startups and enterprises for delivering impactful digital experiences that drive real business growth.
        </p>

        {/* Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className={`bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] 
              ${i === 0 ? "mt-28" : i === 1 ? "mt-14" : "mt-0"}`}
            >
              <div className="relative mb-6">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-xl object-cover" />
                <div className="absolute -top-2 -right-2 text-gray-600">
                   <Quote size={32} strokeWidth={1} />
                </div>
              </div>
              
              <p className="text-slate-600 mb-6 leading-relaxed italic">"{t.text}"</p>
              
              <div className="border-t border-gray-300 pt-6">
                <h4 className="font-bold text-slate-900">{t.name}</h4>
                <p className="text-orange-500 font-medium text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}