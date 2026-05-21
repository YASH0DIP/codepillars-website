import { motion } from "framer-motion";

const TermsAndConditions = () => {
  const sections = [
    {
      title: "1. Use of Website",
      content:
        "By accessing this website, you agree to use it only for lawful purposes and in a manner that does not infringe the rights of others.",
    },
    {
      title: "2. Services",
      content:
        "All services provided by CodePillars are subject to written agreements. Website content does not constitute a binding offer.",
    },
    {
      title: "3. Intellectual Property",
      content:
        "All content, designs, trademarks, and code on this website are the property of CodePillars and may not be used without permission.",
    },
    {
      title: "4. Payments & Refunds",
      content:
        "Payment terms and refund policies are defined in individual client agreements. No refunds are provided unless explicitly stated.",
    },
    {
      title: "5. Limitation of Liability",
      content:
        "CodePillars shall not be liable for indirect or consequential damages arising from the use of its services or website.",
    },
    {
      title: "6. Governing Law",
      content:
        "These terms are governed by and interpreted in accordance with the laws of India.",
    },
    { title: "7. Contact Information", isContact: true },
  ];

  // Staggered container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  // Item animation for entrance
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto px-6 pt-36 pb-16"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-200 bg-orange-50 mb-6 hover:scale-105 transition-transform duration-300">
          <span className="w-2 h-2 rounded-full bg-orange-400"></span>
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Legal
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-[#0a142e] mb-6">
          Terms & <span className="text-[#f59e0b]">Conditions</span>
        </h1>
        <p className="text-slate-600 text-lg">
          Your guidelines for using our services.
        </p>
      </motion.div>

      {/* Content Sections */}
      <div className="space-y-6">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="group p-5 rounded-3xl border border-transparent hover:border-orange-100 hover:bg-orange-50/50 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-[#0a142e] mb-3 group-hover:text-orange-600 transition-colors">
              {section.title}
            </h2>

            {section.content && (
              <p className="text-slate-600 leading-relaxed">
                {section.content}
              </p>
            )}

            {section.isContact && (
              <div className="mt-6 flex flex-wrap gap-6">
                <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-orange-100 transition-shadow">
                  <p className="text-xs text-slate-400 uppercase font-bold">
                    Email
                  </p>
                  <p className="font-semibold text-slate-800">
                    relation@codepillars.in
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-orange-100 transition-shadow">
                  <p className="text-xs text-slate-400 uppercase font-bold">
                    Location
                  </p>
                  <p className="font-semibold text-slate-800">
                    Indore · Remote
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TermsAndConditions;
