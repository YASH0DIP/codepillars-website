import "./App.css";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import { Route, Routes, useLocation } from "react-router-dom";
import MainLandingPage from "./pages/MainLandingPage/MainLandingPage";
import Footer from "./components/Footer";
import AboutUsPage from "./pages/AboutUsPage.jsx/AboutUsPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import { AnimatePresence } from "framer-motion";
import PageWrapper from "./components/PageWrapper";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsAndConditions from "./pages/TermsAndConditions";
import ContactUsPage from "./pages/ContactUsPage";
import { Toaster } from "react-hot-toast";
import BlogsPage from "./pages/BlogsPage/BlogsPage";
import ArticleDetailsPage from "./pages/ArticleDetailsPage";
import CareersPage from "./pages/CareersPage/CareersPage";

function App() {
  const location = useLocation();
  return (
    <div
      className="min-h-screen bg-[#FDFBF9] text-slate-900"
      // style={{ fontFamily: "Poppins" }}
    >
      <Navbar />
      <main>
        <ScrollToTop />
        <Toaster />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path=""
              element={
                <PageWrapper>
                  <MainLandingPage />
                </PageWrapper>
              }
            />
            <Route
              path="/about"
              element={
                <PageWrapper>
                  <AboutUsPage />
                </PageWrapper>
              }
            />
            <Route
              path="/services"
              element={
                <PageWrapper>
                  <ServicesPage />
                </PageWrapper>
              }
            />
            <Route
              path="/portfolio"
              element={
                <PageWrapper>
                  <PortfolioPage />
                </PageWrapper>
              }
            />
            <Route
              path="/blogs"
              element={
                <PageWrapper>
                  <BlogsPage />
                </PageWrapper>
              }
            />
            <Route
              path="/blogs/:id"
              element={
                <PageWrapper>
                  <ArticleDetailsPage />
                </PageWrapper>
              }
            />
            <Route
              path="/careers"
              element={
                <PageWrapper>
                  <CareersPage />
                </PageWrapper>
              }
            />
            <Route
              path="/contact"
              element={
                <PageWrapper>
                  <ContactUsPage />
                </PageWrapper>
              }
            />
            <Route
              path="/privacy-policy"
              element={
                <PageWrapper>
                  <PrivacyPolicyPage />
                </PageWrapper>
              }
            />
            <Route
              path="/terms-conditions"
              element={
                <PageWrapper>
                  <TermsAndConditions />
                </PageWrapper>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
