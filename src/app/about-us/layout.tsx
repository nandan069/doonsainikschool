import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Doon Sainik School",
  description: "Learn about the legacy, mission, and vision of Doon Sainik School, Dehradun's premier preparatory institution for the Armed Forces.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
