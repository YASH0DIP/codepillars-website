import { useParams } from "react-router-dom";
import { getArticleById } from "../data";
import FeaturedArticle from "./BlogsPage/FeaturedArticle";
import CallToAction from "./MainLandingPage/CallToAction";

function ArticleDetailsPage() {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="py-20"></div>
      <header className="mb-12 text-center px-6 md:px-2">
        <div className="inline-block px-4 py-1 mb-6 text-sm font-medium text-orange-400 rounded-full border border-orange-200 bg-orange-100">
          ✦ Insights & Articles
        </div>
        <h1 className="text-5xl font-extrabold mb-6">
          Blogs, ideas &{" "}
          <span className="text-orange-400">digital innovation.</span>
        </h1>
        <div className="max-w-4xl mx-auto text-center text-gray-600">
          Explore the latest in technology, design, AI, development and digital
          transformation — written by the team building products at CodePillars.
        </div>
      </header>
      <div className="px-6 md:px-2 space-y-8">
        <FeaturedArticle />
        <ArticleSection id={id} />
      </div>
      <CallToAction />
    </div>
  );
}

export default ArticleDetailsPage;

function ArticleSection({ id }) {
  const article = getArticleById(id);
  return (
    <main className="max-w-7xl mx-auto p-6 md:p-8 text-stone-900 bg-white border-2 border-gray-100 rounded-3xl">
      {/* Header */}
      <header className="mb-10">
        <span className="inline-block px-3 py-1.5 bg-[#FFF3E2] text-[#F79714] text-sm font-bold uppercase tracking-wider rounded-full mb-4">
          • {article?.category || "Strategy"}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {article.title ||
            "Why Your Website Is Not Converting (And How CodePillars Fixes It)"}
        </h1>
        <p className="text-xl text-stone-600 mb-6">
          {article.description ||
            "Most business websites look good but fail to generate leads. Here's how strategic UX, messaging, and performance optimization improveconversions."}
        </p>
        <p className="text-sm text-stone-500">
          {article.date || "September 18, 2025"} •{" "}
          {article.readTime || "7 Min Read"} • {"By CodePillars"}
        </p>
      </header>

      {/* The Problem */}
      <section className="p-4 mb-12 border border-stone-100 rounded-2xl bg-stone-50/50">
        <h3 className="text-orange-500 font-bold uppercase tracking-widest text-lg mb-2">
          The Problem
        </h3>
        <h2 className="text-2xl font-bold mb-4">
          What Most Business Websites Get Wrong
        </h2>
        <p className="text-stone-600 mb-8">
          Many business websites are visually appealing but fail to guide
          visitors toward meaningful action. Weak messaging, unclear CTAs, and
          poor mobile performance reduce trust and conversions.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {article?.problems?.map((p, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm"
            >
              <p.icon
                className="text-orange-400 mb-4 p-2 bg-orange-50 rounded-2xl"
                size={44}
              />
              <h4 className="font-bold mb-2">{p.title}</h4>
              <p className="text-sm text-stone-600">{p.desc}</p>
            </div>
          ))}
        </div>
        <blockquote className="mt-8 p-4 bg-[#FFF3E2] border-l-4 border-orange-500/60 text-[#F79714] italic rounded-xl">
          “The highest-converting websites are built around customer intent, not
          company ego.”
        </blockquote>
      </section>

      {/* Our Approach */}
      <section className="mb-12">
        <h3 className="text-orange-500 font-bold uppercase tracking-widest text-lg mb-2">
          Our Approach
        </h3>
        <h2 className="text-2xl font-bold mb-8">
          How CodePillars Improves Website Conversion
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {article?.approaches?.map((a) => (
            <div key={a.id} className="p-6 border border-stone-200 rounded-xl">
              <span className="text-orange-400 bg-orange-50 p-2 font-bold rounded-xl text-2xl">
                {a.id}
              </span>
              <h4 className="font-bold mb-2 mt-6">{a.title}</h4>
              <p className="text-sm text-stone-600">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="p-4 border border-stone-100 rounded-2xl bg-stone-50/50">
        <h3 className="text-orange-500 font-bold uppercase tracking-widest text-lg mb-2">
          Results
        </h3>
        <h2 className="text-2xl font-bold mb-8">
          What Better Conversion Design Actually Delivers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {article?.results?.map((r, i) => (
            <div
              key={i}
              className="text-center px-6 py-4 bg-white rounded-xl shadow-sm border border-stone-100 flex items-center justify-between"
            >
              <r.icon
                className="text-orange-400 bg-orange-50 p-2 rounded-xl"
                size={44}
              />
              <div>
                <div className="text-2xl font-bold">{r.val}</div>
                <div className="text-xs text-stone-500 uppercase">
                  {r.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
