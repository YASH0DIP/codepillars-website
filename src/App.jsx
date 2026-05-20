import "./App.css";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import { Route, Routes } from "react-router-dom";
import MainLandingPage from "./pages/MainLandingPage/MainLandingPage";
import Footer from "./components/Footer";
import AboutUsPage from "./pages/AboutUsPage.jsx/AboutUsPage";

function App() {
  return (
    <div
      className="min-h-screen bg-[#FDFBF9] text-slate-900"
      // style={{ fontFamily: "Poppins" }}
    >
      <Navbar />
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="" element={<MainLandingPage />} />
          <Route path="/about" element={<AboutUsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
