import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Doon Sainik School",
  description: "Explore life at Doon Sainik School through our curated gallery of campus life, training sessions, and events.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
