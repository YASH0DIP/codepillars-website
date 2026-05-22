import { ArrowRight } from "lucide-react";
import webDevImg from "../assets/web-dev.jpg";
import mobileDevImg from "../assets/mobile-dev.jpg";
import uiUxImg from "../assets/ui-ux.jpg";
import backendDevimg from "../assets/backend-dev.jpg";
import cloudimg from "../assets/cloud.jpg";
import aiDevimg from "../assets/ai-dev.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: "01",
    title: "Web Development",
    items: ["Responsive Architecture", "SEO Optimization", "CMS Integration"],
    desc: "Scalable and high-performance websites engineered for speed, responsiveness, and modern user experiences.",
    image: webDevImg,
  },
  {
    id: "02",
    title: "Mobile App Development",
    items: ["iOS & Android Apps", "React Native", "App Store Deployment"],
    desc: "Native and cross-platform mobile applications designed for seamless digital experiences across every device.",
    image: mobileDevImg,
  },
  {
    id: "03",
    title: "UI/UX Design",
    items: ["Wireframing", "Design Systems", "Prototyping"],
    desc: "Human-centered interfaces crafted to improve usability, engagement, and digital product experiences.",
    image: uiUxImg,
  },
  {
    id: "04",
    title: "Backend & API Development",
    items: ["Node.js APIs", "Authentication Systems", "Database Architecture"],
    desc: "Robust backend systems and scalable APIs built for secure, high-performance digital infrastructure.",
    image: backendDevimg,
  },
  {
    id: "05",
    title: "Cloud Solutions",
    items: ["AWS & Vercel", "CI/CD Pipelines", "Cloud Deployment"],
    desc: "Modern cloud infrastructure optimized for scalability, deployment automation, and enterprise reliability.",
    image: cloudimg,
  },
  {
    id: "06",
    title: "AI Solutions",
    items: ["AI Automation", "Chatbot Systems", "Workflow Intelligence"],
    desc: "Practical AI systems and automation workflows designed to improve productivity & operational efficiency.",
    image: aiDevimg,
  },
];

export default function Services({ number }) {
  const navigate = useNavigate();
  const paginatedServices = !number
    ? services?.slice(0)
    : services?.slice(0, number);
  return (
    <section className="py-8 px-6 md:px-2 bg-[#FDFBF9]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-orange-600 text-sm font-semibold mb-6">
            ⚡ Our Core Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Crafting Scalable{" "}
            <span className="text-orange-400">Digital Solutions</span> For{" "}
            <br /> Modern Brands
          </h2>
          <p className="text-slate-500">
            From the first wireframe to the final deploy — our practice covers
            the entire surface area of modern product building.
          </p>
        </div>

        <div className="space-y-20">
          {paginatedServices?.map((service) => (
            <div
              key={service.id}
              className={`flex flex-col lg:flex-row items-center group cursor-pointer gap-6`}
            >
              {/* Text Content */}
              <div className="flex-1 self-start ml-4 md:ml-2 md:self-auto space-y-6">
                <h3 className="text-3xl scale-110 font-bold text-slate-900">
                  {service.title}
                </h3>
                <ul className="space-y-3 scale-110">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center text-slate-600 before:content-['•'] before:mr-2 before:text-orange-500"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image & Number Layer */}
              <div className="flex-1 relative flex justify-center">
                <div className="relative w-full max-w-md">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="opacity-0 group-hover:opacity-100 z-10 w-28 h-36 cursor-pointer object-cover rounded-lg border border-gray-100 relative md:ml-18 rotate-12 group-hover:scale-150 group-hover:rotate-6 transition-all duration-500"
                    style={{ originX: 0.5, originY: 0.5 }}
                    // whileHover={{ scale: 1.5 }}
                    // transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                  <div className="absolute bottom-6 md:bottom-0 md:right-32 text-[28px] font-bold text-orange-300 z-0 select-none bg-linear-to-t from-orange-500/0 via-orange-500/5 to-blue-orange/10 px-12 py-10 rounded-full">
                    {service.id}
                  </div>
                </div>
              </div>
              <div className="scale-110 ml-4 md:ml-2">
                <p className="text-slate-500 max-w-sm">
                  {service.desc}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center mt-2 gap-2 text-orange-600 font-semibold hover:gap-3 transition-all"
                >
                  Explore Service <ArrowRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {number && (
          <div className="pt-20 w-full text-center md:-ml-6">
            <button
              onClick={() => navigate("/services")}
              className="bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition-colors inline-flex items-center gap-2"
            >
              View All Services <ArrowRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
