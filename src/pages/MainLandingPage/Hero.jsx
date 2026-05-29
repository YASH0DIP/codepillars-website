import { ArrowUpRight } from "lucide-react";
// import heroImg from "../../assets/hero-bg.jpg";
import { useNavigate } from "react-router-dom";

// const stats = [
//   { icon: Star, label: "Rating", value: "4.9" },
//   { icon: Briefcase, label: "Projects Delivered", value: "500+" },
//   { icon: Users, label: "Global Clients", value: "50+" },
// ];

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative text-center">
      <div className="pt-28 md:pt-32 lg:pt-35 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
        <div className="px-6 md:px-10 w-full lg:w-[60%] z-10 relative">
          <div className="w-64 md:w-full mt-2 md:mt-0 max-w-80 gap-2 px-4 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-orange-600 text-[10px] md:text-xs font-semibold mb-6">
            <span>✨</span> Digital Product & AI Development Agency
          </div>

          <h1
            className="text-5xl md:text-6xl text-left font-bold tracking-wide text-black mb-6 max-w-5xl"
            // className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 max-w-5xl mx-auto"
          >
            We Build Digital <br /> Experiences <br />
            <span className="text-orange-500">That Scale.</span>
          </h1>

          <p className="text-lg max-w-xl mb-10 text-left leading-relaxed text-black">
            Transforming ideas into powerful web, mobile, AI and cloud
            solutions—engineered for ambitious teams that refuse to ship
            anything average.
          </p>

          <div className="flex flex-wrap items-center justify-start gap-4 mb-16">
            <button
              onClick={() => navigate("/contact")}
              className="cursor-pointer flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800"
            >
              Start Your Project <ArrowUpRight size={20} />
            </button>
            <button
              onClick={() => navigate("/portfolio")}
              className="flex items-center gap-2 hover:bg-gray-50  border border-slate-200 px-8 py-4 rounded-full font-semibold hover:border-slate-300"
            >
              View Our Work <ArrowUpRight size={20} />
            </button>
          </div>

          {/* <div className="flex flex-wrap justify-center gap-4">
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
          </div> */}
        </div>

        {/* Background Carousel (mobile + tablet) */}
        <div className="absolute inset-0 z-0 lg:hidden opacity-30 border-none shadow-none">
          <Rotating3DCarousel isBackground />
        </div>
        <div className="hidden lg:flex w-[45%] relative justify-end border-none shadow-none">
          <Rotating3DCarousel />
        </div>
      </div>
    </section>
  );
}

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useAnimationFrame,
  useTransform,
} from "framer-motion";

const CARDS = [
  {
    id: 0,
    title: "Dashboard Analytics",
    tag: "SaaS",
    img: "https://picsum.photos/seed/dash1/400/280",
    accent: "#6366f1",
  },
  {
    id: 1,
    title: "E-Commerce Store",
    tag: "Retail",
    img: "https://picsum.photos/seed/shop2/400/280",
    accent: "#0ea5e9",
  },
  {
    id: 2,
    title: "Portfolio Studio",
    tag: "Creative",
    img: "https://picsum.photos/seed/port3/400/280",
    accent: "#f59e0b",
  },
  {
    id: 3,
    title: "Social Platform",
    tag: "Community",
    img: "https://picsum.photos/seed/soc4/400/280",
    accent: "#ec4899",
  },
  {
    id: 4,
    title: "Dev Tools Hub",
    tag: "Developer",
    img: "https://picsum.photos/seed/dev5/400/280",
    accent: "#10b981",
  },
  {
    id: 5,
    title: "Finance Tracker",
    tag: "Fintech",
    img: "https://picsum.photos/seed/fin6/400/280",
    accent: "#8b5cf6",
  },
  {
    id: 6,
    title: "Health & Wellness",
    tag: "Health",
    img: "https://picsum.photos/seed/hlth7/400/280",
    accent: "#06b6d4",
  },
  {
    id: 7,
    title: "Learning Platform",
    tag: "EdTech",
    img: "https://picsum.photos/seed/edu8/400/280",
    accent: "#f97316",
  },
];

const CARD_COUNT = CARDS.length;
const ANGLE_STEP = 360 / CARD_COUNT;
// translateZ: how far cards sit from the center axis
const RADIUS = 520;
// rotation speed: degrees per second
const RPM = 5;

// function getDepthFactor(rotY) {
//   // cos of angle: 1 = facing front, -1 = facing back
//   const rad = (rotY * Math.PI) / 360;
//   return Math.cos(rad);
// }

