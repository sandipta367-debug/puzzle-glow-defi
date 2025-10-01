import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import UrgencySection from "@/components/UrgencySection";
import VaultHighlight from "@/components/VaultHighlight";
import HackathonSection from "@/components/HackathonSection";
import FooterCTA from "@/components/FooterCTA";
import { BackgroundGrid } from "@/components/ui/background-grid";
import { Spotlight } from "@/components/ui/spotlight";

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-darker">
      <Navbar />
      <main>
        <HeroSection />
        
        {/* Grid and Spotlight Background for all sections below hero */}
        <div className="relative">
          <BackgroundGrid />
          <Spotlight />
          
          <div className="relative z-10">
            <div id="about">
              <AboutSection />
            </div>
            <UrgencySection />
            <div id="how">
              <VaultHighlight />
            </div>
            <div id="hackathon">
              <HackathonSection />
            </div>
            <FooterCTA />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
