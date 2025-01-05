"use client";

import { Box, Text } from "@chakra-ui/react";
import MiniBanner from "@/components/ui/mini-banner";
import SectionHeadingsCentered from "@/components/ui/section-headings-centered";
import LoresheetEntry from "@/components/ui/loresheet-entry";
import Hero from "@/components/ui/hero";
import { StaticBreadcrumbs } from "@/components/ui/breadcrumbs";

export default function SupportingCastPage() {
  return (
    <Box className="bg-background text-foreground page-section">
      {/* Hero Section */}
      <Hero
        src="/images/custom-loresheets-banner.png"
        alt="Custom Loresheets"
      />
      <StaticBreadcrumbs
        routes={[
          { label: "Home", href: "/" },
          { label: "Reawakening", href: "/reawakening" },
          { label: "Custom Loresheets", href: "#" },
        ]}
      />
      <Box className="page-section bottom-border">
        <MiniBanner src="/images/underpass.png" alt="Underpass" />
        <SectionHeadingsCentered
          section_heading="A City in Torpor"
          subsection_heading="Requirement: Active in the city sometime between 2018 and present night"
        />
        <Text className="mb-4">
          For the last seven years, Oklahoma City has had no traditional
          centralized government - no Prince, no Elysium, no Sheriff. Your
          character was a pivotal part in making this unique situation work,
          helping your fellow Kindred as a leader, mediator and protector of the
          traditions. Newly embraced Kindred may never have known a city under
          traditional Camarilla rule, but have gained proficiency in this “New
          Normal.
        </Text>

        <Text className="mb-4">
          This loresheet is ideal for new players, neonates and Kindred newer to
          the city.
        </Text>
        <LoresheetEntry
          name="Plead Ignorance"
          dots={1}
          description={
            <>
              You’ll certainly be forgiven if you don’t know all the rules quite
              yet - or if you’re particularly rusty in their application. Once
              per session, a minor breach of etiquette will be forgiven,
              assuming you’re contrite with an apology. Make your apology
              in-character, then use the Out of Character gesture (crossed
              fingers) to indicate “Lore sheet - please forgive and forget a
              minor transgression.” This could range from forgetting the
              Prince’s name to a breach of one of the court’s minor courtesies.
              This will not extend to major violations, such as a breach of the
              Traditions. This is meant as a safety net for new or returning
              players, not to excuse an intentionally rude or belligerent
              character. If there is a dispute, please engage a Storyteller to
              adjudicate.
            </>
          }
        />
        <LoresheetEntry
          name="Shared Resources"
          dots={2}
          description={
            <>
              During Oklahoma City’s Torpor, Kindred had to pool their resources
              to stay alive and undetected. Each session, gain access to either
              4 dots of temporary Haven or Herd backgrounds, reflecting access
              to a known safehouse or feeding territory. You may mix and match
              these 4 dots as you see fit (for example, claiming 3 dots of Herd
              and a 1 dot haven), and these temporary backgrounds may be used on
              behalf of other characters as normal. At the start of next
              session, you may reassign these 4 dots as you see fit.
            </>
          }
        />
        <LoresheetEntry
          name="Lay Low"
          dots={3}
          description={
            <>
              You’re used to avoiding notice, particularly from the Second
              Inquisition. If one of your downtime actions is invested to “Lay
              Low,” you may not be tracked or observed in your other Downtime
              activities that session by PCs or NPCs. Please note that this
              protection is not infinite - particularly attention-grabbing
              actions may still have repercussions, and may still be traced back
              to you through proper investigation. This protection does extend
              to other characters in joint downtime actions.
            </>
          }
        />
      </Box>

      <Box className="page-section bottom-border">
        <MiniBanner src="/images/founders.png" alt="Founders" />
        <SectionHeadingsCentered
          section_heading="Founders of Oklahoma City"
          subsection_heading="This loresheet is required to be a city founder in character background"
        />
        <Text className="mb-4">
          Your character was part of the original set of Kindred dispatched by
          the Camarilla to found the Tower presence in the city. Your reputation
          in town usually precedes you, though in recent nights many new Kindred
          have arrived who may not be as familiar with your standing.
        </Text>

        <Text className="mb-4">
          This loresheet is ideal for experienced players who enjoy setting
          history, lore, and being looked to as a veteran of city politics.
        </Text>
        <LoresheetEntry
          name="Trusted Advisor"
          dots={1}
          description={
            <>
              You are looked to for your counsel and leadership. Once per
              session, you may lend your advice to another Kindred in the city.
              It must be the player’s first game of the chronicle, and the
              character may not have this loresheet. That character is at a +0
              to all tests for the evening. This bonus does not stack if
              provided by multiple Founders.
            </>
          }
        />
        <LoresheetEntry
          name="A Fixture in Court"
          dots={2}
          description={
            <>
              You may never be denied access to official Camarilla gatherings
              regardless of your status with the Camarilla, though circumstances
              like a war or blood-hunt may make attendance particularly
              dangerous. In addition, gain 4 dots split as you choose between
              the Allies, Contacts, Haven and Resources backgrounds.
            </>
          }
        />
        <LoresheetEntry
          name="The City’s Memory"
          dots={3}
          description={
            <>
              You’ve seen just about everything that’s come to pass in the
              City’s history, and know the real story behind more than a few
              events. Once per session, ask a Storyteller to get the true story
              around one specific event in the city’s history from your
              character’s perspective. This isn’t omniscience, but an accurate
              assessment of the facts as your character understands them - free
              of political spin, legend, faulty memory or falsehood.
            </>
          }
        />
      </Box>
      <Box className="page-section bottom-border">
        {" "}
        <MiniBanner src="/images/roses.png" alt="Roses" />
        <SectionHeadingsCentered
          section_heading="Grenville, The Archon"
          subsection_heading="Requirement: Active in the city sometime between 1945 - 2018"
        />
        <Text className="mb-4">
          You’ve been a favorite resource for the Camarilla Archon, George
          Grenville - either as an agent, an informant, or both. You’ve gained
          some level of political protection and access to the Archon’s
          resources as a result. While some may view your actions as undermining
          the Praxis of the city, others view them as supporting the strength of
          the Tower as a whole.
        </Text>
        <Text className="mb-4">
          This loresheet is ideal for Camarilla loyalist characters and players
          interested in deadly intrigue, power struggles and political plot
          hooks - please note that it may be dangerous for your character to be
          seen as working at odds with the city’s Praxis. You’ve been warned.
        </Text>
        <LoresheetEntry
          name="Grenville’s Wealth"
          dots={1}
          description={
            <>
              Those who please the Archon are afforded certain courtesies. You
              gain 4 dots split as you choose between the Mask, Resources and
              Contacts backgrounds, reflecting compensation received for service
              to the Archon over the years.
            </>
          }
        />
        <LoresheetEntry
          name="Grenville’s Gratitude"
          dots={2}
          description={
            <>
              The Archon George Grenville owes you a Minor Boon - Spend it
              wisely. This level of the loresheet may only be taken at the time
              of character creation.
            </>
          }
        />
        <LoresheetEntry
          name="Grenville’s Patronage"
          dots={3}
          description={
            <>
              You are known as a Servire, a loyal servant to the Archon and the
              Justicariate. Your City Status may never drop below 2 dots. Your
              second dot carries the moniker “Servire to the Archon.” Only
              Archon Grenville himself may strip you of this Status dot and the
              associated title - so be sure to be attentive. Note that you may
              still be banished from the city by the Prince as normal.
            </>
          }
        />
      </Box>
      <Box className="page-section bottom-border">
        {" "}
        <MiniBanner src="/images/axe.png" alt="Axe" />
        <SectionHeadingsCentered
          section_heading="Jonathan Gates"
          subsection_heading=""
        />
        <Text className="mb-4">
          For the last seven years, Oklahoma City has had no traditional
          centralized government - no Prince, no Elysium, no Sheriff. Your
          character was a pivotal part in making this unique situation work,
          helping your fellow Kindred as a leader, mediator and protector of the
          traditions. Newly embraced Kindred may never have known a city under
          traditional Camarilla rule, but have gained proficiency in this “New
          Normal.
        </Text>
        <Text className="mb-4">
          This loresheet is ideal for experienced players who enjoy setting
          history, lore, and being looked to as a veteran of city politics.
        </Text>
        <LoresheetEntry
          name="Lead by Example"
          dots={1}
          description={
            <>
              You are inspired by the example Jonathan Gates has set for the
              Kindred of Oklahoma City. As long as your Humanity remains at 7 or
              higher and you have no existing stains, you may, once per session,
              turn a Bestial Failure into a normal failure, or a Messy Critical
              into a normal success. You may still suffer a stain, compulsion or
              other consequence reflecting guilt from what you were about to do,
              but you restrain your actions and any related fallout.
            </>
          }
        />
        <LoresheetEntry
          name="Circle of Trust"
          dots={2}
          description={
            <>
              {" "}
              Whether in combat or in court, you’ve earned Gates’ respect.{" "}
              <span className="text-brand-500">Once per Chronicle</span>, you
              may contact Gates to arrange a meeting. This doesn’t guarantee a
              long or helpful interaction (or even a positive one), but will
              allow you to get your foot in the door.
            </>
          }
        />
        <LoresheetEntry
          name="Honest Reputation"
          dots={3}
          description={
            <>
              Your reputation and Gates’ are intertwined.{" "}
              <span className="text-brand-500">Once per Chronicle</span>, you
              may negate a Status loss by using the Out of Character gesture
              (crossed fingers) and noting, “Negated - Lore Sheet: Honest
              Reputation.” In addition, once per session, if you give your word
              and are telling the honest and complete truth as your character
              understands it, NPCs and Player Characters alike will understand
              that your character is not lying. After your statement of truth,
              use the Out of Character gesture and indicate, “Lore Sheet, Honest
              Reputation - I guarantee my character is telling the truth as they
              understand it.”
            </>
          }
        />
      </Box>
    </Box>
  );
}
