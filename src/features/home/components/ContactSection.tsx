import Image from "next/image";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-4 sm:gap-6 lg:gap-8 pb-12 sm:pb-16 lg:pb-20"
    >
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
        Book A Call
      </h1>
      <div className="w-full flex items-center gap-12 sm:gap-16 lg:gap-20">
        <div className="hidden md:block w-full max-w-lg overflow-hidden aspect-square bg-accent rounded-lg">
          <Image
            src="/images/mezaaf-2.webp"
            alt="mezaaf-contact"
            width={200}
            height={200}
            className="w-full object-contain object-center grayscale"
          />
        </div>
        <div className="w-full">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