function Rotating3DCarousel({ isBackground = false }) {
  const rotationY = useMotionValue(0);
  // const [paused, setPaused] = useState(false);
  const lastTime = useRef(null);

  useAnimationFrame((t) => {
    // if (paused) {
    //   lastTime.current = null;
    //   return;
    // }
    if (lastTime.current === null) {
      lastTime.current = t;
      return;
    }
    const delta = t - lastTime.current;
    lastTime.current = t;
    const degreesPerMs = (RPM * 180) / 60000;
    rotationY.set(rotationY.get() + degreesPerMs * delta);
  });

  // Scene container rotate around Y
  const sceneRotate = useTransform(
    rotationY,
    (v) => `rotateX(-25deg) rotateY(${v}deg) rotateZ(12deg)`,
  );

  return (
    <div
      className={`flex w-full my-auto ${
        isBackground ? "h-full" : "pr-10 mt-6"
      } items-center justify-center overflow-hidden`}
      style={{
        // background: "white",
        fontFamily: "'DM Sans', 'Inter', sans-serif",
      }}
    >
      {/* Import Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

        .carousel-card {
          width: clamp(400px, 35vw, 300px);
          border-radius: 5px;
          overflow: hidden;
          background: #0e0c1e;
          
          transform-origin: center center;
          cursor: pointer;
          position: absolute;
          top: 50%;
          left: 50%;
          will-change: transform;
          
        }

        .carousel-card img {
          width: 100%;
          aspect-ratio: 10/7;
          object-fit: cover;
          display: block;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .card-meta {
          padding: 14px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .card-title {
          font-size: clamp(12px, 1.2vw, 15px);
          font-weight: 500;
          color: rgba(255,255,255,0.88);
          letter-spacing: -0.01em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .card-tag {
          font-family: 'DM Mono', monospace;
          font-size: clamp(9px, 0.85vw, 11px);
          font-weight: 400;
          letter-spacing: 0.06em;
          padding: 3px 8px;
          border-radius: 999px;
          flex-shrink: 0;
          margin-left: 10px;
        }

        .pause-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.5);
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 999px;
          padding: 8px 20px;
          cursor: pointer;
          transition: all 0.2s;
          letter-spacing: 0.02em;
        }
        .pause-btn:hover {
          color: rgba(255,255,255,0.85);
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.2);
        }

        .headline {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(24px, 3.5vw, 48px);
          font-weight: 300;
          color: rgba(255,255,255,0.9);
          letter-spacing: -0.03em;
          text-align: center;
          line-height: 1.15;
          margin-bottom: 6px;
        }
        .headline strong {
          font-weight: 600;
        }
        .subline {
          font-size: clamp(12px, 1.1vw, 14px);
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.04em;
          text-transform: uppercase;
          text-align: center;
          font-family: 'DM Mono', monospace;
        }
      `}</style>

      {/* Carousel stage */}
      <div
        className="absolute scale-40 sm:scale-50"
        style={{
          // transform: isBackground ? "scale(0.7)" : "scale(0.5)",
          opacity: isBackground ? 0.9 : 1,
        }}
      >
        <motion.div
          style={{
            width: "1px",
            height: "1px",
            position: "absolute",
            top: "20%",
            left: "30%",
            transformStyle: "preserve-3d",
            transform: sceneRotate,
          }}
        >
          {CARDS.map((card, i) => {
            const cardAngle = ANGLE_STEP * i;
            // Per-card Y rotation relative to the scene
            // const localAngle = cardAngle;
            const totalAngle = cardAngle + rotationY.get();
            const cosA = Math.cos((totalAngle * Math.PI) / 180);
            // Front: cosA ~ 1, back: cosA ~ -1
            const normalizedDepth = (cosA + 1) / 2; // 0 to 1

            const opacity = isBackground
              ? 0.3 + normalizedDepth * 0.3
              : 0.6 + normalizedDepth * 0.4;

            const blur = isBackground
              ? (1 - normalizedDepth) * 6
              : (1 - normalizedDepth) * 4;
            const brightness = 0.7 + normalizedDepth * 0.3;
            const shadowAlpha = normalizedDepth * 0.8;

            return (
              <div
                key={card.id}
                className="carousel-card"
                style={{
                  transform: `
  translateX(-50%)
translateY(-50%)
  rotateY(${cardAngle}deg)
  translateZ(${RADIUS}px)
  translateY(-20px)
`,
                  opacity,
                  filter: `
  brightness(${brightness})
  blur(${blur}px)
  drop-shadow(0 8px 24px rgba(${hexToRgb(card.accent)}, ${shadowAlpha}))
`,
                  zIndex: Math.round(normalizedDepth * 100),
                  transition: "opacity 0.05s linear",
                }}
                // onMouseEnter={() => setPaused(true)}
                // onMouseLeave={() => setPaused(false)}
              >
                {/* Gloss highlight on top */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 2,
                    background:
                      "linear-gradient(160deg, rgba(255,255,255,0.07) 0%, transparent 40%)",
                    pointerEvents: "none",
                    borderRadius: "16px",
                  }}
                />
                {/* Accent line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "10%",
                    right: "10%",
                    height: "1px",
                    background: `linear-gradient(90deg, transparent, ${card.accent}80, transparent)`,
                    zIndex: 3,
                  }}
                />
                <img
                  src={card.img}
                  alt={card.title}
                  loading="lazy"
                  draggable={false}
                />
                <div className="card-meta">
                  <span className="card-title">{card.title}</span>
                  <span
                    className="card-tag"
                    style={{
                      background: `${card.accent}1a`,
                      color: card.accent,
                      border: `1px solid ${card.accent}40`,
                    }}
                  >
                    {card.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Ground reflection */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "35%",
          background:
            "linear-gradient(to top, rgba(99,102,241,0.04) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Controls */}
      {/* <div className="relative z-10 mt-20 flex flex-col items-center gap-3">
        <button
          className="pause-btn"
          onClick={() => setPaused((p) => !p)}
        >
          {paused ? "▶ Resume" : "⏸ Pause"}
        </button>
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "11px",
            color: "rgba(255,255,255,0.2)",
            letterSpacing: "0.05em",
          }}
        >
          Hover a card to pause
        </p>
      </div> */}
    </div>
  );
}

// Helper: parse hex like #6366f1 → "99,102,241"
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}
