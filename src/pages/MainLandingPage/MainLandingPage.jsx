import AboutUs from "./About"
import CallToAction from "./CallToAction"
import FAQSection from "./FAQSection"
import Features from "./Features"
import Hero from "./Hero"
import Portfolio from "./Portflio"
import Process from "./Process"
import Services from "./Services"
import Testimonials from "./Testimonials"
import TrustedCompanies from "./TrustedCompanies"

function MainLandingPage() {
  return (
    <div>
        <Hero />
        <TrustedCompanies />
        <Features />
        <Services />
        <Process />
        <Portfolio />
        <AboutUs />
        <Testimonials />
        <FAQSection />
        <CallToAction />
    </div>
  )
}

export default MainLandingPage