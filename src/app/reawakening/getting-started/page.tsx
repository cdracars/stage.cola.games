"use client";

import { Box, Heading, Text, List } from "@chakra-ui/react";
import Link from "next/link";
import MiniBanner from "@/components/ui/mini-banner";
import Hero from "@/components/ui/hero";
import { StaticBreadcrumbs } from "@/components/ui/breadcrumbs";
import Blockquote from "@/components/ui/blockquote";
import ReawakeningQuickLinks from "@/components/sections/reawakening-quick-nav-section";

export default function ReawakeningChroniclePage() {
  return (
    <Box className="bg-gray-900 text-gray-300">
      {/* Hero Section */}
      <Hero
        src="/images/reawakening/getting-started/reawakening-getting-started-banner.png"
        alt="Reawakening Getting Started"
      />

      <StaticBreadcrumbs
        routes={[
          { label: "Home", href: "/" },
          { label: "Reawakening", href: "/reawakening" },
          { label: "Getting Started", href: "#" },
        ]}
      />

      <MiniBanner
        src="/images/reawakening/getting-started/reawakening-about-out-chronicle.png"
        alt="About out chronicle"
      />

      <MiniBanner
        src="/images/reawakening/getting-started/okc-at-night.png"
        alt="Reawakening Event Banner"
      />

      {/* About Section */}
      <Box className="page-section bottom-border">
        <Text className="mb-4">
          Reawakening is a 6-part live-action roleplaying experience, using the
          Vampire: The Masquerade setting and rules. In Vampire: The Masquerade,
          players take on the role of vampires vying for survival and control in
          a world like our own - but with a dark and supernatural twist.
        </Text>
        <Text className="mb-4">
          The chronicle will focus on the politics and factions of an alternate
          Oklahoma City re-emerging from a period of political stasis. In this
          setting, the vampire community was driven into deep hiding seven years
          ago by the hunters of the Second Inquisition. The first game will take
          place on the night of the characters’ first formal court session in
          the better part of a decade.
        </Text>
        <Text className="mb-4">
          In that period of stasis, a lot may have happened. New Kindred
          (vampires’ word for themselves) may have entered the city or been
          created. Older, more experienced vampires may be returning after
          fleeing the city. New connections, alliances and rivalries may have
          been formed. The current political situation will allow every player
          to start on even footing - whether they’re portraying a long-time
          member of the city or a newly-embraced vampire.
        </Text>
        <Text className="mb-4">
          Players will portray their characters in live-action, costuming,
          conversing and moving about the play space as their characters would.
          In order to make sure this is a good experience for yourself and your
          fellow players, please review our content and safety guidelines below.
        </Text>
      </Box>
      <MiniBanner
        src="/images/reawakening/getting-started/lines-and-veils.png"
        alt="Reawakening Event Banner"
      />
      <Box className="page-section">
        <Text className="mb-4">
          We know discussion of these topics can be uncomfortable for some, but
          we are including some explanation and nuance here to make sure
          everyone is on the same page and we can maintain a safe and enjoyable
          play-space for everyone.
        </Text>
      </Box>
      <MiniBanner
        src="/images/reawakening/getting-started/veil.png"
        alt="Reawakening Event Banner"
      />

      <Box className="page-section">
        <Text className="mb-4">
          <Heading className="section-heading">Chronicle Content</Heading>
          Vampire: The Masquerade takes place in a darker, supernatural version
          of our own world, and deals regularly with mature real-world subject
          matter like crime, sex, violence, drug and alcohol use or death within
          the game fiction.
        </Text>
        <Text className="mb-4">
          Supernatural content includes horror elements such as blood or gore,
          or elements common to vampire fiction such as drinking the blood of
          the unwilling, mind-control, unhealthy or supernaturally dependent
          relationships, political manipulation and the trade of mortals as
          feeding stock.
        </Text>
        <Text className="mb-4">
          Vampire games also contain a political element that may bring player
          characters into social, political or physical conflict with one
          another.
        </Text>
        <Text className="mb-4">
          Please always remember that your fellow players aren&apos;t your
          enemy, even if your characters come into conflict. Take advantage of
          game intermission and social time after game to check in with your
          fellow players, introduce yourself and let them know you&apos;re not a
          real monster - you just play one in the game.
        </Text>
      </Box>

      <Box className="page-section">
        <Heading className="section-heading">Chronicle Lines</Heading>
        <Text className="mb-4">
          <strong>
            The following subject matter is{" "}
            <span className="text-brand-500">NOT ALLOWED</span>, and will not be
            explored in-game
          </strong>{" "}
          or in communication channels by Storytellers or by players, including
          in character backgrounds:
        </Text>
        <Blockquote
          text={
            <List.Root className="list-disc list-inside space-y-2 font-marcellus marker:text-brand-500">
              <List.Item>
                <span className="text-white font-bold">
                  Sexual assault of any kind
                </span>
                <br />
                Please be aware that some Vampires may seduce mortals to feed,
                but any resulting sexual activity must always be consensual and
                will observe a “fade to black” rule (see below).
              </List.Item>
              <List.Item>
                <span className="text-white font-bold">
                  Behavior or concepts involving real-world hate movements,
                  race-based slavery or discrimination based on sex, race,
                  religion, gender identity or sexual orientation
                </span>
                <br />
                Vampires don’t care about these things any longer, though they
                may definitely still have discriminatory views on other
                characters’ clans, backgrounds, social standing, etc. We
                understand that vampires are long-lived, and history is full of
                examples of this kind of bigotry, but hatred should never be
                central to a character’s concept or background.
              </List.Item>
            </List.Root>
          }
        />
      </Box>
      <Box className="page-section bottom-border">
        <Heading className="section-heading">Chronicle Veils</Heading>
        <Text className="mb-4">
          <strong>
            The following subject matter may occur in-game, but will involve a{" "}
            <span className="text-brand-500">FADE TO BLACK</span>
          </strong>
          . This means that detailed roleplay of the following will not occur at
          game or in official communication channels, as these sorts of scenes
          may become uncomfortable for many players:
        </Text>
        <Blockquote
          text={
            <List.Root className="list-disc list-inside space-y-2 font-marcellus marker:text-brand-500">
              <List.Item>Detailed description of sexual encounters</List.Item>
              <List.Item>
                Intense scenes of violence, such as torture, excessive gore,
                etc.
              </List.Item>
              <List.Item>
                Other intense or graphic content as determined by the
                participants or storyteller in the scene.
              </List.Item>
            </List.Root>
          }
        />
      </Box>

      {/* Safety Rules Section */}
      <Box className="page-section">
        <MiniBanner
          src="/images/reawakening/getting-started/safety-rules.png"
          alt="Reawakening Event Banner"
        />
        <Text className="mb-4">
          At COLA games, our goal is to provide an immersive and safe space for
          players to create engaging experiences, stories and moments they will
          remember for years to come. In the interest of doing so, there are a
          few rules to keep Reawakening enjoyable for everyone.
        </Text>
        <Blockquote
          text={
            <List.Root
              listStyleType="decimal"
              className="list-disc list-inside space-y-4"
            >
              <List.Item>
                <strong>No touching without permission</strong> - No player
                should engage in actual physical roleplay with another player
                without their express consent. Simply use the out-of-character
                gesture (crossed fingers) and ask, “Do you mind if I (action
                here)?” Please make sure requests are respectful, and also
                respect the player’s answer when given.
              </List.Item>
              <List.Item>
                <strong>
                  Absolutely no overtly sexual, violent or dangerous
                  out-of-character action is allowed (actual fighting, sex acts,
                  biting, drawing blood, etc.),{" "}
                  <strong>even with consent</strong> - Actions of this kind will
                  result in immediate ejection from the event.
                </strong>
              </List.Item>
              <List.Item>
                <strong>No weapons or weapon props</strong> - Even weapon props
                can often be mistaken for the real thing. In order to ensure our
                players, staff and hosts all feel safe, weapons and weapon props
                are not allowed at game.
              </List.Item>
              <List.Item>
                <strong>No alcohol or recreational drug use</strong> - This
                includes arrival to the event visibly intoxicated. Intoxicated
                players will be asked to leave the event.
              </List.Item>
              <List.Item>
                <strong>No minors</strong> - Due to the mature themes of
                Vampire: the Masquerade, nobody under the age of 18 years will
                be allowed at game.
              </List.Item>
              <List.Item>
                <strong>Use the safety tools at game</strong> - Before the game,
                our staff will explain our check-in system and any safety tools
                in use for that game, as well as cover where out-of-character
                decompression spaces are located. We will also print out copies
                of the safety tools to reference at game. Please take note and
                make use of these.
              </List.Item>
              <List.Item>
                <strong>No other antisocial or disruptive behavior</strong> -
                This is to catch any additional behavior with a negative impact
                to the game or its players not otherwise covered here. Our game
                staff will be the sole arbiters of inappropriate behavior. Long
                story short, please just try to be a cool human being.
              </List.Item>
            </List.Root>
          }
        />
      </Box>

      {/* Call to Action */}
      <Box className="pb-16 text-center">
        <MiniBanner
          src="/images/reawakening/getting-started/handshake.png"
          alt="Call to Action"
        />
        <Link href="/reawakening/character-creation" className="text-link">
          Character Creation
        </Link>
      </Box>
      <ReawakeningQuickLinks />
    </Box>
  );
}
