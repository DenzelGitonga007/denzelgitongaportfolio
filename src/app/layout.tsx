import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Denzel Gitonga Portfolio",
  description: "Portfolio of Denzel Gitonga, a Full-Stack Software Engineer, AWS Certified Cloud Practitioner, and Automation Specialist specializing in scalable digital solutions.",
  icons: {
    icon: "/My-Portfolio/assets/img/favicon.ico",
    apple: "/My-Portfolio/assets/img/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} font-outfit antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <div className="fixed inset-0 -z-10 h-full w-full bg-[#f8fafc]">
          <div className="absolute inset-0 bg-[radial-gradient(#065cc211_1px,transparent_1px)] [background-size:32px_32px]"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
