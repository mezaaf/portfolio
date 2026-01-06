"use client";
import { Code2Icon, CloudDownload } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const pathname = usePathname();

  const { isExtraSmallScreen, isSmallScreen } = useMobile();

  return (
    <nav className="w-full sticky top-0 h-16 sm:h-18 lg:h-20 flex items-center justify-center bg-accent-foreground border-b border-primary">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href={"/"} className="flex items-center gap-2">
          <span className="bg-primary rounded-full p-1">
            <Code2Icon className="stroke-3" />
          </span>{" "}
          <h1 className="font-extrabold text-lg md:text-xl">Mezaaf</h1>
        </Link>
        <div className="hidden md:flex items-center gap-4 sm:gap-6 lg:gap-8">
          {navItems.map((nav) => {
            const isActive = pathname === nav.href;
            return (
              <Link
                key={nav.name}
                href={nav.href}
                className={cn(
                  "flex items-center gap-2 hover:text-primary",
                  isActive && "text-primary"
                )}
              >
                <div
                  className={cn(
                    "h-2 w-2 rounded-full transition-all duration-300 ease-in-out",
                    isActive && "bg-primary font-semibold"
                  )}
                />{" "}
                {nav.name}
              </Link>
            );
          })}
        </div>
        <Button
          size={isSmallScreen || isExtraSmallScreen ? "sm" : "default"}
          className="font-semibold text-xs md:text-sm"
        >
          <CloudDownload />
          DOWNLOAD CV
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

const navItems = [
  {
    name: "HOME",
    href: "/",
  },
  {
    name: "ABOUT",
    href: "/about",
  },
  {
    name: "PROJECT",
    href: "/project",
  },
  {
    name: "CONTACT",
    href: "/contact",
  },
];
