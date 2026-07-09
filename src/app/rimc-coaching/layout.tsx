import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RIMC Coaching | Doon Sainik School",
  description: "Elite preparation for Rashtriya Indian Military College (RIMC). Expert faculty, rigorous schedule, and comprehensive physical training.",
};

export default function RIMCLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
