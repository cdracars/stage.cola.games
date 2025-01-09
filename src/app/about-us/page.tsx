import { StaticBreadcrumbs } from "@/components/ui/breadcrumbs";
import CalloutCard from "@/components/ui/callout-card";
import MiniBanner from "@/components/ui/mini-banner";
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function AboutUsPage() {
  return (
    <>
      <Box className="bg-secondary-blue text-black page-section">
        <Box className="page-section !font-lex !pb-0">
          {/* Hero Section */}
          <MiniBanner
            src="/images/about-us/who-are-we.png"
            alt="Who are we?"
            className="bg-white rounded-lg shadow-md !mb-0"
          />
        </Box>
        <StaticBreadcrumbs
          routes={[
            { label: "Home", href: "/" },
            { label: "About Us", href: "#" },
          ]}
        />
        <Box className="page-section !font-lex">
          <Text className="mb-4">
            Central Oklahoma Live Action Games (or <strong>COLA Games</strong>,
            for short) is a club of tabletop and live-action gamers looking to
            evolve and grow the hobby of live-action roleplay in the central
            Oklahoma area.
          </Text>
          <Text className="mb-4">
            Leveraging nearly a combined century as players and hosts of
            live-action experiences, we aim to create immersive and engaging
            events for both experienced players and those new to the hobby.
          </Text>
          <Text className="mb-4">
            Click{" "}
            <Link
              className="text-secondary-purple hover:underline"
              href={"/reawakening"}
            >
              here
            </Link>{" "}
            to explore our upcoming premier Vampire: The Masquerade event{" "}
            <span className="text-primary-orange">Reawakening</span>, and stay
            tuned for further events in the central Oklahoma area.
          </Text>
        </Box>
        <Box className="page-section !font-lex">
          <MiniBanner
            src="/images/about-us/what-is-larp.png"
            alt="What is Live-Action Gaming?"
            className="bg-white rounded-lg shadow-md"
          />
          <Text className="mb-4">
            Live-action roleplaying (or LARP, as it’s commonly called) is very
            similar to a tabletop roleplaying game like Dungeons and Dragons.
            Players generate and portray a character, interacting and making
            decisions for that character. Another player (often called a GM or
            Storyteller) describes the game world, filling it with interesting
            characters, stories and challenges for player characters to
            overcome.
          </Text>
          <Text className="mb-4">
            The key difference with live-action is, rather than sitting around a
            table with your friends describing what your character does and how
            they act, you move around and interact with your friends and the
            environment as if you were your character!
          </Text>
          <Text className="mb-4">
            It’s an engaging hobby that mixes the fun of tabletop, like
            developing your character and overcoming challenges, with
            environmental immersion, costuming, social roleplay and a dash of
            improvisational theater.
          </Text>
        </Box>
        <Box className="page-section  !font-lex">
          <MiniBanner
            src="/images/about-us/types-of-larp.png"
            alt="Types of LARP"
            className="bg-white rounded-lg shadow-md"
          />
          <Text className="mb-4">
            There are many different kinds of live-action roleplaying events -
            the two most common kinds in our area are “Boffer” LARPs and
            “Parlor” LARPs.
          </Text>
          <Box className="mb-4 flex flex-col md:flex-row md:gap-4">
            <CalloutCard
              title={`"Boffer" LARPs`}
              imageSrc="/images/about-us/boffer-larp.jpeg"
              imageAlt="Viking Woman Snarling"
              description={
                <>
                  Some Live Action experiences focus on physical action, using
                  rules for contact-safe combat using foam weapons. These games
                  tend to focus on physical play and usually take place
                  outdoors.
                </>
              }
              className="flex-1"
            />
            <CalloutCard
              title={`"Parlor" LARPs`}
              imageSrc="/images/about-us/parlor-larp.jpeg"
              imageAlt="Man in Suit Sitting"
              description={
                <>
                  Other games, like our upcoming event, Reawakening, use
                  abstracted systems like dice or rock, paper, scissors. These
                  games are more socially focused and typically take place in
                  indoor spaces.
                </>
              }
              className="flex-1"
            />
          </Box>
          <Text className="mb-4">
            These kinds of LARPs refer to the type of rules & action you see
            in-game, but both kinds can cover a HUGE variety of settings, genres
            and themes. You’ll find live-action games spanning fantasy, space
            opera, post-apocalyptic fiction, horror, historical fiction, modern
            settings, and more!
          </Text>
        </Box>
        <Box className="page-section  !font-lex">
          <MiniBanner
            src="/images/about-us/what-about-safety.png"
            alt="What about safety?"
            className="bg-white rounded-lg shadow-md"
          />
          <Text className="mb-4">
            Physical, mental and emotional safety are paramount at any
            Live-Action experience. Most LARPs, including those run by COLA
            Games, incorporate physical safety and no-touching rules. Game
            runners will also set clear boundaries for acceptable content and
            behavior.
          </Text>
          <Text className="mb-4">
            COLA games will also always incorporate systems to check-in with
            other players to ensure emotional safety without impacting
            immersion. Most LARPs, including ours, also identify
            “out-of-character” decompression spaces where players can take a
            moment away to recover from intense scenes or in-character drama.
          </Text>
        </Box>
        <Box className="page-section  !font-lex">
          <MiniBanner
            src="/images/about-us/how-to-get-started.png"
            alt="How do I get started?"
            className="bg-white rounded-lg shadow-md"
          />
          <Text className="mb-4">
            Getting involved is easy! There are plenty of LARP games and
            communities out there. If you’d like to get involved with our
            upcoming games, you can join our Discord Server and check out our
            upcoming live-action chronicle:
          </Text>
          <Link
            href="https://discord.gg/5p59HPmtYH"
            className="pb-8 block group transition-transform duration-300 hover:scale-105 hover:rotate-1"
          >
            <MiniBanner
              src="/images/about-us/discord-link.png"
              alt="COLA Games Discord Server"
            />
          </Link>
          <Link
            href="/reawakening"
            className="pb-8 block group transition-transform duration-300 hover:scale-105 hover:rotate-1"
          >
            <MiniBanner
              src="/images/about-us/reawakeining-logo.png"
              alt="Reawakening A Vampire The Masquerade Live-Action Experience"
            />
          </Link>
        </Box>
      </Box>
    </>
  );
}
