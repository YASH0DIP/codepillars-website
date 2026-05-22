import CallToAction from "../MainLandingPage/CallToAction";
import BlogsSection from "./BlogsSection";
import FeaturedArticle from "./FeaturedArticle";

function BlogsPage() {
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
      <div className="px-6 md:px-2">
      <FeaturedArticle />
      <BlogsSection />
      </div>
      <CallToAction />
    </div>
  );
}

export default BlogsPage;
