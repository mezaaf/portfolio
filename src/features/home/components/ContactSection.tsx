import Image from "next/image";
import ContactForm from "./ContactForm";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8 pb-12 sm:pb-16 lg:pb-20"
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
      <div className="w-full flex flex-col md:flex-row md:justify-between gap-8">
        <div className="w-full max-w-md flex flex-col gap-4 sm:gap-6 lg:gap-8">
          <p>
            Passionate about learning and building user-centric web applications
            that turn ideas into real digital experiences.
          </p>
          <h1 className="flex items-center gap-2 text-2xl sm:text-3xl lg:text-4xl font-bold">
            Let&apos;s Chat <ArrowRightIcon className="-rotate-45 size-10" />
          </h1>
        </div>
        <div className="">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                href="#about"
                className="hover:underline hover:text-primary"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="hover:underline hover:text-primary"
              >
                Contact Me
              </Link>
            </li>
            <li>
              <Link
                href="#project"
                className="hover:underline hover:text-primary"
              >
                My Project
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h1>
            <span className="text-primary">mezafuwandhana</span>@gmail.com
          </h1>
          <p>Based in Madiun, East Java, Indonesia</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
