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
import ScrollToTop from "@/components/scroll-to-top";
import BookMeModal from "@/components/book-me-modal";
import ParallaxWrapper from "@/components/parallax-wrapper";
import DynamicGradientBg from "@/components/dynamic-gradient-bg";

export default function Home() {
  return (
    <div className="font-sans relative">
      <DynamicGradientBg />
      <Header />
      <ParallaxWrapper>
        <main className="relative">
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
      <ScrollToTop />
      <BookMeModal />
    </div>
  );
}
