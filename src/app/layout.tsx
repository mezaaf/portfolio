import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/ThemeProvider";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const font = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Mezaaf",
    template: " %s | Mezaaf",
  },
  description:
    "A seasoned web developer with a passion for creating engaging and interactive websites.",
  metadataBase: new URL("https://aafrzl.my.id"),
  openGraph: {
    title: {
      default: "Mezaaf",
      template: " %s | Mezaaf",
    },
    description:
      "A seasoned web developer with a passion for creating engaging and interactive websites.",
    url: "https://aafrzl.my.id",
    siteName: "Mezaaf",
    images: [
      {
        url: "/public/images/og-images.jpg",
        width: 1000,
        height: 1200,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  keywords: [
    "marchenda ezafuwandhana",
    "marchenda",
    "sendo",
    "benggol",
    "eza",
    "eza f",
    "fuwandhana",
    "Mezaaf",
    "web developer",
    "developer",
    "engineer",
    "react",
    "nextjs",
    "creative",
    "creative developer",
    "creative developer",
    "web developer",
    "web engineer",
    "tech",
    "indonesia",
    "indonesian",
    "indonesian developer",
    "indonesian web developer",
    "indonesian frontend developer",
    "indonesian web engineer",
    "indonesian frontend engineer",
    "indonesian creative developer",
    "portfolio",
    "portfolio website",
    "portfolio web",
    "portfolio web developer",
    "portfolio frontend developer",
    "portfolio web engineer",
  ],
  twitter: {
    card: "summary_large_image",
    title: {
      template: "Mezaaf | %s",
      default: "Mezaaf | Frontend Developer",
    },
    description:
      "A seasoned frontend web developer with a passion for creating engaging and interactive websites.",
    creator: "@aafrzl",
    images: [
      {
        url: "/public/images/og-images.jpg",
        width: 1000,
        height: 1200,
      },
    ],
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={cn(
          "bg-zinc-50 text-zinc-800 antialiased dark:bg-neutral-900 dark:text-zinc-50 scroll-smooth",
          font.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="theme-mode"
        >
          <Navbar />
          {children}
          <Footer />
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
