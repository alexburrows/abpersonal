import Header from "@/components/header";
import Hero from "@/components/hero";
import Clients from "@/components/clients";
import Expertise from "@/components/expertise";
import HireMe from "@/components/hire-me";
import DrupalSection from "@/components/drupal-section";
import AIExpertise from "@/components/ai-expertise";
import TechStack from "@/components/tech-stack";
import BookSection from "@/components/book-section";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import BookMeModal from "@/components/book-me-modal";
import ParallaxWrapper from "@/components/parallax-wrapper";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-text-primary">
      <Header />
      <ParallaxWrapper>
        <main>
          <Hero />
          <Clients />
          <Expertise />
          <HireMe />
          <DrupalSection />
          <AIExpertise />
          <TechStack />
          <BookSection />
          <Contact />
        </main>
      </ParallaxWrapper>
      <Footer />
      <BookMeModal />
    </div>
  );
}
