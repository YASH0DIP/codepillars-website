const steps = [
  {
    id: "01",
    title: "Discovery",
    desc: "Workshops, audits, success metrics — everyone aligned.",
  },
  {
    id: "02",
    title: "Strategy",
    desc: "Architecture, roadmap, go-to-market sequencing.",
  },
  {
    id: "03",
    title: "Design",
    desc: "Systems, prototypes, motion language — pixel-perfect.",
  },
  {
    id: "04",
    title: "Development",
    desc: "Engineering sprints with continuous delivery.",
  },
  {
    id: "05",
    title: "Launch",
    desc: "Performance pass, scale tests, hand-off and growth.",
  },
];

export default function Process() {
  return (
    <section className="py-8 bg-[#0B1120]">
      {" "}
      {/* Deep Navy Background */}
      <div className="max-w-7xl mx-auto">
        <div className="inline-block px-4 py-1 mb-8 text-sm font-medium text-orange-400 rounded-full border border-slate-900 bg-slate-500/30">
          OUR PROCESS
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-20">
          From the first call to{" "}
          <span className="text-orange-400">a confident launch.</span>
        </h2>

        {/* Wrapper for the line and steps */}
        <div className="relative flex flex-col md:flex-row justify-between gap-8 md:gap-4 mt-20">
          {/* The Background Line: spans the entire container width minus the circle sizes */}
          <div className="absolute max-w-5xl mx-auto top-10 left-10 right-10 h-[2px] bg-orange-500/30 hidden md:block" />

          {steps.map((step, i) => (
            <div
              key={i}
              className="relative z-10 flex md:flex-col items-start md:items-center gap-6 md:gap-8 flex-1"
            >
              {/* Circle - note the bg-[#0B1120] is important to 'cut' the line */}
              <div className="w-20 h-20 rounded-full border-2 border-slate-700 bg-[#0B1120] flex items-center justify-center text-orange-400 text-2xl font-bold shrink-0 shadow-[0_0_20px_rgba(251,146,60,0.1)]">
                {step.id}
              </div>

              <div className="md:text-center mt-2 md:mt-0">
                <h3 className="text-xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-[200px]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
