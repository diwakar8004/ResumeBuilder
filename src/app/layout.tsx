import "globals.css";
import { TopNavBar } from "components/TopNavBar";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "ResumeBuilder - Free Professional Resume Creator",
  description:
    "ResumeBuilder is a free, open-source resume builder that helps you create a modern, ATS-friendly professional resume in minutes. No sign-up required. Privacy-focused. Trusted by thousands.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopNavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
