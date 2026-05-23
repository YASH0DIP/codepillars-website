// import { ArrowUpRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import bloomverse from "../assets/bloomverse.png";
import jainMarket from "../assets/jain-artist.png";
import labelAkshi from "../assets/label-akshi.png";
import ainews from "../assets/ainews.png";
import { useState, useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";

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
    image: ainews,
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
    image: ainews,
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
    image: ainews,
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

// ─── Responsive orbit dimensions derived from container width ─────────────────
function getOrbitDimensions(containerWidth) {
  // xs < 400, sm 400–639, md 640–1023, lg 1024+
  if (containerWidth < 380) {
    return { outerR: 120, innerR: 70, cardSize: 46, miniSize: 34, centerR: 36 };
  } else if (containerWidth < 500) {
    return { outerR: 148, innerR: 88, cardSize: 54, miniSize: 40, centerR: 40 };
  } else if (containerWidth < 700) {
    return {
      outerR: 175,
      innerR: 105,
      cardSize: 62,
      miniSize: 46,
      centerR: 44,
    };
  } else {
    return {
      outerR: 220,
      innerR: 130,
      cardSize: 82,
      miniSize: 62,
      centerR: 48,
    };
  }
}

// ─── OrbitalPortfolio ─────────────────────────────────────────────────────────
function OrbitalPortfolio({ projects, onHover, hoveredIndex }) {
  const containerRef = useRef(null);
  const [dims, setDims] = useState({
    outerR: 220,
    innerR: 130,
    cardSize: 82,
    miniSize: 62,
    centerR: 48,
  });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setDims(getOrbitDimensions(entry.contentRect.width));
    });
    ro.observe(el);
    setDims(getOrbitDimensions(el.offsetWidth));
    return () => ro.disconnect();
  }, []);

  const { outerR, innerR, cardSize, miniSize, centerR } = dims;
  const outerCount = Math.ceil(projects.length / 2);
  const innerCount = Math.floor(projects.length / 2);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Outer orbit ring */}
      <div
        style={{
          position: "absolute",
          width: outerR * 2,
          height: outerR * 2,
          borderRadius: "50%",
          border: "1px dashed rgba(249,115,22,0.15)",
          animation: "spin-slow 40s linear infinite",
          flexShrink: 0,
        }}
      />
      {/* Inner orbit ring */}
      <div
        style={{
          position: "absolute",
          width: innerR * 2,
          height: innerR * 2,
          borderRadius: "50%",
          border: "1px dashed rgba(249,115,22,0.1)",
          animation: "spin-slow 28s linear infinite reverse",
          flexShrink: 0,
        }}
      />

      {/* Center label */}
      <div
        style={{
          position: "absolute",
          width: centerR * 2,
          height: centerR * 2,
          borderRadius: "50%",
          background: "rgba(249,115,22,0.08)",
          border: "1px solid rgba(249,115,22,0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 2,
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontSize: Math.max(14, centerR * 0.42),
            fontWeight: 700,
            color: "#f97316",
          }}
        >
          {projects.length}
        </span>
        <span
          style={{
            fontSize: Math.max(7, centerR * 0.19),
            color: "#9ca3af",
            letterSpacing: "0.08em",
          }}
        >
          PROJECTS
        </span>
      </div>

      {/* Outer orbit items */}
      {projects.slice(0, outerCount).map((p, i) => {
        const angle = (i / outerCount) * 360 - 90;
        const rad = (angle * Math.PI) / 180;
        const x = Math.cos(rad) * outerR;
        const y = Math.sin(rad) * outerR;
        const isHovered = hoveredIndex === i;

        return (
          <motion.div
            key={i}
            onMouseEnter={() => onHover(i)}
            onMouseLeave={() => onHover(null)}
            onTouchStart={() => onHover(i)} // touch support
            animate={{ x, y, scale: isHovered ? 1.2 : 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            style={{
              position: "absolute",
              width: cardSize,
              height: cardSize,
              borderRadius: Math.round(cardSize * 0.2),
              overflow: "hidden",
              cursor: "pointer",
              border: isHovered
                ? `2px solid ${p.accentColor ?? "#f97316"}`
                : "2px solid rgba(255,255,255,0.08)",
              boxShadow: isHovered
                ? `0 0 24px ${p.accentColor ?? "#f97316"}44`
                : "0 4px 16px rgba(0,0,0,0.3)",
              zIndex: isHovered ? 10 : 3,
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            <img
              src={p.image}
              alt={p.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: isHovered ? "brightness(1)" : "brightness(0.7)",
                transition: "filter 0.3s ease",
              }}
            />
          </motion.div>
        );
      })}

      {/* Inner orbit items */}
      {projects.slice(outerCount).map((p, i) => {
        const globalIndex = outerCount + i;
        const angle = (i / innerCount) * 360 - 90 + 30;
        const rad = (angle * Math.PI) / 180;
        const x = Math.cos(rad) * innerR;
        const y = Math.sin(rad) * innerR;
        const isHovered = hoveredIndex === globalIndex;

        return (
          <motion.div
            key={globalIndex}
            onMouseEnter={() => onHover(globalIndex)}
            onMouseLeave={() => onHover(null)}
            onTouchStart={() => onHover(globalIndex)}
            animate={{ x, y, scale: isHovered ? 1.2 : 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            style={{
              position: "absolute",
              width: miniSize,
              height: miniSize,
              borderRadius: Math.round(miniSize * 0.22),
              overflow: "hidden",
              cursor: "pointer",
              border: isHovered
                ? `2px solid ${p.accentColor ?? "#f97316"}`
                : "2px solid rgba(255,255,255,0.06)",
              boxShadow: isHovered
                ? `0 0 20px ${p.accentColor ?? "#f97316"}44`
                : "0 4px 12px rgba(0,0,0,0.25)",
              zIndex: isHovered ? 10 : 3,
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            <img
              src={p.image}
              alt={p.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: isHovered ? "brightness(1)" : "brightness(0.65)",
                transition: "filter 0.3s ease",
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}

// ─── Main Portfolio ───────────────────────────────────────────────────────────
export default function Portfolio({ number = 0 }) {
  const [activeTab, setActiveTab] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState(0);
  // Detect whether we're in stacked (mobile) layout so card auto-shows on tap
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = (e) => setIsMobile(e.matches);
    update(mq);
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const paginatedPortfolios = projects;

  const filtered =
    activeTab === "All"
      ? paginatedPortfolios
      : paginatedPortfolios.filter((p) =>
          p.type.includes(activeTab.toLowerCase()),
        );

  const safeIndex =
    hoveredIndex === null || hoveredIndex >= filtered.length ? 0 : hoveredIndex;

  const hoveredProject = filtered[safeIndex];

  const tabs = ["All", "Web3", "AI", "E-Commerce", "Portfolio", "Marketplace"];

  // On mobile, tapping a second time on same item clears the card
  const handleHover = (idx) => {
    if (isMobile && idx === hoveredIndex) {
      setHoveredIndex(0);
    } else {
      setHoveredIndex(idx);
    }
  };

  return (
    <>
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes float-pulse {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }

        /* ── Responsive layout helpers ──────────────────────────────── */

        /* Default (mobile-first): single column, orbital area square */
        .portfolio-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          align-items: start;
        }
        .orbit-wrap {
          position: relative;
          /* Square based on viewport width so orbit always fits */
          width: 100%;
          aspect-ratio: 1 / 1;
          max-height: 360px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: visible;
        }
        .card-wrap {
          position: relative;
          min-height: 400px;
        }

        

        /* md (≥ 640px): still single column but taller orbit */
        @media (min-width: 640px) {
          .orbit-wrap  { max-height: 460px; }
          .card-wrap   { min-height: 460px; }
        }

        /* lg (≥ 1024px): side-by-side, match original design exactly */
        @media (min-width: 1024px) {
          .portfolio-grid {
            grid-template-columns: 1fr 1fr;
            gap: 48px;
            align-items: center;
          }
          .orbit-wrap  { max-height: 520px; aspect-ratio: unset; height: 520px; }
          .card-wrap   { height: 500px; min-height: unset; }
        }
      `}</style>

      <section
        style={{
          padding: "48px 16px",
          minHeight: "100vh",
          background: "transparent",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* ── Header ──────────────────────────────────────────────── */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 40,
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-block",
                  padding: "4px 16px",
                  marginBottom: 20,
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#f97316",
                  borderRadius: 999,
                  border: "1px solid rgba(249,115,22,0.3)",
                  background: "rgba(249,115,22,0.08)",
                  letterSpacing: "0.06em",
                }}
              >
                ✦ SELECTED WORK
              </div>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 48px)",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  margin: 0,
                }}
              >
                Products we shipped.{" "}
                <span style={{ color: "#f97316" }}>Outcomes we measured.</span>
              </h2>
            </div>
            
          </div>

          {/* ── Filter tabs ─────────────────────────────────────────── */}
          {number === 0 && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                marginBottom: 40,
              }}
            >
              {tabs.map((item) => (
                <span
                  key={item}
                  onClick={() => {
                    setActiveTab(item);
                    setHoveredIndex(null);
                  }}
                  style={{
                    padding: "7px 16px",
                    borderRadius: 999,
                    cursor: "pointer",
                    fontSize: 13,
                    fontWeight: 500,
                    border:
                      activeTab === item
                        ? "1px solid rgba(249,115,22,0.4)"
                        : "1px solid rgba(220,220,220,0.9)",
                    background:
                      activeTab === item
                        ? "rgba(249,115,22,0.12)"
                        : "rgba(255,255,255,0.04)",
                    color: activeTab === item ? "#f97316" : "inherit",
                    transition: "all 0.2s ease",
                    userSelect: "none",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          )}

          {/* ── Orbital + Card grid ──────────────────────────────────── */}
          <div className="portfolio-grid">
            {/* Orbital diagram */}
            <div className="orbit-wrap">
              <OrbitalPortfolio
                projects={filtered}
                onHover={handleHover}
                hoveredIndex={hoveredIndex}
              />

              <AnimatePresence>
                {hoveredIndex === null && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                      position: "absolute",
                      bottom: 4,
                      left: "50%",
                      transform: "translateX(-50%)",
                      fontSize: 11,
                      color: "rgba(156,163,175,0.7)",
                      whiteSpace: "nowrap",
                      letterSpacing: "0.05em",
                      pointerEvents: "none",
                    }}
                  >
                    {isMobile ? "tap" : "hover"} a project to explore
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Card reveal panel — exact original card markup */}
            <div className="card-wrap">
              {hoveredProject && (
                <AnimatePresence>
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -8 }}
                    className="border border-gray-100 rounded-3xl shadow-lg overflow-hidden flex flex-col group"
                    style={{ height: "100%" }}
                  >
                    <div className="h-[60%] overflow-hidden">
                      <img
                        src={hoveredProject.image}
                        alt={hoveredProject.title}
                        className="w-full h-full object-fill group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 md:p-8">
                      <span className="text-orange-400 text-sm font-medium">
                        {hoveredProject.category}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold mt-2 mb-3 md:mb-4">
                        {hoveredProject.title}
                      </h3>
                      <p className="text-slate-400 text-sm md:text-base">
                        {hoveredProject.desc}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pb-5 md:pb-6 px-6 md:px-8 flex-wrap gap-3 mt-auto">
                      <div className="flex items-center gap-2 flex-wrap">
                        {hoveredProject?.tags?.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 border border-gray-200 bg-gray-50 rounded-3xl text-xs text-gray-500"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}

              {!hoveredProject && (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 16,
                    border: "1px dashed rgba(255,255,255,0.07)",
                    borderRadius: 28,
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background: "rgba(249,115,22,0.08)",
                      border: "1px solid rgba(249,115,22,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 24,
                      animation: "float-pulse 3s ease-in-out infinite",
                    }}
                  >
                    <Sparkles className="text-orange-600" />
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      color: "rgba(156,163,175,0.5)",
                      margin: 0,
                      textAlign: "center",
                    }}
                  >
                    {isMobile ? "Tap" : "Hover"} a project to preview
                  </p>
                  <p
                    style={{
                      fontSize: 12,
                      color: "rgba(156,163,175,0.3)",
                      margin: 0,
                      textAlign: "center",
                    }}
                  >
                    {filtered.length} projects available
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
