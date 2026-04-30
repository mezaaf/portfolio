import { cn } from "@/lib/utils";

const ExperienceSection = () => {
  return (
    <section className="container mx-auto space-y-12 px-4 md:px-12 xl:px-20">
      <h1 className="text-center text-[2rem] leading-none font-medium md:text-[3rem] lg:text-left lg:text-[5rem]">
        Experience.
      </h1>
      <div className="flex w-full flex-col">
        {experience.map((item, index) => (
          <div
            key={index}
            className={cn(
              "border-my-black/80 flex items-center justify-between border-t px-4 py-6",
              index === experience.length - 1 && "border-b",
            )}
          >
            <div>
              <h6 className="font-medium md:text-lg">{item.title}</h6>
              <p className="text-my-black/80 max-w-4xl">{item.description}</p>
            </div>
            <h5 className="text-xl font-medium lg:text-3xl">{item.period}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;

export const experience = [
  {
    title:
      "Fullstack Developer at Tarbiyatul Mutathowi'in Islamic Boarding School",
    description:
      "Developing and maintaining internal web systems to support operational workflows. Built and improved both frontend interfaces and backend services, including data management and API integration to enhance efficiency.",
    period: "2024 - Present",
  },
  {
    title: "Fullstack Developer at Benang Merah Studio (Freelance Project)",
    description:
      "Collaborated on a client-based web project, delivering a responsive and functional application. Focused on implementing clean UI, integrating APIs, and ensuring smooth user experience across devices.",
    period: "2026",
  },
  {
    title: "Fullstack Developer (Personal Project)",
    description:
      "Independently building and experimenting with fullstack applications to strengthen development skills. Explored modern technologies while creating responsive interfaces, backend logic, and reusable components.",
    period: "2023 - Present",
  },
];
