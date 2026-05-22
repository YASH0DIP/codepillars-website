import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Heart,
  Coffee,
  Zap,
  Shield,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { clsx } from "clsx";
import CallToAction from "../MainLandingPage/CallToAction";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";

// Validation Schema
const contactSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(3, "Please provide profile URL"),
  budget: z.string().min(1, "Please select job role"),
  details: z.string().optional(),
});

const CareersPage = () => {
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
    <div className="max-w-7xl mx-auto pt-40 md:pt-44">
      <div className="mb-16 px-6 md:px-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-200 bg-orange-50 mb-6 hover:scale-105 transition-transform duration-300">
          <span className="w-2 h-2 rounded-full bg-orange-400"></span>
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            CAREERS
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-[#0a142e]">
          Build the next generation of{" "}
          <span className="text-[#f59e0b]">digital products with us.</span>
        </h1>
        <p className="text-gray-800 mt-4 text-lg">
          We hire senior-only, remote-first, equity-loaded. If you've shipped
          real things and care about craft — we want to talk.
        </p>
      </div>

      <div className="px-6 md:px-2">
        <PerksSection />
      </div>

      <div className="px-6 md:px-2">
        <OpenJobsSection />
      </div>

      {/* Contact Form & Info Grid */}
      <div className="grid lg:grid-cols-2 gap-12 mb-10 px-6 md:px-2">
        <div className="space-y-8">
          <div className="md:my-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-200 bg-orange-50 mb-6 hover:scale-105 transition-transform duration-300">
              <span className="w-2 h-2 rounded-full bg-orange-400"></span>
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
                CAREERS
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#0a142e]">
              Tell us about <span className="text-[#f59e0b]">yourself.</span>
            </h1>
            <p className="text-gray-800 mt-4 text-lg">
              The best applications include a portfolio, GitHub or a project
              you're proud of.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm"
          >
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
              <select
                {...register("budget")}
                className={`w-full p-3 border rounded-xl ${errors.budget ? "border-red-500" : "border-gray-200"}`}
                value=""
              >
                <option value="">Role</option>
                <option value="frontend">Frontend Engineer</option>
              </select>
              <ErrorText message={errors.budget?.message} />
            </div>

            <div className="mt-4">
              <input
                {...register("company")}
                placeholder="Github/Linkedin URL"
                className={`w-full p-3 border rounded-xl ${errors.company ? "border-red-500" : "border-gray-200"}`}
              />
              <ErrorText message={errors.company?.message} />
            </div>

            <div className="mt-4">
              <textarea
                {...register("details")}
                placeholder="A Short Note"
                className={`w-full p-3 border rounded-xl ${errors.details ? "border-red-500" : "border-gray-200"}`}
              />
              <ErrorText message={errors.details?.message} />
            </div>
            <button
              disabled={isSubmitting}
              className="mt-6 cursor-pointer bg-[#0a142e] text-white px-8 py-3 rounded-full hover:bg-slate-800 transition"
            >
              {isSubmitting ? "Submitting..." : "Submit Application ↗"}
            </button>
          </form>
        </div>
      </div>

      <CallToAction />
    </div>
  );
};

export default CareersPage;

const perksData = [
  {
    icon: Globe,
    title: "Remote-first",
    desc: "Work from anywhere across India and beyond.",
  },
  {
    icon: Heart,
    title: "Wellness budget",
    desc: "Annual stipend for health, fitness and therapy.",
  },
  {
    icon: Coffee,
    title: "Async-friendly",
    desc: "Deep-work blocks, 4-hour overlap, no perma-meetings.",
  },
  {
    icon: Zap,
    title: "Learning fund",
    desc: "Books, courses, conferences — fully reimbursed.",
  },
  {
    icon: Shield,
    title: "Equity for all",
    desc: "Every full-timer gets meaningful equity from year one.",
  },
  {
    icon: Sparkles,
    title: "Annual offsite",
    desc: "We meet IRL once a year somewhere unforgettable.",
  },
];

const PerkCard = ({ icon: Icon, title, desc, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300"
  >
    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
      <Icon className="w-6 h-6 text-orange-500" strokeWidth={1.5} />
    </div>
    <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </motion.div>
);

function PerksSection() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-xs font-bold tracking-wider uppercase rounded-full mb-4">
            Why Codepillars
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight">
            Senior team, <span className="text-[#F79714]">serious perks.</span>
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {perksData.map((perk, idx) => (
            <PerkCard key={idx} {...perk} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

const MOCK_JOBS = [
  {
    id: 1,
    title: "Senior Frontend Engineer",
    type: "Full-Time",
    location: "Remote",
    exp: "+3 years",
  },
  {
    id: 2,
    title: "Mobile Engineer (Flutter)",
    type: "Full-Time",
    location: "Remote",
    exp: "+1 years",
  },
  {
    id: 3,
    title: "Product Designer",
    type: "Full-Time",
    location: "Remote",
    exp: "+4 years",
  },
  {
    id: 4,
    title: "UI UX Designer",
    type: "Full-Time",
    location: "Remote",
    exp: "Freshers",
  },
  {
    id: 5,
    title: "DevOps Engineer",
    type: "Contract",
    location: "Remote",
    exp: "+3 years",
  },
  {
    id: 6,
    title: "AI/ML Engineer",
    type: "Contract",
    location: "Remote",
    exp: "+3 years",
  },
];

const JobCard = ({ job }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all duration-200 hover:shadow-md">
      <div
        className="flex items-center justify-between p-6 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{job.title}</h3>
          <p className="text-sm text-slate-500 mt-1">
            {job.type} • {job.location} • {job.exp}
          </p>
        </div>
        <div className="flex items-center gap-4">
          {/* <button className="hidden sm:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
            Apply <ExternalLink className="w-3.5 h-3.5" />
          </button> */}
          <ChevronDown
            className={clsx(
              "w-5 h-5 text-slate-400 transition-transform duration-300",
              isOpen && "rotate-180",
            )}
          />
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-6 pb-6 text-slate-600 text-sm pt-4"
          >
            <p>
              Full job description and requirements for {job.title} will appear
              here. This area is ready for dynamic content loading.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function OpenJobsSection() {
  const [jobs] = useState(MOCK_JOBS);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto">
        <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-xs font-bold tracking-wider uppercase rounded-full mb-6">
          Open Positions
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 tracking-tight">
          Join CodePillars and Build the
          <span className="text-[#F79714]"> Future Together</span>
        </h2>

        <div className="space-y-4">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
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
