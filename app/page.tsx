import Header from "@/components/header";
import Hero from "@/components/hero";
import Expertise from "@/components/expertise";
import Clients from "@/components/clients";
import AIExpertise from "@/components/ai-expertise";
import HireMe from "@/components/hire-me";
import DrupalSection from "@/components/drupal-section";
import BookSection from "@/components/book-section";
import TechStack from "@/components/tech-stack";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import BookMeModal from "@/components/book-me-modal";
import ParallaxWrapper from "@/components/parallax-wrapper";

export default function Home() {
  return (
    <div className="font-sans relative overflow-x-hidden">
      {/* Single gradient background flowing from top to bottom */}
      <div className="fixed inset-0 bg-gradient-to-b from-slate-900 via-blue-950 via-30% via-cyan-950 via-50% via-slate-950 via-70% to-slate-900 -z-50"></div>
      
      <Header />
      <ParallaxWrapper>
        <main className="overflow-x-hidden">
          <Hero />
          <Expertise />
          <Clients />
          <AIExpertise />
          <HireMe />
          <DrupalSection />
          <BookSection />
          <TechStack />
          <Contact />
        </main>
      </ParallaxWrapper>
      <Footer />
      <BookMeModal />
    </div>
  );
}
