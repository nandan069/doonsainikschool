import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sainik School Coaching | Doon Sainik School",
  description: "Prepare for the All India Sainik Schools Entrance Exam (AISSEE) with Dehradun's finest educators and comprehensive coaching.",
};

export default function SainikLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
