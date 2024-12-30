import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import NavigationBar from "@/components/layout/navigation-bar";
import Footer from "@/components/layout/footer";

import {
  Della_Respira,
  IM_Fell_English_SC,
  Marcellus_SC,
  La_Belle_Aurore,
} from "next/font/google";

const dellaRespira = Della_Respira({
  subsets: ["latin"],
  variable: "--font-della-respira",
  weight: "400",
});

const imFellEnglishSC = IM_Fell_English_SC({
  subsets: ["latin"],
  variable: "--font-im-fell-english-sc",
  weight: "400",
});

const marcellusSC = Marcellus_SC({
  subsets: ["latin"],
  variable: "--font-marcellus-sc",
  weight: "400",
});

const laBelleAurore = La_Belle_Aurore({
  subsets: ["latin"],
  variable: "--font-la-belle-aurore",
  weight: "400",
});

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
      <body
        className={`${dellaRespira.variable} ${imFellEnglishSC.variable} ${marcellusSC.variable} ${laBelleAurore.variable} antialiased flex flex-col min-h-screen bg-gray-900 text-gray-100`}
      >
        <Provider>
          {/* Navigation Bar */}
          <NavigationBar />

          {/* Main Content */}
          <main className="flex-grow container mx-auto px-6 py-12 bg-gray-900 text-gray-100 min-h-full">
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
