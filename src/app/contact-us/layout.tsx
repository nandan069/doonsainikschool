import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Doon Sainik School",
  description: "Get in touch with Doon Sainik School. Contact us via phone, email, WhatsApp, or visit our headquarters in Dehradun.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
