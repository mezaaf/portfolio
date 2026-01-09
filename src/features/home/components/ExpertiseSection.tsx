import { expertises } from "@/lib/data/expertisesData";
import ExpertiseItem from "./ExpertiseItem";

const ExpertiseSection = () => {
  return (
    <section
      id="contact"
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8 pt-16 sm:pt-18 lg:pt-24"
    >
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
        My Expertise
      </h1>
      <div className="w-full flex flex-col gap-4 sm:gap-6 lg:gap-8 items-center justify-center">
        {expertises.map((item) => (
          <ExpertiseItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ExpertiseSection;
