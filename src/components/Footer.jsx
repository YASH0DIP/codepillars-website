import { Mail, Phone, MapPin, ArrowRight, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
// import logo from "../assets/logo-black.png";

const Footer = () => {
  return (
    <footer className="bg-[#0b1226] text-white px-10 py-8">
      <div className="max-w-full mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Logo and Newsletter Section */}
          <div className="col-span-1 md:col-span-2 space-y-8">
            <div className="text-lg font-bold text-gray-100 flex flex-col justify-center">
              {/* Logo Section */}
              <Link
                to="/"
                className="flex items-center justify-start gap-3 ml-4"
              >
                {/* <img
                  src={logo}
                  alt="App Logo"
                  className="w-32 cursor-pointer rounded"
                /> */}
                Logo
              </Link>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight max-w-sm">
              Building the digital backbone of ambitious teams.
            </h2>

            <div className="space-y-3">
              <p className="text-gray-400 text-sm uppercase tracking-wider">
                Newsletter
              </p>
              <div className="flex bg-[#1a2337] p-1.5 rounded-full max-w-sm border border-gray-700">
                <input
                  type="email"
                  placeholder="You@company.com"
                  className="bg-transparent px-4 py-2 outline-none w-full text-sm placeholder-gray-500"
                />
                <button className="bg-[#f59e0b] hover:bg-[#f59e0b]/90 text-black px-6 py-2 rounded-full flex items-center gap-2 font-medium text-sm hover:bg-amber-500 transition-colors">
                  Subscribe <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h3 className="text-gray-400 font-medium uppercase tracking-wider text-sm">
              Company
            </h3>
            <ul className="space-y-4 text-gray-200">
              {["About", "Services", "Portfolio", "Career", "Blogs"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-amber-500 cursor-pointer transition-colors"
                  >
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Services and Reach */}
          <div className="space-y-6">
            <h3 className="text-gray-400 font-medium uppercase tracking-wider text-sm">
              Services
            </h3>
            <ul className="space-y-4 text-gray-200">
              {[
                "Mobile App Development",
                "Web Development",
                "UI UX Design",
                "Backend & API Architecture",
                "Cloud Solutions",
                "AI Solutions",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-amber-500 cursor-pointer transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-gray-400 font-medium uppercase tracking-wider text-sm">
              Reach
            </h3>
            <div className="flex flex-col gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-orange-400" />{" "}
                relation@codepillars.in
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-orange-400" /> +91 86196 81743
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-orange-400" /> Indore · Remote
                Worldwide
              </div>
            </div>

            <div className="flex gap-4">
              {[Rocket, Rocket, Rocket].map((Icon, i) => (
                <div
                  key={i}
                  className="bg-[#1a2337] p-2 rounded-full hover:bg-gray-700 cursor-pointer transition-all"
                >
                  <Icon size={20} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 mx-6">
          <p className="text-gray-500 text-lg">
            © 2026 CodePillars Studio. All rights reserved.
          </p>

          <div className="flex gap-6 text-lg text-gray-400">
            <Link to="/privacy-policy" className="hover:text-white cursor-pointer">Privacy</Link>
            <Link to="/terms-conditions" className="hover:text-white cursor-pointer">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
