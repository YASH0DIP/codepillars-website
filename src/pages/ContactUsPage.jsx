import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import toast from "react-hot-toast";

// Validation Schema
const contactSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(3, "Please provide company details"),
  budget: z.string(),
  details: z.string().min(10, "Please provide more project details"),
});

const ContactUsPage = () => {
  //   const [openFaq, setOpenFaq] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    toast.success("Message sent successfully!");
    reset();
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-2 pt-32 md:pt-44 pb-16">
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-200 bg-orange-50 mb-6 hover:scale-105 transition-transform duration-300">
          <span className="w-2 h-2 rounded-full bg-orange-400"></span>
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            CONTACT
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-[#0a142e]">
          Let's build something{" "}
          <span className="text-[#f59e0b]">worth shipping.</span>
        </h1>
        <p className="text-gray-800 mt-4 text-lg">
          Tell us about your idea. We'll reply with questions, a tentative
          timeline and next steps within a working day.
        </p>
      </div>
      {/* Contact Form & Info Grid */}
      <div className="grid lg:grid-cols-2 gap-12 mb-10">
        <div>
          <div className="space-y-5 mb-8">
            <InfoCard
              icon={<Mail size={20} />}
              title="Email"
              value="relation@codepillars.in"
            />
            <InfoCard
              icon={<Phone size={20} />}
              title="Phone"
              value="+91 86196 81743"
            />
            <InfoCard
              icon={<MapPin size={20} />}
              title="Location"
              value="Indore · Remote Worldwide"
            />
          </div>

          {/* Google Maps Placeholder - Use iframe here */}
          <div className="h-115 w-full rounded-3xl overflow-hidden mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.0!2d75.85!3d22.71!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQyJzM2LjAiTiA3NcKwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        <div className="space-y-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm"
          >
            <h2 className="text-2xl font-bold mb-6">
              Tell us about your project
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  {...register("fullName")}
                  placeholder="Full Name"
                  className={`w-full p-3 border rounded-xl ${errors.fullName ? "border-red-500" : "border-gray-200"}`}
                />
                <ErrorText message={errors.fullName?.message} />
              </div>
              <div>
                <input
                  {...register("email")}
                  placeholder="Email"
                  className={`w-full p-3 border rounded-xl ${errors.email ? "border-red-500" : "border-gray-200"}`}
                />
                <ErrorText message={errors.email?.message} />
              </div>
            </div>

            <div className="mt-4">
              <input
                {...register("company")}
                placeholder="Company"
                className={`w-full p-3 border rounded-xl ${errors.company ? "border-red-500" : "border-gray-200"}`}
              />
              <ErrorText message={errors.company?.message} />
            </div>
            <select
              {...register("budget")}
              className="w-full mt-4 p-3 border border-gray-200 rounded-xl"
            >
              <option>Under $25K</option>
              <option>$25K - $50K</option>
            </select>

            <div className="mt-4">
              <textarea
                {...register("details")}
                placeholder="Project Details"
                className={`w-full p-3 border rounded-xl ${errors.details ? "border-red-500" : "border-gray-200"}`}
              />
              <ErrorText message={errors.details?.message} />
            </div>
            <button
              disabled={isSubmitting}
              className="mt-6 cursor-pointer bg-[#0a142e] text-white px-8 py-3 rounded-full hover:bg-slate-800 transition"
            >
              {isSubmitting ? "Sending..." : "Send Message ↗"}
            </button>
          </form>
          <DiscoveryCallCard />
        </div>
      </div>

      <ContactFAQSection />
    </div>
  );
};

const InfoCard = ({ icon, title, value }) => (
  <div className="flex cursor-pointer hover:border-orange-200 items-center gap-4 p-4 border-2 bg-white border-slate-200 rounded-2xl">
    <div className="text-[#f59e0b]">{icon}</div>
    <div>
      <p className="text-xs uppercase text-slate-400 font-bold">{title}</p>
      <p className="font-semibold">{value}</p>
    </div>
  </div>
);

const DiscoveryCallCard = () => {
  return (
    <div className="bg-[#0a142e] w-full p-8 rounded-3xl max-w-full flex flex-col gap-6">
      {/* Icon */}
      <div className="text-[#f59e0b]">
        <Calendar size={32} strokeWidth={1.5} />
      </div>

      {/* Text Content */}
      <div className="space-y-2">
        <h3 className="text-white text-xl font-semibold">
          Prefer a quick call?
        </h3>
        <p className="text-slate-400 text-base leading-relaxed">
          Book a 45-minute discovery call directly on our calendar.
        </p>
      </div>

      {/* Button */}
      <button
        className="flex items-center gap-2 bg-[#f59e0b] text-[#0a142e] font-semibold py-3 px-6 rounded-full w-fit hover:bg-orange-500 transition-colors"
        onClick={() => window.open("#", "_blank")} // Replace # with your booking link
      >
        Book a Slot
        <span className="text-lg">↗</span>
      </button>
    </div>
  );
};

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "Do you offer a free discovery call?",
    answer:
      "Yes. The first 45-minute call is always free — no decks, no obligation.",
  },
  {
    question: "Can you sign an NDA before we share details?",
    answer:
      "Yes, we work with both early-stage startups and established enterprises to deliver scalable digital solutions.",
  },
  {
    question: "How fast do you respond to enquiries?",
    answer:
      "We specialize in web development, mobile app development, UI/UX design, and backend/API development.",
  },
];

function ContactFAQSection() {
  const [openIndex, setOpenIndex] = useState(0); // Default open first

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 mb-6 text-sm font-medium text-orange-500 rounded-full border border-orange-200 bg-orange-50">
            • FAQ
          </div>
          <h2 className="text-4xl md:text-5xl max-w-6xl mx-auto leading-14 font-bold text-slate-900 mb-6">
            Quick <span className="text-orange-400">Answers</span>
          </h2>
          <p className="text-slate-500 text-lg">
            Find answers to common questions about our design, development, AI
            solutions, timelines, and collaboration process.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, i) => (
            <div
              key={i}
              className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-slate-900">
                  {item.question}
                </span>
                <div
                  className={`p-1 rounded-full border ${openIndex === i ? "border-orange-200 bg-orange-50 text-orange-500" : "border-slate-200 text-slate-400"}`}
                >
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>

              {/* Expandable Content */}
              <div
                className={`overflow-hidden bg-white transition-all duration-300 ease-in-out ${
                  openIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-6 text-slate-500 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ErrorText = ({ message }) => {
  if (!message) return null;
  return <p className="text-red-500 text-xs mt-1">{message}</p>;
};

export default ContactUsPage;
