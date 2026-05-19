import { ArrowUpRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto bg-linear-to-t from-[#E7EAEF] via-[#FDE6CA]/50 to-[#FDE6CA] rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Content Side */}
        <div className="flex-1">
          {/* <div className="inline-block px-4 py-1 mb-6 text-sm font-semibold text-orange-700 bg-white/50 rounded-full">
            READY TO START?
          </div> */}
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Have an ambitious idea?
            <br />
            <span className="text-orange-600">
              Let's engineer it into a category-defining product.
            </span>
          </h2>
          <p className="text-slate-900/90 text-lg mb-8 max-w-lf">
            From a single brief to a fully-shipped platform — our team takes
            ownership of design, engineering and growth from day one.
          </p>
          {/* <button className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg">
            Start Your Project <ArrowUpRight size={20} />
          </button> */}
        </div>

        {/* Decorative Side (Matches Figma's abstract shape/icon look) */}
        <div className="relative w-full md:w-auto flex justify-center items-center">
          {/* <div className="w-48 h-48 md:w-64 md:h-64 bg-white/40 rounded-full flex items-center justify-center border border-white/50 backdrop-blur-sm">
             <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center shadow-inner">
                <ArrowUpRight size={64} className="text-orange-500" strokeWidth={1.5} />
             </div>
          </div> */}
          <button className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg">
            Start Your Project <ArrowUpRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
