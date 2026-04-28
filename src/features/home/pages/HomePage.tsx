import { Metadata } from "next";
import HeroSection from "../components/HeroSection";

export const metadata: Metadata = {
  title: {
    absolute: "Mezaaf | Web Developer",
  },
};

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      {/* <AboutSection />
      <ProjectSection />
      <ExpertiseSection />
      <ContactSection /> */}
    </main>
  );
};

export default HomePage;
