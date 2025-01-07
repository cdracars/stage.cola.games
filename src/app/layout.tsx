import type { Metadata } from "next";
import "@/styles/globals.css";
import MainContent from "@/components/layout/main-content";

export const metadata: Metadata = {
  title: "Central Oklahoma Live Action Games",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <MainContent>{children}</MainContent>
    </html>
  );
}
