import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import ExpertiseSection from "../components/ExpertiseSection";
import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ExpertiseSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;
