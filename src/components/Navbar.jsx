import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo-white-bg.png";
import { useLocation, Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => {
    if (path === "home") return location.pathname === "/";
    return location.pathname?.includes(`/${path.toLowerCase()}`);
  };

  const navItems = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Blogs",
    "Careers",
    "Contact",
  ];

  return (
    <nav className="absolute top-6 left-6 right-6 flex items-center justify-between px-8 py-4 rounded-full bg-linear-to-r from-[#FEE7C9] via-[#FFF4FF] to-[#E7EAEF] z-90 shadow-xl shadow-gray-500/10">
      <div className="flex items-center gap-2 ml-10">
        <img src={logo} alt="CodePillars" className="h-10 scale-300" />
      </div>

      {/* Desktop Links */}
      <div className="hidden lg:flex items-center gap-2 text-sm font-medium text-slate-800">
        {navItems.map((item) => (
          <Link
            key={item}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              isActive(item.toLowerCase())
                ? "bg-[#FDEED5]/90 shadow-xs shadow-slate-400"
                : "hover:text-orange-500"
            }`}
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Desktop Button */}
      <button
        onClick={() => navigate("/contact")}
        className="cursor-pointer hidden lg:flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all"
      >
        Start Your Project <ArrowUpRight size={16} />
      </button>

      {/* Mobile Menu Icon */}
      <button
        className="lg:hidden p-2 hover:bg-orange-50/50 rounded-full cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 right-0 p-6 rounded-3xl bg-[#FFF9F2] shadow-2xl border border-white/50 grid grid-cols-2 gap-4 lg:hidden z-100"
          >
            {navItems.map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="py-3 px-4 rounded-xl hover:bg-[#FDEED5] font-medium text-slate-800"
              >
                {item}
              </Link>
            ))}
            <button
              onClick={() => navigate("/contact")}
              className="cursor-pointer col-span-2 mt-4 flex items-center justify-center gap-2 bg-slate-900 text-white w-full py-4 rounded-2xl font-semibold"
            >
              Start Your Project <ArrowUpRight size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
