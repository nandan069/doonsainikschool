import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Faculty | Doon Sainik School",
  description: "Meet our expert faculty members and mentors, including ex-defense personnel dedicated to your success.",
};

export default function FacultyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
