import { ArrowUpRight } from "lucide-react";
import logo from "../assets/logo-white-bg.png";
import { useLocation, Link } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  // Helper to check if the link is active
  const isActive = (path) => {
    // Treat "/" as home
    if (path === "home") return location.pathname === "/";
    return location.pathname === `/${path.toLowerCase()}`;
  };

  const navItems = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Blogs",
    "Career",
    "Contact",
  ];
  return (
    <nav className="absolute top-6 left-6 right-6 flex items-center justify-between px-8 py-4 rounded-full bg-linear-to-r from-[#FEE7C9] via-[#FFF4FF] to-[#E7EAEF] z-90 shadow-xl shadow-gray-500/10">
      <div className="flex items-center justify-center ml-6 gap-2">
        <img src={logo} alt="CodePillars" className="h-8 scale-300" />
      </div>
      <div className="hidden md:flex items-center justify-center gap-2 text-sm font-medium text-slate-800">
        {navItems.map((item) => {
          const active = isActive(item.toLowerCase());
          return (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                active
                  ? "bg-[#FDEED5]/90 shadow-xs shadow-slate-400"
                  : "hover:text-orange-500"
              }`}
            >
              {item}
            </Link>
          );
        })}
      </div>
      <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all">
        Start Your Project <ArrowUpRight size={16} />
      </button>
    </nav>
  );
}
