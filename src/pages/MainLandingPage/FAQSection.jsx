import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "How long does it take to complete a project?",
    answer: "Project timelines vary depending on complexity, but most projects are delivered within 4–12 weeks with a structured development process."
  },
  {
    question: "Do you work with startups and enterprises?",
    answer: "Yes, we work with both early-stage startups and established enterprises to deliver scalable digital solutions."
  },
  {
    question: "What services does CodePillars provide?",
    answer: "We specialize in web development, mobile app development, UI/UX design, and backend/API development."
  },
  {
    question: "Can you redesign existing websites or applications?",
    answer: "Absolutely. We can audit, redesign, and modernize your existing digital products for better performance and user experience."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes, we offer ongoing maintenance and support packages to ensure your product remains secure, updated, and high-performing."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0); // Default open first

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-2">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 mb-6 text-sm font-medium text-orange-500 rounded-full border border-orange-200 bg-orange-50">
            • FAQ
          </div>
          <h2 className="text-4xl md:text-5xl max-w-6xl mx-auto leading-14 font-bold text-slate-900 mb-6">
            Answers To Help You Move Forward With <span className="text-orange-500">Confidence</span>
          </h2>
          <p className="text-slate-500 text-lg">
            Find answers to common questions about our design, development, AI solutions, timelines, and collaboration process.
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
                <span className="text-lg font-semibold text-slate-900">{item.question}</span>
                <div className={`p-1 rounded-full border ${openIndex === i ? "border-orange-200 bg-orange-50 text-orange-500" : "border-slate-200 text-slate-400"}`}>
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