import { motion } from "framer-motion";
import graphHero from "../../assets/graph-hero.png";
import teamWorking from "../../assets/team-working.jpg";

export default function HeroSection() {
  return (
    <section className="relative w-full h-280 md:h-190 overflow-hidden flex items-center justify-center bg-[linear-gradient(210deg,#FFF0DD_21.63%,#E7EAEF_89.99%)]">
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-40">
        {/* Left Content */}
        <div className="flex-1 space-y-4 md:space-y-8 px-6 mt-16 md:mt-32 md:px-2">
          <span className="inline-block px-4 py-1.5 rounded-full border border-orange-200 bg-white/50 text-orange-600 font-medium text-sm">
            ✦ About CodePillars
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-[#0A1640] leading-tight">
            Building Modern
            <span className="text-orange-500"> Digital Experiences </span>
            For <br />
            <span className="text-orange-500"> Ambitious Brands</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-full">
            We're 32 designers, engineers and strategists who decided generic
            agency work wasn't enough. We work with founders and enterprise
            teams who care about how their product feels — not just what it
            does.
          </p>

          <div className="grid grid-cols-2 gap-4 md:hidden">
            
            <div className="bg-white p-4 rounded-xl shadow-sm shadow-gray-800/20 z-90 w-40 md:w-48">
              <p className="text-xs text-slate-500">Project Progress</p>
              <p className="text-xl font-bold">78%</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm shadow-gray-800/20 z-90 w-40 md:w-48">
              <p className="text-xs text-slate-500">Total Clients</p>
              <p className="text-xl font-bold">500+</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm shadow-gray-800/20 z-90 w-40 md:w-48">
              <p className="text-xs text-slate-500">User Growth</p>
              <p className="text-xl font-bold">12.5K</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm shadow-gray-800/20 z-90 w-40 md:w-48">
              <p className="text-xs text-slate-500">Revenue Overview</p>
              <p className="text-xl font-bold">$45,231</p>
            </div>
          </div>

          <div className="mt-16 md:mt-8">
            <TrustedClients
              count="50+"
              text="Trusted by 50+ clients worldwide"
            />
          </div>
        </div>

        {/* Right Content - Stacked Images */}
        <div className="relative flex-1 min-h-125 hidden md:block">
          {/* Team Photo (Top Layer) */}
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            src={teamWorking}
            className="rounded-3xl w-80 h-100 shadow-2xl relative z-30"
          />

          {/* Dashboard Screenshot (Offset Bottom-Right) */}
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            src={graphHero}
            className="absolute -bottom-4 -left-10 md:left-10 w-100 rounded-2xl shadow-2xl z-40 border-4 border-white"
          />

          {/* Floating Cards - Positioned relative to the stack */}
          <FloatingCard
            text="Project Progress"
            value="78%"
            pos="top-[60px] left-[-60px]"
          />
          <FloatingCard
            text="Total Clients"
            value="500+"
            pos="top-[20px] right-[150px]"
          />
          <FloatingCard
            text="User Growth"
            value="12.5K"
            pos="bottom-[100px] left-[-120px]"
          />

          <div className="absolute -bottom-1 -right-5 bg-white p-4 rounded-xl shadow-xl shadow-gray-800/20 z-90 w-48">
            <p className="text-xs text-slate-500">Revenue Overview</p>
            <p className="text-xl font-bold">$45,231</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const FloatingCard = ({ text, value, pos }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className={`absolute ${pos} bg-white p-4 rounded-xl shadow-xl shadow-gray-800/10 border border-slate-100 z-90 min-w-35`}
  >
    <p className="text-xs text-slate-400">{text}</p>
    <p className="text-xl font-bold">{value}</p>
  </motion.div>
);

const MOCK_PROFILES = [
  { id: 1, src: "https://i.pravatar.cc/100?u=1", alt: "User 1" },
  { id: 2, src: "https://i.pravatar.cc/100?u=2", alt: "User 2" },
  { id: 3, src: "https://i.pravatar.cc/100?u=3", alt: "User 3" },
];

function TrustedClients({
  count = "50+",
  text = "Trusted by 50+ clients worldwide",
}) {
  return (
    <div className="flex flex-wrap items-center justify-start gap-4">
      {/* Image Stack */}
      <div className="flex -space-x-3">
        {MOCK_PROFILES.map((profile) => (
          <img
            key={profile.id}
            src={profile.src}
            alt={profile.alt}
            className="w-12 h-12 rounded-full border-2 border-white object-cover"
          />
        ))}
        {/* The '50+' Circle */}
        <div className="w-12 h-12 rounded-full bg-[#0A1640] flex items-center justify-center text-white text-xs font-bold border-2 border-white z-10">
          {count}
        </div>
      </div>

      {/* Text */}
      <p className="text-slate-600 pt-1 font-medium text-lg leading-tight max-w-full">
        {text}
      </p>
    </div>
  );
}
