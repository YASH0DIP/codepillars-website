import AboutUs from "./About"
import CallToAction from "./CallToAction"
import FAQSection from "../../components/FAQSection"
import Features from "./Features"
import Hero from "./Hero"
import Portfolio from "../../components/Portflio"
import Process from "./Process"
import Services from "../../components/Services"
import Testimonials from "./Testimonials"
import TrustedCompanies from "./TrustedCompanies"

function MainLandingPage() {
  return (
    <div>
        <Hero />
        <TrustedCompanies />
        <Features />
        <Services number={4}/>
        <Process />
        <Portfolio number={6}/>
        <AboutUs />
        <Testimonials />
        <FAQSection />
        <CallToAction />
    </div>
  )
}

export default MainLandingPage