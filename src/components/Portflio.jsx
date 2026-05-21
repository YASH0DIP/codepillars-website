import { ArrowUpRight } from "lucide-react";
import bloomverse from "../assets/bloomverse.png";
import jainMarket from "../assets/jain-artist.png";
import labelAkshi from "../assets/label-akshi.png";
import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";

const projects = [
  {
    category: "Web3 • Multi-Portal • CRM",
    title: "BloomVerse Web3 Platform",
    desc: "A large-scale Web3 platform with multiple portals, a custom CRM and blockchain-based workflows for crypto-driven operations.",
    image: bloomverse,
    large: true,
    type: ["marketplace", "crypto", "web3"],
    tags: ["Web3", "Crypto", "Node.js", "React"],
    link: "",
    span: "lg:col-span-4 lg:row-span-2",
    height: "h-[500px]", // Larger card
  },
  {
    category: "Religious • Informational Platform",
    title: "Jain Artist Market Place",
    desc: "A serene and structured website designed for a Jain temple to showcase activities, information, and community initiatives.",
    image: jainMarket,
    large: false,
    type: ["marketplace", "e-commerce"],
    tags: ["Marketplace", "React", "Tailwind"],
    link: "",
    span: "lg:col-span-2 lg:row-span-2",
    height: "h-[500px]", // Standard horizontal card
  },
  {
    category: "Fashion Brand • Portfolio Website",
    title: "Label Akshi — Fashion Portfolio",
    desc: "A premium portfolio website for a clothing brand, highlighting collections, brand identity and creative storytelling.",
    image: labelAkshi,
    large: false,
    type: ["fashion", "portfolio"],
    tags: ["Portfolio", "Fashion", "React"],
    link: "",
    span: "lg:col-span-2 lg:row-span-1",
    height: "h-[500px]", // Narrow vertical card
  },

  {
    category: "E-commerce • Youth Brand",
    title: "PopShop — E-commerce Store",
    desc: "A funky and modern e-commerce experience designed for a youth-centric brand with bold visuals and smooth navigation.",
    image: labelAkshi,
    large: false,
    type: ["e-commerce", "marketplace"],
    tags: ["E-Commerce", "React", "Razorpay"],
    link: "",
    span: "lg:col-span-4 lg:row-span-2",
    height: "h-[500px]", // Wide horizontal card
  },
  {
    category: "Religious • Informational Platform",
    title: "Jain Artist Market Place",
    desc: "A serene and structured website designed for a Jain temple to showcase activities, information, and community initiatives.",
    image: jainMarket,
    large: false,
    type: ["marketplace", "e-commerce"],
    tags: ["Marketplace", "React", "Tailwind"],
    link: "",
    span: "lg:col-span-3 lg:row-span-2",
    height: "h-[500px]",
  },
  {
    category: "News • AI Integration",
    title: "AI-Powered News Platform",
    desc: "A funky and modern e-commerce experience designed for a youth-centric brand with bold visuals and smooth navigation.",
    image: labelAkshi,
    large: false,
    type: ["ai", "news"],
    tags: ["AI", "News", "MERN"],
    link: "",
    span: "lg:col-span-3 lg:row-span-2",
    height: "h-[500px]",
  },
  {
    category: "News • AI Integration",
    title: "AI-Powered News Platform",
    desc: "A funky and modern e-commerce experience designed for a youth-centric brand with bold visuals and smooth navigation.",
    image: labelAkshi,
    large: false,
    type: ["ai", "news"],
    tags: ["AI", "News", "MERN"],
    link: "",
    span: "lg:col-span-2 lg:row-span-2",
    height: "h-[500px]",
  },
  {
    category: "News • AI Integration",
    title: "AI-Powered News Platform",
    desc: "A funky and modern e-commerce experience designed for a youth-centric brand with bold visuals and smooth navigation.",
    image: labelAkshi,
    large: false,
    type: ["ai", "news"],
    tags: ["AI", "News", "MERN"],
    link: "",
    span: "lg:col-span-2 lg:row-span-2",
    height: "h-[500px]",
  },
  {
    category: "News • AI Integration",
    title: "AI-Powered News Platform",
    desc: "A funky and modern e-commerce experience designed for a youth-centric brand with bold visuals and smooth navigation.",
    image: labelAkshi,
    large: false,
    type: ["ai", "news"],
    tags: ["AI", "News", "MERN"],
    link: "",
    span: "lg:col-span-2 lg:row-span-2",
    height: "h-[500px]",
  },
];

export default function Portfolio({ number }) {
  const [activeTab, setActiveTab] = useState("All");
  const navigate = useNavigate();
  const paginatedPortfolios = !number ? projects : projects?.slice(0, number);
  const filtered = useMemo(() => {
    if (activeTab === "All" && !number) {
      return paginatedPortfolios;
    }
    return paginatedPortfolios.filter((project) =>
      project?.type.includes(activeTab.toLowerCase()),
    );
  }, [paginatedPortfolios, activeTab, number]);

  return (
    <section className="py-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <div>
            <div className="inline-block px-4 py-1 mb-6 text-sm font-medium text-orange-400 rounded-full border border-orange-200 bg-orange-100">
              ✦ SELECTED WORK
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Products we shipped. <br />
              <span className="text-orange-500">Outcomes we measured.</span>
            </h2>
          </div>
          {number && (
            <button
              onClick={() => navigate("/portfolio")}
              className="flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              View All Portfolios <ArrowUpRight size={18} />
            </button>
          )}
        </div>

        {!number && (
          <div className="flex flex-wrap items-center gap-4 mb-8">
            {[
              "All",
              "Web3",
              "AI",
              "E-Commerce",
              "Portfolio",
              "Marketplace",
            ]?.map((item) => (
              <span
                onClick={() => setActiveTab(item)}
                className={`${activeTab !== item ? "bg-white hover:bg-gray-50 text-gray-500" : "bg-slate-800 hover:bg-slate-800/90 text-white"} px-4 py-2 rounded-3xl cursor-pointer border border-gray-100`}
              >
                {item}
              </span>
            ))}
          </div>
        )}

        {/* Dynamic Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 grid-flow-row-dense">
          {filtered?.map((p, i) => (
            <div
              key={i}
              className={`border border-gray-100 rounded-3xl shadow-lg overflow-hidden flex flex-col group ${p.span} ${p.height} h-3/4`}
            >
              <div className={`h-[60%] overflow-hidden`}>
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

              <div className="flex items-center justify-between pb-6 px-8">
                <div className="flex items-center gap-2">
                  {p?.tags?.map((t) => (
                    <span className="px-2 py-0.5 border border-gray-200 bg-gray-50 rounded-3xl text-xs text-gray-500">
                      {t}
                    </span>
                  ))}
                </div>
                <div
                  className="cursor-pointer p-1 rounded-full hover:bg-gray-50"
                  onClick={() => {
                    window.location = p.link;
                  }}
                >
                  <ArrowUpRight />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
