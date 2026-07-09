import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admission Procedure | Doon Sainik School",
  description: "Step-by-step guide to join Doon Sainik School. Download admission forms, prospectuses, and learn about our entrance assessment.",
};

export default function AdmissionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
