"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type SectionContainerProps = {
  children: ReactNode;
  minfullScreen?: boolean;
  className?: string;
};

const SectionContainer = ({
  children,
  minfullScreen = false,
  className,
}: SectionContainerProps) => {
  return (
    <section
      className={cn(
        "container mx-auto flex flex-col justify-center",
        minfullScreen && "min-h-screen",
        className,
      )}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
