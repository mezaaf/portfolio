import { Metadata } from "next";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";

export const metadata: Metadata = {
  title: {
    absolute: "Mezaaf | Web Developer",
  },
};

const HomePage = () => {
  return (
    <main className="space-y-12 md:space-y-20">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
    </main>
  );
};

export default HomePage;
