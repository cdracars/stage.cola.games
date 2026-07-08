"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import {
  Beth_Ellen,
  Della_Respira,
  IM_Fell_English_SC,
  Josefin_Sans,
  Marcellus_SC,
  La_Belle_Aurore,
  Cinzel_Decorative,
  Luckiest_Guy,
  Lexend,
  Norican,
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

const bethEllen = Beth_Ellen({
  subsets: ["latin"],
  variable: "--font-beth-ellen",
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

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
  weight: ["400", "700"],
});

const norican = Norican({
  subsets: ["latin"],
  variable: "--font-norican",
  weight: "400",
});

const MainContent: React.FC<{ children: ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  const isReawakeningPath = pathname.startsWith("/reawakening");
  const isAcosPath = pathname.startsWith("/a-crown-of-storms");
  const isCthulhuPath = pathname.startsWith("/cthulhu-1929");
  const isDarkChroniclePath = isReawakeningPath || isAcosPath;

  const mainClasses = isDarkChroniclePath
    ? "container mx-auto px-6 py-12 bg-gray-800 text-gray-100"
    : isCthulhuPath
    ? "bg-black text-[#b6d7a8]"
    : "container mx-auto px-6 py-12 bg-white text-gray-800";

  const bodyClasses = isDarkChroniclePath
    ? "bg-gray-800 text-gray-100"
    : isCthulhuPath
    ? "bg-black text-[#b6d7a8] font-josefin"
    : "bg-white text-gray-800 font-lex";

  return (
    <body
      className={`${bodyClasses} ${luckiestGuy.variable} ${lexend.variable} ${dellaRespira.variable} ${imFellEnglishSC.variable} ${marcellusSC.variable} ${laBelleAurore.variable} ${cinzelDecorative.variable} ${bethEllen.variable} ${josefinSans.variable} ${norican.variable} antialiased flex flex-col min-h-screen`}
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
