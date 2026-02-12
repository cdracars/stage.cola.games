"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import {
  Della_Respira,
  IM_Fell_English_SC,
  Marcellus_SC,
  La_Belle_Aurore,
  Cinzel_Decorative,
  Luckiest_Guy,
  Lexend,
} from "next/font/google";
import { Provider } from "../ui/provider";
import Header from "./header";
import Footer from "./footer";

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

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  variable: "--font-cinzel-decorative",
  weight: "400",
});

const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  variable: "--font-luckiest-guy",
  weight: "400",
});

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  weight: "400",
});

const MainContent: React.FC<{ children: ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  // Check if the current path starts with "/reawakening"
  const isReawakeningPath =
    pathname.startsWith("/reawakening") ||
    pathname.startsWith("/a-crown-of-storms");

  // Define conditional classes based on URL
  const mainClasses = `flex-grow container mx-auto px-6 py-12 ${
    isReawakeningPath ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"
  }`;

  const bodyClasses = `${
    isReawakeningPath
      ? "bg-gray-800 text-gray-100"
      : "bg-white text-gray-800 font-lex"
  }`;

  return (
    <body
      className={`${bodyClasses} ${luckiestGuy.variable} ${lexend.variable} ${dellaRespira.variable} ${imFellEnglishSC.variable} ${marcellusSC.variable} ${laBelleAurore.variable} ${cinzelDecorative.variable} antialiased flex flex-col min-h-screen`}
    >
      <Provider>
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className={`min-h-full ${mainClasses}`}>{children}</main>

        {/* Footer */}
        <Footer />
      </Provider>
    </body>
  );
};

export default MainContent;
