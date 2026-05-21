const IndustriesSection = () => {
  const industries = [
    "Fintech",
    "Healthtech",
    "SaaS",
    "Education",
    "E-commerce",
    "Logistics",
    "Climate Tech",
    "Media",
  ];

  return (
    <section className="py-8 px-6 md:px-2 max-w-7xl mx-auto">
      {/* Label */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 mb-6">
        <span className="w-2 h-2 rounded-full bg-orange-400"></span>
        <span className="text-orange-500 font-semibold text-sm tracking-wide uppercase">
          Industries We Serve
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-[#0a142e] mb-12">
        Domain depth across{" "}
        <span className="text-orange-400">every vertical.</span>
      </h2>

      {/* Grid of Pills */}
      <div className="flex flex-wrap gap-4">
        {industries.map((industry) => (
          <div
            key={industry}
            className="px-6 py-3 border border-gray-200 rounded-xl text-sm md:text-lg text-gray-900 hover:border-orange-300 transition-colors duration-300 cursor-default bg-white shadow-sm"
          >
            {industry}
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesSection;
