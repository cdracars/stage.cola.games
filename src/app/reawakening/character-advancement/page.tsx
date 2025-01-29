"use client";

import { Box, List, Text } from "@chakra-ui/react";
import MiniBanner from "@/components/ui/mini-banner";
import SectionHeadingsCentered from "@/components/ui/section-headings-centered";
import Hero from "@/components/ui/hero";
import { StaticBreadcrumbs } from "@/components/ui/breadcrumbs";
import Blockquote from "@/components/ui/blockquote";
import ReawakeningQuickLinks from "@/components/sections/reawakening-quick-nav-section";

export default function CharacterAdvancementPage() {
  return (
    <Box className="bg-background text-foreground page-section">
      {/* Hero Section */}
      <Hero
        src="/images/reawakening/character-advancement/advancement-banner.png"
        alt="Reawakening Character Advancement Death & Retirement"
      />
      <StaticBreadcrumbs
        routes={[
          { label: "Home", href: "/" },
          { label: "Reawakening", href: "/reawakening" },
          { label: "Character Advancement", href: "#" },
        ]}
      />
      <Box className="page-section bottom-border">
        <MiniBanner
          src="/images/reawakening/character-advancement/skull-rose.png"
          alt="Skull and Rose"
        />
        <SectionHeadingsCentered
          section_heading="Character Advancement"
          subsection_heading=""
        />
        <Text className="mb-4">
          Once a character is in play, they will advance in experience and power
          throughout the chronicle. Below are the rules for advancement for both
          Standard Tickets and Season Passes.
        </Text>
        <Blockquote
          heading="Standard Ticket"
          text={
            <>
              <List.Root className="list-disc pl-4">
                <List.Item>
                  Your character will gain +10 XP upon purchase of a standard
                  event ticket.
                </List.Item>
                <List.Item>
                  This XP is awarded immediately, and can be spent prior to the
                  game.
                </List.Item>
                <List.Item>
                  A character can only gain XP once per game.
                </List.Item>
                <List.Item>
                  If a player does not purchase a game ticket, their character
                  will not earn XP for that session.
                </List.Item>
              </List.Root>
            </>
          }
        />
        <Blockquote
          heading="Season Pass"
          text={
            <>
              <List.Root className="list-disc pl-4">
                <List.Item>
                  Your character will gain +10 XP prior to each event, as if
                  they purchased a Standard Ticket to that event.
                </List.Item>
                <List.Item>
                  This XP is awarded immediately after the previous game’s
                  conclusion, and can be spent prior to the next game.
                </List.Item>
                <List.Item>
                  Upon purchase of a Season Pass, the character will also gain
                  XP as though they had attended every prior game of the
                  chronicle, “catching up” to the maximum awarded XP for the
                  chronicle.
                </List.Item>
              </List.Root>
            </>
          }
        />
      </Box>
      <Box className="page-section bottom-border">
        <SectionHeadingsCentered
          section_heading="Character Rewrites"
          subsection_heading=""
        />
        <Text className="mb-4">
          Sometimes, a player creates a character hoping for the best, but the
          game plays a little differently than they were expecting. We’re
          offering each player a rewrite of their character if they attend a
          game and they would like to make some modifications.
        </Text>
        <List.Root className="list-disc pl-4 marker:text-brand-500">
          <List.Item>
            A character is awarded ONE full rewrite, and{" "}
            <strong className="italic">only after</strong> the Character’s{" "}
            <strong className="italic">first session in-play</strong>.
          </List.Item>
          <List.Item>
            After their second game in-play, the character may not be rewritten.
          </List.Item>
          <List.Item>
            Characters who make only superficial changes to their sheet, like
            attribute, skill or discipline dots may continue as the same
            character.
          </List.Item>
          <List.Item>
            If a player makes fundamental changes to the character during their
            rewrite, like their clan, they must pick a new name and function as
            a different character.
          </List.Item>
        </List.Root>
        <Text className="mt-4">
          To request a rewrite, reach out to an ST on the game discord. We will
          help you through the process.
        </Text>
      </Box>
      <Box className="page-section bottom-border">
        <SectionHeadingsCentered
          section_heading="Character Retirement"
          subsection_heading=""
        />
        <Text className="mb-4">
          Players may choose to Retire their character at any time. A player may
          do so because they have hit a natural conclusion to their character’s
          story, or because they want to try something new.
        </Text>
        <Text className="mb-4">
          If a player retires a character, they may create a new character per
          the Character Creation rules. The character’s XP, gear, boons, etc. do
          not carry over to the new character. A player may also opt to use a
          Pre-Generated character to hop right back into the game. The player
          should make an effort to alter their costuming and behavior to make it
          clear a new character is being portrayed.
        </Text>
        <Text className="mb-4">
          A new character created during a game this way will still be awarded
          10 XP for the game during which they are created, and will have an
          additional 5 bonus XP for each previous game of the chronicle. Season
          Pass characters will always be created at maximum chronicle XP.
        </Text>
      </Box>
      <Box className="page-section bottom-border">
        <MiniBanner
          src="/images/reawakening/character-advancement/bloody-hand.png"
          alt="Bloody Hand"
        />
        <SectionHeadingsCentered
          section_heading="Final Death"
          subsection_heading=""
        />
        <Text className="mb-4">
          Sometimes, characters die. It’s part of what makes the game fun &
          intense - there are stakes (sometimes, quite literally). Character
          Final Death may come at the hands of other players, NPCs, or as a
          result of the story.
        </Text>
        <Text className="mb-4">
          We encourage players to embrace character death as an opportunity to
          play a different concept, try something new, or engage in the story
          from a new perspective. When designing plots and antagonists, we try
          to balance character (and player) retention with the desire to create
          an engaging experience for everyone.
        </Text>
        <Text className="mb-4">
          If a player’s character dies, they may create a new character per the
          Character Creation rules. The character’s XP, gear, boons, etc. do not
          carry over to the new character. A player may also opt to use a
          Pre-Generated character to hop right back into the game. The player
          should make an effort to alter their costuming and behavior to make it
          clear a new character is being portrayed.
        </Text>
        <Text className="mb-4">
          A new character created during a game this way will still be awarded
          10 XP for the game during which they are created, and will have an
          additional 5 bonus XP for each previous game of the chronicle. Season
          Pass characters will always be created at maximum chronicle XP.
        </Text>
      </Box>
      <ReawakeningQuickLinks />
    </Box>
  );
}
