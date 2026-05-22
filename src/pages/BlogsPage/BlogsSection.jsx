import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useNavigate } from "react-router-dom";
import { ARTICLES } from "../../data";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const CATEGORIES = [
  "All",
  "Strategy",
  "Development",
  "Performance",
  "AI & Automation",
];

const ArticleCard = ({ article, onClick }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -8 }}
    
    className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
  >
    <div className="h-58 bg-slate-200 mb-4 rounded-t-2xl overflow-hidden">
      <img
        src={article.image}
        className="h-full w-full object-cover hover:scale-105 transition-all"
      />
    </div>
    <div className="flex items-center justify-between gap-4 px-4 text-xs text-slate-500 mb-3">
      <div className="flex items-center gap-2 justify-between">
        <span className="flex gap-1">
          <Calendar className="w-4 h-4" /> {article.date}
        </span>
        <span className="flex gap-1">
          <Clock className="w-4 h-4" /> {article.readTime}
        </span>
        <span className="font-semibold text-orange-400">
          {article.category}
        </span>
      </div>
      <button onClick={onClick} className=" cursor-pointer flex items-center gap-2 text-sm font-medium">
        Read Article <ArrowUpRight className="size-4" />
      </button>
    </div>
    <h3 onClick={onClick} className=" cursor-pointer text-xl font-bold mb-2 px-4 group-hover:text-orange-400 transition-colors">
      {article.title}
    </h3>
    <h3 className="text-sm font-medium  text-gray-500 mb-6 px-4">
      {article.description || "akwbiug"}
    </h3>
  </motion.div>
);

function BlogsSection() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter(
      (a) =>
        (activeFilter === "All" || a.category === activeFilter) &&
        a.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [activeFilter, search]);

  return (
    <div className="max-w-7xl mx-auto py-12">
      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-10 pb-6 border-b border-slate-200">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={cn(
              "px-5 py-2 rounded-full text-sm font-medium transition-all",
              activeFilter === cat
                ? "bg-slate-900 text-white"
                : "bg-slate-100 hover:bg-slate-200",
            )}
          >
            {cat}
          </button>
        ))}
        <div className="ml-auto w-full md:w-auto flex items-center bg-slate-100 px-4 py-2 rounded-full border border-slate-200">
          <Search className="size-4 text-slate-400 mr-2" />
          <input
            placeholder="Search Articles..."
            className="bg-transparent outline-none text-sm w-48"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence>
          {filteredArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onClick={()=> navigate(`/blogs/${article.id}`)}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default BlogsSection;
