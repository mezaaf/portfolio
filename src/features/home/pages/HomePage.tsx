import { Metadata } from "next";
import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import ExperienceSection from "../components/ExperienceSection";

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
    </main>
  );
};

export default HomePage;
