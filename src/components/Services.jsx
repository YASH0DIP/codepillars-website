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
              className="flex group flex-col lg:flex-row md:items-center gap-8 md:gap-6"
            >
              {/* Text Content */}
              <div className="flex-1 space-y-4">
                <h3 className="text-3xl font-bold text-slate-900">
                  {service.title}
                </h3>
                <ul className="space-y-2">
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
              <div className="flex-1 group relative flex justify-center items-center">
                <motion.div
                  initial={{
                    opacity: 0,
                    rotateY: -45,
                    rotateX: 10,
                    scale: 0.85,
                  }}
                  whileInView={{
                    opacity: 1,
                    rotateY: -20,
                    rotateX: 5,
                    scale: 0.95,
                  }}
                  whileHover={{ rotateY: 10, rotateX: 20, scale: 1.05 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="relative w-full max-w-sm"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-120 md:w-64 h-52 md:h-64 object-cover rounded-4xl shadow-xl shadow-orange-100"
                  />
                  {/* Decorative ID Number */}
                  <div className="absolute -top-6 -left-4 md:-left-10 text-6xl font-black text-orange-100 z-[-1]">
                    {service.id}
                  </div>
                </motion.div>
              </div>

              {/* Description */}
              <div className="flex-1 space-y-4">
                <p className="text-slate-500">{service.desc}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors"
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
