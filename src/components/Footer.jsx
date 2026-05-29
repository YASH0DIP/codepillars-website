import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo-slate-bg.png";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-slate-900 text-white px-10 py-8">
      <div className="max-w-full mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Logo and Newsletter Section */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="text-lg font-bold text-gray-100 flex flex-col justify-center">
              {/* Logo Section */}
              <Link
                to="/"
                className="flex items-center justify-start gap-3 ml-4"
              >
                <img
                  src={logo}
                  alt="App Logo"
                  className="w-32 cursor-pointer rounded"
                />
                {/* Logo */}
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
                <button className="bg-[#f59e0b] hover:bg-[#f59e0b]/90 text-black/90 cursor-pointer px-6 py-2 rounded-full flex items-center gap-2 font-medium text-sm transition-colors">
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
                    onClick={() => navigate(`/${item?.toLocaleLowerCase()}`)}
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
              {[TwitterIcon, LinkedInIcon, InstagramIcon].map((Icon, i) => (
                <div
                  key={i}
                  className="rounded-full cursor-pointer transition-all"
                >
                  <Icon size={20} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row-reverse justify-between items-start md:items-center gap-6">
          <div className="w-full flex justify-between md:justify-end gap-6 text-sm md:text-lg text-gray-400 px-4">
            <Link
              to="/privacy-policy"
              className="hover:text-white cursor-pointer"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-conditions"
              className="hover:text-white cursor-pointer"
            >
              Terms & Conditions
            </Link>
          </div>
          <p className="text-gray-500 text-sm md:text-lg w-full">
            © 2026 CodePillars. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const TwitterIcon = () => (
  <div className="w-10 h-10 bg-slate-800 hover:bg-slate-800/70 rounded-full flex items-center justify-center text-white">
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  </div>
);

const LinkedInIcon = () => (
  <div className="w-10 h-10 bg-slate-800 hover:bg-slate-800/70 rounded-full flex items-center justify-center text-white">
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
    </svg>
  </div>
);

const InstagramIcon = () => (
  <div className="w-10 h-10 bg-slate-800 hover:bg-slate-800/70 rounded-full flex items-center justify-center text-white">
    <svg
      className="w-5 h-5 fill-none stroke-current stroke-2"
      viewBox="0 0 24 24"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  </div>
);
