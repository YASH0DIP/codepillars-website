import { ArrowUpRight } from "lucide-react";
import bloomverse from "../../assets/bloomverse.png";
import jainMarket from "../../assets/jain-artist.png";
import labelAkshi from "../../assets/label-akshi.png";

const projects = [
  {
    category: "Web3 • Multi-Portal • CRM",
    title: "BloomVerse Web3 Platform",
    desc: "A large-scale Web3 platform with multiple portals, a custom CRM and blockchain-based workflows for crypto-driven operations.",
    image: bloomverse,
    large: true,
  },
  {
    category: "Religious • Informational Platform",
    title: "Jain Artist Market Place",
    desc: "A serene and structured website designed for a Jain temple to showcase activities, information, and community initiatives.",
    image: jainMarket,
    large: false,
  },
  {
    category: "Fashion Brand • Portfolio Website",
    title: "Label Akshi — Fashion Portfolio",
    desc: "A premium portfolio website for a clothing brand, highlighting collections, brand identity and creative storytelling.",
    image: labelAkshi,
    large: false,
  },
];

export default function Portfolio() {
  return (
    <section className="py-24 px-6 bg-whie">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <div className="inline-block px-4 py-1 mb-6 text-sm font-medium text-orange-400 rounded-full border border-orange-200 bg-orange-100">
              ✦ SELECTED WORK
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Products we shipped. <br />
              <span className="text-orange-500">Outcomes we measured.</span>
            </h2>
          </div>
          <button className="flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all">
            View All Portfolios <ArrowUpRight size={18} />
          </button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Large Card */}
          <div>
            <div className="border border-gray-100 shadow-lg rounded-3xl overflow-hidden flex flex-col group">
              <div className="h-96 bg-gray-200 overflow-hidden">
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full h-full object-fill group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <span className="text-orange-400 text-sm font-medium">
                  {projects[0].category}
                </span>
                <h3 className="text-2xl font-bold mt-2 mb-4">
                  {projects[0].title}
                </h3>
                <p className="text-slate-400">{projects[0].desc}</p>
              </div>
            </div>
          </div>

          {/* Stacked Small Cards */}
          <div className="flex flex-col gap-6">
            {projects.slice(1).map((p, i) => (
              <div
                key={i}
                className="border border-gray-100 rounded-3xl shadow-lg overflow-hidden flex flex-col group"
              >
                <div className="h-64 bg-gray-200">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-fill group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <span className="text-orange-400 text-sm font-medium">
                    {p.category}
                  </span>
                  <h3 className="text-2xl font-bold mt-2 mb-4">{p.title}</h3>
                  <p className="text-slate-400">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
