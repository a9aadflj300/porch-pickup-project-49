import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhyPorchPickup from "@/components/WhyPorchPickup";
import HowItWorks from "@/components/HowItWorks";
import WhatWeStore from "@/components/WhatWeStore";
import PricingSection from "@/components/PricingSection";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>PorchPickup Storage: Your Storage Unit—On Demand.</title>
        <meta
          name="description"
          content="Effortless, doorstep-based storage that clears space in your home. We pick up, store, and deliver back anytime. Suburban storage, made simple."
        />
        <meta property="og:title" content="PorchPickup Storage: Your Storage Unit—On Demand." />
        <meta
          property="og:description"
          content="Effortless, doorstep-based storage that clears space in your home. We pick up, store, and deliver back anytime."
        />
        <link rel="canonical" href="https://porchpickup.com" />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        <main>
          <HeroSection />
          <WhyPorchPickup />
          <HowItWorks />
          <WhatWeStore />
          <PricingSection />
          <Testimonials />
          <FAQSection />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
