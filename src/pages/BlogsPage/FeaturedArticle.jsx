import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import featuredArticle from "../../assets/featured-article.jpg";
import { useNavigate } from "react-router-dom";

const FeaturedArticle = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full max-w-7xl mx-auto">
      <motion.article className="flex flex-col lg:flex-row shadow-lg hover:shadow-xl bg-linear-to-br from-[#FEEFDA] to-[#E7EAEF] rounded-3xl overflow-hidden border border-stone-200">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 h-full max-h-96 lg:max-h-110 overflow-hidden">
          <img
            src={featuredArticle}
            alt="UI/UX Design Process"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-4">
          <div className="flex flex-wrap items-center gap-4 text-sm text-stone-500 font-medium tracking-wide">
            <span className="uppercase text-orange-500 tracking-widest text-xs font-bold">
              Featured Article
            </span>
            <div className="flex items-center gap-2 bg-blue-50 text-blue-900 px-3 py-1 rounded-full text-xs font-semibold">
              UI/UX DESIGN
            </div>
            <span>• 8 Min Read</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 leading-tight">
            Designing Digital Experiences That Users Love
          </h2>

          <p className="text-stone-600 text-lg leading-relaxed">
            A deep dive into our design process, strategies, and principles that
            help us create beautiful, intuitive, and high-converting digital
            experiences.
          </p>

          <button
            onClick={() => navigate("/blogs/1")}
            className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:gap-3 transition-all duration-300"
          >
            Read Full Article <ArrowRight size={18} />
          </button>
        </div>
      </motion.article>
    </section>
  );
};

export default FeaturedArticle;
