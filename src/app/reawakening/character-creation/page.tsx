"use client";

import { Box, Heading, Text, List } from "@chakra-ui/react";
import MiniBanner from "@/components/ui/mini-banner";
import Blockquote from "@/components/ui/blockquote";
import ExternalLink from "@/components/ui/external-link";
import Link from "next/link";
import Hero from "@/components/ui/hero";
import { StaticBreadcrumbs } from "@/components/ui/breadcrumbs";

export default function CharacterCreationPage() {
  return (
    <Box className="bg-background text-foreground">
      {/* Hero Section */}
      <Hero
        src="/images/character-creation-banner.png"
        alt="Reawakening Character Creation"
      />

      <StaticBreadcrumbs
        routes={[
          { label: "Home", href: "/" },
          { label: "Reawakening", href: "/reawakening" },
          { label: "Character Creation", href: "#" },
        ]}
      />

      {/* Character Creation */}
      <Box className="page-section bottom-border">
        <Text className="mb-4">
          Character creation involves a few steps to ensure a balanced play
          environment and that your vampire is appropriate (and more
          importantly, enjoyable to play) in the game. We suggest you review the
          settings materials first, then jump in and start with a character
          concept!
        </Text>
        <Text className="mb-4">
          As a reminder, we are using the setting and rules contained within the
          latest version of
          <strong>Vampire: The Masquerade - Laws of the Night</strong> by&nbsp;
          <ExternalLink
            href="https://bynightstudios.com/products/laws-of-the-night-v5-softcover.html"
            text="By Night Studios"
          />
        </Text>
        <Text className="mb-4">
          If you&apos;re new to Vampire: The Masquerade, don’t worry! The
          character generation rules are available for free online, and our
          storytellers can help you with a concept.
        </Text>
        <Text className="mb-4">
          You can also choose to just buy a ticket and pick up a pre-generated
          character at the game itself!
        </Text>
        <Text className="mb-4">
          Please note that players will be limited to one character at a time
          during the chronicle. In order to create a new character, the previous
          character must meet final death or be retired - rules for advancement
          & replacement characters can be found&nbsp;
          <Link
            href="/reawakening/character-advancement"
            className="text-accent"
          >
            here
          </Link>
          .
        </Text>
        <MiniBanner
          src="/images/sunglasses.png"
          alt="Person Taking of Sunglasses"
        />
      </Box>

      {/* Discord Section */}
      <Box className="page-section bottom-border">
        <MiniBanner
          src="/images/step-1.png"
          alt="Step 1 Join Our Discord Server!"
        />
        <Text className="mb-4">
          Our Discord server is where you will connect with the game staff,
          storytellers and your fellow players!
        </Text>
        <Text className="mb-4">
          This is also where you&apos;ll get your character concept approved and
          will be able to forge in-character and out-of-character connections
          with other players.
        </Text>
        <List.Root className="space-y-2">
          <List.Item>
            <ExternalLink
              href="https://discord.gg/5p59HPmtYH"
              text="COLA Games Discord Server"
            />
          </List.Item>
        </List.Root>
        <MiniBanner src="/images/bright-rave.png" alt="Bright Rave" />
        <Text className="mb-4">
          As you develop your character and concept, we encourage you to reach
          out and forge blood ties (Sire & Childe of the same Clan), owe or be
          owed boons, or generate background connections with other chronicle
          characters.
        </Text>
      </Box>

      {/* Review Section */}
      <Box className="page-section bottom-border">
        <MiniBanner
          src="/images/step-2.png"
          alt="Step 2 Review Setting Materials"
        />
        <Text className="mb-4">
          We recommend you review the setting of Vampire: the Masquerade
          contained in the Laws of the Night rules. There is also a wealth of
          other resources that cover the setting, including the tabletop V:tM
          resources by Paradox Interactive.
        </Text>
        <Text className="mb-4">
          If you’re new to Vampire, don’t worry - our storytellers can help you
          refine your concept, or understand any questions you have about the
          setting.
        </Text>
        <Text className="mb-4">
          There are some unique circumstances in Oklahoma City these nights,
          involving some city history and notable characters.
        </Text>
        <List.Root className="space-y-2">
          <List.Item>
            Review the vampire history of Oklahoma City here -&nbsp;
            <Link href="/reawakening/city-timeline" className="text-accent">
              City Timeline
            </Link>
          </List.Item>
          <List.Item>
            Notable Non-Player Characters can be found here -&nbsp;
            <Link href="/reawakening/supporting-cast" className="text-accent">
              Supporting Cast
            </Link>
          </List.Item>
        </List.Root>
        <MiniBanner
          src="/images/okc-street-at-night.png"
          alt="Oklahoma City Street at Night"
        />
      </Box>

      {/* Concept Approval Section */}
      <Box className="page-section bottom-border">
        <MiniBanner
          src="/images/step-3.png"
          alt="Step 3 Get Your Concept Approved"
        />
        <Text className="mb-4">
          In order to save players and storytellers time writing, re-writing and
          refining completely “statted-out” characters, we ask that players
          submit their character concepts in advance in the “Character Concepts”
          channel of our Discord server. This allows us to help you refine any
          concepts that may be inappropriate or unfun to play for the planned
          Chronicle.
        </Text>
        <Text className="mb-4">
          Your character concept is a short description of your character’s
          Clan, their history in Oklahoma City, and any information other
          characters would know. It shouldn’t be any longer than a few sentences
          covering their background, where they’re starting the chronicle and
          how you intend to play them.
        </Text>
        <Blockquote
          heading="Example:"
          text="Vincent Marcus Pyre is an ambitious Ventrue aristocrat who has been playing politics in Oklahoma City since his embrace in the 1930s. The son of an oil baron, he impressed his Sire with the way he managed his family fortune. He fled the city after the Night of Fires, barely escaping a hunter’s stake. Tonight, Pyre is a shadow investor, living the high life and playing the stock market through mortal proxies. Returning to the city at Prince Caldwell’s summons, Pyre is looking to land a prestigious court appointment - possibly even Seneschal."
        />
        <Heading className="text-brand-500">
          A note for newer Vampire players
        </Heading>
        <Text className="mb-4">
          Paradox Interactive has a great reference for the Vampire Clans{" "}
          <ExternalLink
            href="https://www.paradoxinteractive.com/games/world-of-darkness/discover-world-of-darkness/vampire-the-masquerade/clans"
            text="here"
          />
          . Some rules for the Tabletop are a little different than for live
          action, but this is a good starting point for building out a character
          concept!
        </Text>
        <Heading className="text-brand-500">
          A note for experienced Vampire players
        </Heading>
        <Text className="mb-4">
          Reawakening is designed as an entry point for newer players, so some
          character & clan options will be more limited than you may be used to.
          This is to provide the best possible experience for a newer Vampire
          player and maximize character ties within the played clans.
        </Text>
        <MiniBanner
          src="/images/young-lady-neon-backlit.png"
          alt="Young lady neon backlit"
        />
        <Box className="page-section-alt">
          <Heading className="text-inherit text-2xl mb-4 font-bold font-della text-center">
            Character Concept Guidelines
          </Heading>
          <List.Root className="space-y-2 list-disc">
            <List.Item>
              All characters must be Camarilla loyal at the time of creation.
            </List.Item>
            <List.Item>
              Characters may not be older than 250 years since mortal birth -
              most older Kindred have already succumbed to The Beckoning.
            </List.Item>
            <List.Item>
              Reawakening will have a primarily social, political and
              investigation focus. Combat characters are certainly welcome, but
              opportunities for combat may be limited so be sure to have other
              facets for the character to explore.
            </List.Item>
            <List.Item>
              As of the current edition, the Brujah and Gangrel clans have left
              the Camarilla. Individual members may still remain loyal to the
              Tower as outsiders to their clans.
            </List.Item>
            <List.Item>
              As of the current edition, the Banu Haqim and Lasombra clans are
              members of the Camarilla.
            </List.Item>
            <List.Item>
              Banu Haqim concepts will face some light additional scrutiny due
              to the cultural implications of previous editions. In modern
              nights, Banu Haqim characters can be embraced from any creed or
              culture - your character concept should not engage in
              inappropriate cultural appropriation or stereotype.
            </List.Item>
            <List.Item className="pt-6">
              The following character types are all <strong>ALLOWED</strong> for
              Player Characters:
            </List.Item>
            <List.Root className="pl-12">
              <List.Item>Banu Haqim (with Storyteller approval)</List.Item>
              <List.Item>Brujah (as a clan outsider)</List.Item>
              <List.Item>Gangrel (as a clan outsider)</List.Item>
              <List.Item>Lasombra</List.Item>
              <List.Item>Malkavian</List.Item>
              <List.Item>Nosferatu</List.Item>
              <List.Item>Toreador</List.Item>
              <List.Item>Tremere</List.Item>
              <List.Item>Ventrue</List.Item>
              <List.Item>Caitiff</List.Item>
              <List.Item>Ghouls (with PC regnant)</List.Item>
            </List.Root>

            <List.Item className="pt-6">
              The following character types are <strong>NOT ALLOWED</strong>:
            </List.Item>
            <List.Root className="pl-12">
              <List.Item>Hecata</List.Item>
              <List.Item>The Ministry</List.Item>
              <List.Item>Ravnos</List.Item>
              <List.Item>Salubri</List.Item>
              <List.Item>Tzimisce</List.Item>
              <List.Item>Thin-Bloods</List.Item>
              <List.Item>non-ghouled mortals</List.Item>
            </List.Root>
          </List.Root>
        </Box>
        <Text className="mt-4">
          Once approved by a storyteller, we can move on to figuring out your
          character’s attributes, abilities and powers!
        </Text>
      </Box>

      {/* Character Creation Section */}
      <Box className="page-section bottom-border">
        <MiniBanner src="/images/step-4.png" alt="Step 4 Character Creation" />
        <Text className="mb-4">
          You can use the following link to access the Character Creation form -
          completing this form will submit your character for addition to our
          database. Please also review the Chronicle Tenets, Initial XP and
          custom mechanics information below.
        </Text>
        <ExternalLink
          href="https://forms.office.com/r/58Mi2uW59e"
          text="Reawakening character Creation form (Vampire)"
          className="mb-4 text-brand-500"
        />
        <Text className="mb-4">
          Create your character using the Vampire: The Masquerade Laws of the
          Night rules by By Night Studios. If you don’t have the book, By Night
          Studios has created an online resource database for character
          creation! We’ve included the links below:
        </Text>
        <List.Root className="space-y-2 mb-4">
          <List.Item>
            <ExternalLink
              href="https://lawsofthenight.com/srd/character-creation/"
              text="Character Creation Overview"
            />
          </List.Item>
          <List.Item>
            <ExternalLink
              href="https://lawsofthenight.com/srd-tag/backgrounds/"
              text="Backgrounds"
            />
          </List.Item>
          <List.Item>
            <ExternalLink
              href="https://lawsofthenight.com/srd-tag/merits-and-flaws/"
              text="Merits & Flaws"
            />
          </List.Item>
          <List.Item>
            <ExternalLink
              href="https://lawsofthenight.com/srd-tag/disciplines/"
              text="Disciplines"
            />
          </List.Item>
        </List.Root>
        <Text className="mb-4">
          <strong>Note:</strong> Please be aware this SRD is new, and some of
          the formatting is a little off - with that said, all of the game rules
          are available to us here for free. Please also consider buying a copy
          of the rulebook to support the studio and their effort in development
          of this ruleset.
        </Text>
        <MiniBanner
          src="/images/elegant-woman-hotel.png"
          alt="Character Creation"
        />
        <Heading className="subheading !text-inherit">Chronicle Tenets</Heading>
        <Text className="mb-4">
          These are the Chronicle Tenets for characters in Reawakening. The game
          rules will refer to these tenets regularly, as they will impact your
          character’s struggle between Humanity and their inner Beast - and
          their descent into becoming less human and more monster.
        </Text>
        <List.Root className="space-y-2 list-disc pl-12 mb-4">
          <List.Item>Do not kill, except in self-defense.</List.Item>
          <List.Item>Do not harm the innocent.</List.Item>
          <List.Item>Act like a person, not a beast.</List.Item>
        </List.Root>
        <Heading className="subheading !text-inherit">Character Goals</Heading>
        <Text className="mb-4">
          We are adding two elements to your character you’ll need in order to
          play: an Ambition & a Desire.
        </Text>
        <Text className="mb-4">
          <strong>Ambitions</strong> are long-term goals that may take the
          entire chronicle, or longer, to complete - or might not even be
          intended to be completed in play. An ambition helps provide an overall
          drive to a character’s actions.
        </Text>
        <Blockquote
          heading="Example Ambitions"
          text={
            <List.Root className="space-y-2">
              <List.Item>Find your long-lost sire</List.Item>
              <List.Item>Establish Praxis over Oklahoma City</List.Item>
              <List.Item>
                Recover a precious, centuries old item from your character’s
                mortal life
              </List.Item>
            </List.Root>
          }
        />
        <Text className="mb-4">
          <strong>Desires</strong> are short-term goals that might be
          accomplished in a single game, or over the course of a couple
          sessions. Your desire may or may not be related to your Ambition, and
          may regularly change
        </Text>
        <Blockquote
          heading="Example Desires"
          text={
            <List.Root className="space-y-2">
              <List.Item>Look into those ghost sightings downtown</List.Item>
              <List.Item>Get out of hot water with the Sheriff</List.Item>
              <List.Item>Earn an appointment to a court position</List.Item>
            </List.Root>
          }
        />
        <Text className="mb-4">
          Goals like these will help tie your character into the world and drive
          proactive character action and interaction during play.
        </Text>
        <Heading className="subheading !text-inherit">
          Character Loresheets
        </Heading>
        <Text className="mb-4">
          There are some themes and characters important to our chronicle.
          We&apos;ve chosen to reflect these using custom Loresheets! You can
          choose to take one of these Loresheets instead of the ones in the core
          rules.
        </Text>
        <Text className="mb-4">
          These are a great way to establish your character with ties to our
          setting and supporting cast. Please remember you can only have one
          Loresheet associated with your character.
        </Text>
        <List.Root className="space-y-2 text-inherit font-bold list-disc pl-12 mb-4">
          <List.Item>A City in Torpor</List.Item>
          <List.Item>Founders of Oklahoma City</List.Item>
          <List.Item>Grenville, the Archon</List.Item>
          <List.Item>Jonathan Gates</List.Item>
        </List.Root>
        <Text className="mb-4">
          The full mechanics for these loresheets can be found here -{" "}
          <Link href="/reawakening/custom-loresheets" className="text-accent">
            Custom Loresheets
          </Link>
        </Text>
        <Heading className="subheading !text-inherit">Initial XP</Heading>
        <Text className="mb-4">
          Your character will start with 20 Initial XP per the core rules (p.
          96), but will also have some additional XP for already completed
          games. This extra XP is to help characters joining mid-chronicle keep
          pace. You will also gain some additional XP upon the purchase of your
          Event Ticket or Season Pass.
        </Text>
        <Blockquote
          heading="Initial XP - Individual Event Ticket"
          text={
            <List.Root className="space-y-2">
              <List.Item>20 XP per the Core Rules (p. 96)</List.Item>
              <List.Item>
                5 bonus XP per already completed game of the chronicle
              </List.Item>
              <List.Item>
                An additional 10 XP upon purchase of a ticket for the upcoming
                game
              </List.Item>
            </List.Root>
          }
        />
        <Text className="mb-4">
          This means after ticket purchase, a character will typically start
          with a total of 30 xp plus an additional 5 per completed game of the
          chronicle.
        </Text>
        <Blockquote
          heading="Initial XP - Season Pass"
          text={
            <List.Root className="space-y-2">
              <List.Item>20 XP per the Core Rules (p. 96)</List.Item>
              <List.Item>
                10 XP per already completed game of the chronicle
              </List.Item>
              <List.Item>
                An additional 10 XP, reflecting the experience award for the
                upcoming game
              </List.Item>
            </List.Root>
          }
        />
        <Text className="mb-4">
          This means after ticket purchase, a character will typically start
          with a total of 30 xp plus an additional 10 per completed game of the
          chronicle.
        </Text>
        <Text className="mb-4">
          Once you’re done, <strong>let us know</strong> and we’ll take a look
          to make sure the character is set up correctly in the database.
        </Text>
        <MiniBanner src="/images/man-in-suit.png" alt="Character Creation" />
      </Box>

      {/* Pick a Ticket Section */}
      <Box className="page-section bottom-border">
        <MiniBanner src="/images/step-5.png" alt="Step 5 Pick a Ticket" />
        <Text className="mb-4">
          You can purchase a ticket for the next Reawakening game&nbsp;
          <ExternalLink
            href="https://www.eventbrite.com/e/reawakening-tickets-166366073287"
            text="here"
          />
          . Tickets are $25 per event, or you can purchase a Season Pass for
          $100.
        </Text>
        <MiniBanner src="/images/velvet-rope.png" alt="Velvet Rope" />
        <Blockquote
          heading="Individual Event Ticket"
          text={
            <List.Root className="space-y-2">
              <List.Item>
                Attendance for the upcoming Reawakening game
              </List.Item>
              <List.Item>+10 Character XP</List.Item>
            </List.Root>
          }
        />
        <Blockquote
          heading="Season Pass"
          text={
            <List.Root className="space-y-2">
              <List.Item>Attendance for all Reawakening games</List.Item>
              <List.Item>
                Automatic XP progression for the upcoming game
              </List.Item>
              <List.Item>Full XP buyback</List.Item>
              <List.Item>Full XP on replacement characters</List.Item>
              <List.Item>
                Access to all levels of one Out-of-Clan Discipline without the
                requirement of feeding from a vampire who already possesses that
                Discipline.
              </List.Item>
              <List.Root className="pl-12">
                <List.Item>
                  This only grants access to all levels of a single Discipline,
                  chosen at the time of purchase of the first dot.
                </List.Item>{" "}
                <List.Item>
                  Dots in this Discipline are purchased at normal Out-of-Clan
                  costs.
                </List.Item>{" "}
                <List.Item>
                  This does not remove the downtime action requirement.
                </List.Item>
                <List.Item>
                  This cannot provide access to Blood Sorcery or Oblivion.
                </List.Item>{" "}
              </List.Root>
            </List.Root>
          }
        />
      </Box>

      {/* See you at game section */}
      <Box className="page-section">
        <MiniBanner
          src="/images/step-6.png"
          alt="Step 6 We Will See You at Game..."
        />
        <MiniBanner src="/images/vampire-eyes.png" alt="Vampire Eyes" />
        <Text className="mb-4">
          We can’t wait to share our chronicle with you, and see what stories
          you and your fellow players tell. As the Chronicle progresses, your
          character’s skills and abilities will grow as you gain XP.{" "}
        </Text>
        <Text className="mb-4">
          You can take a look at the rules for character advancement here -{" "}
          <Link href="/advancement" className="text-accent">
            Character Advancement
          </Link>
          .
        </Text>
      </Box>
    </Box>
  );
}
