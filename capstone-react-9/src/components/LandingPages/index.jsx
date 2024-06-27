import React from "react";
import HeroSection from "../../components/LandingPages/HeroSection/HeroSection";
import DownloadSection from "../../components/LandingPages/DownloadSection/index"
import FeatureSection from "../../components/LandingPages/FeatureSection/index"
import BenefitSection from "../../components/LandingPages/BenefitSection/index"
import TestimoniSection from "../../components/LandingPages/TestimoniSection/index"

export default function LandingPage() {
  return (
    <div>
      <section id="home">
        <HeroSection />
      </section>
      <section id="download">
        <DownloadSection />
      </section>
      <section id="fitur">
        <FeatureSection />
      </section>
      <section id="manfaat">
        <BenefitSection />
      </section>
      <section id="testimoni">
        <TestimoniSection />
      </section>
    </div>
  );
}