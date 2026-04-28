"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
};

const SectionContainer = ({ children, className }: SectionContainerProps) => {
  return (
    <section
      className={cn(
        "container mx-auto flex min-h-screen flex-col justify-center px-4 sm:px-6 lg:justify-end lg:px-8",
        className,
      )}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
