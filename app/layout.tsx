import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "IPAiC | AI-Enabled Infection Prevention Surveillance",
  description:
    "IPAiC helps Infection Prevention teams bring surveillance information, clinical context, evidence, and professional review into a more structured workflow.",
  keywords: [
    "infection prevention software",
    "infection surveillance",
    "infection prevention technology",
    "hospital infection surveillance",
    "infection preventionist software",
    "healthcare-associated infection surveillance",
    "clinical surveillance",
    "AI infection prevention",
  ],
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-text">
        {children}
      </body>
    </html>
  );
}
