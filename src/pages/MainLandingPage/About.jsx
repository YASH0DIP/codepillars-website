import { ArrowUpRight } from "lucide-react";
import about1 from "../../assets/about1.jpg";
import about2 from "../../assets/about2.jpg";

export default function AboutUs() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image Cluster */}
        <div className="flex items-end gap-6">
          <div className="w-1/2 aspect-[3/4] rounded-3xl overflow-hidden">
            <img
              src={about2}
              alt="Team meeting"
              className="w-full h-full object-fill -mt-16 rounded-3xl"
            />
          </div>

          <div className="w-1/2 aspect-[3/4] rounded-3xl overflow-hidden">
            <img
              src={about1}
              alt="Team working"
              className="w-full h-full object-fill mt-16 rounded-3xl"
            />
          </div>
          <div className="w-5 h-5 shrink"></div>
        </div>

        {/* Right: Content */}
        <div>
          <div className="inline-block px-4 py-1 mb-6 text-sm font-medium text-orange-400 rounded-full border border-orange-200 bg-orange-500/10">
            About Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            A senior team that{" "}
            <span className="text-orange-400">
              treats your product like ours.
            </span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            Eight years, three continents, dozens of launches. We're a focused
            studio of designers, engineers and strategists who refuse to ship
            anything we wouldn't be proud to show our peers.
          </p>
          <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-bold hover:bg-slate-900/90 transition-colors">
            Our Story <ArrowUpRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
