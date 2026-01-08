import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";

const HomePage = () => {
  return (
    <main className="space-y-4">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </main>
  );
};

export default HomePage;
