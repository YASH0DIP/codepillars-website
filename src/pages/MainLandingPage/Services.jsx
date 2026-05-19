import { ArrowRight } from "lucide-react";
import webDevImg from "../../assets/web-dev.jpg";
import mobileDevImg from "../../assets/mobile-dev.jpg";
import uiUxImg from "../../assets/ui-ux.jpg";
import backendDevimg from "../../assets/backend-dev.jpg";

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
];

export default function Services() {
  return (
    <section className="py-8 bg-[#FDFBF9]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-orange-600 text-xs font-semibold mb-6">
            ⚡ Our Core Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Crafting Scalable{" "}
            <span className="text-orange-500">Digital Solutions</span> For{" "}
            <br /> Modern Brands
          </h2>
          <p className="text-slate-500">
            From the first wireframe to the final deploy — our practice covers
            the entire surface area of modern product building.
          </p>
        </div>

        <div className="space-y-32">
          {services.map((service) => (
            <div
              key={service.id}
              className={`flex flex-col lg:flex-row items-center gap-12`}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <h3 className="text-3xl font-bold text-slate-900">
                  {service.title}
                </h3>
                <ul className="space-y-3">
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
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-28 h-36 border border-gray-100 object-cover rounded-lg z-10 relative ml-16 rotate-30"
                  />
                  <div className="absolute -bottom-10 right-20 text-[40px] font-bold text-orange-200 z-0 select-none bg-linear-to-t from-transparent via-white/80 to-blue-50 px-10 py-5 rounded-full">
                    {service.id}
                  </div>
                </div>
              </div>
              <div><p className="text-slate-500 max-w-md">{service.desc}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all"
                >
                  Explore Service <ArrowRight size={18} />
                </a></div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition-colors inline-flex items-center gap-2">
            View All Services <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
