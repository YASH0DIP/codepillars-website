import { motion } from "framer-motion";

const PrivacyPolicyPage = () => {
  const sections = [
    {
      title: "1. Information We Collect",
      content: "We collect information you provide directly to us...",
    },
    {
      title: "2. How We Use Your Information",
      list: [
        "To communicate with you...",
        "To deliver and improve...",
        "To maintain security...",
        "To comply with legal obligations",
      ],
    },
    {
      title: "3. Cookies & Analytics",
      content:
        "We use cookies and analytics tools to understand how users interact with our website.",
    },
    {
      title: "4. Data Sharing",
      content: "We do not sell or rent your personal information.",
    },
    {
      title: "5. Data Security",
      content: "We implement reasonable technical and organizational measures.",
    },
    {
      title: "6. Your Rights",
      content: "You have the right to request access, correction, or deletion.",
    },
    { title: "7. Contact Information", isContact: true },
  ];

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  // Individual item animation
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
      <motion.div variants={itemVariants} className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-200 bg-orange-50 mb-6 hover:scale-105 transition-transform duration-300 cursor-default">
          <span className="w-2 h-2 rounded-full bg-orange-400"></span>
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Legal
          </span>
        </div>
        <h1 className="text-6xl font-bold text-[#0a142e] mb-6">
          Privacy <span className="text-[#f59e0b]">Policy</span>
        </h1>
        <p className="text-slate-600 text-lg">Your trust is our priority.</p>
      </motion.div>

      {/* Sections */}
      <div className="space-y-6">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className={`group p-5 rounded-3xl border border-transparent hover:border-orange-100 hover:bg-orange-50/50 transition-all duration-300`}
          >
            <h2 className="text-2xl font-bold text-[#0a142e] mb-4 group-hover:text-orange-600 transition-colors">
              {section.title}
            </h2>

            {section.content && (
              <p className="text-slate-600 leading-relaxed">
                {section.content}
              </p>
            )}

            {section.list && (
              <ul className="space-y-3">
                {section.list.map((item, i) => (
                  <li key={i} className="flex items-start text-slate-600">
                    <span className="mr-3 mt-2 w-2 h-2 rounded-full bg-orange-400 shrink-0 group-hover:scale-125 transition-transform"></span>
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {section.isContact && (
              <div className={`mt-4 flex gap-6`}>
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

export default PrivacyPolicyPage;
