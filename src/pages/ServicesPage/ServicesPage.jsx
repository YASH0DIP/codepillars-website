import Services from "../../components/Services";
import FAQSection from "../../components/FAQSection";
import IndustriesSection from "./IndustriesSection";

function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto">
        <div className="py-16"></div>
      <Services />
      <IndustriesSection />
      <FAQSection />
    </div>
  );
}

export default ServicesPage;
