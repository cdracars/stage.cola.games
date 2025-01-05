"use client";

import { Box, Text } from "@chakra-ui/react";
import MiniBanner from "@/components/ui/mini-banner";
import CharacterProfile from "@/components/ui/character-profile";
import Hero from "@/components/ui/hero";
import { StaticBreadcrumbs } from "@/components/ui/breadcrumbs";

export default function SupportingCastPage() {
  return (
    <Box className="bg-background text-foreground">
      {/* Hero Section */}
      <Hero
        src="/images/supporting-cast-banner.png"
        alt="Reawakening Supporting Cast"
      />

      <StaticBreadcrumbs
        routes={[
          { label: "Home", href: "/" },
          { label: "Reawakening", href: "/reawakening" },
          { label: "Supporting Cast", href: "#" },
        ]}
      />

      {/* Main Content */}

      <Box className="page-section bottom-border">
        <Text className="mb-4">
          The following is a list of characters that have appeared in the
          Vampire: The Masquerade - Reawakening campaign.
        </Text>
        <MiniBanner src="/images/violin.png" alt="Violin" />
      </Box>

      <CharacterProfile
        name="Andrea Caldwell"
        title="The Prince"
        description={[
          <>
            The former Venture Primogen and one of the few court members to
            survive The Night of Fires, Andrea Caldwell is a city founder and
            was a steady presence in Oklahoma City before it fell into torpor.
          </>,
          <>
            Even as the city slept, Caldwell has maintained a network of Kindred
            contacts and favors. In mortal financial circles, Caldwell is most
            certainly a power behind the scenes - particularly in the oil and
            gas sectors.
          </>,
          <>
            Tonight, Caldwell has declared Praxis over the city, and has called
            the first formal court in nearly a decade.
          </>,
        ]}
      />
      <CharacterProfile
        name="Jeanelle DeLight"
        title="Sabbat Pack Leader"
        description={[
          <>
            No Kindred is responsible, directly or indirectly, for more Final
            Deaths in Oklahoma than the Tzimisce Jeanelle DeLight. Leader of the
            Sabbat’s operations in and around the city, she has instigated
            numerous conflicts with both Kindred and Werewolf alike.
          </>,
          <>
            While she was last active in the city well before the
            destabilization of the Sabbat, rumor has it she’s been seen within
            city limits in recent weeks.
          </>,
        ]}
      />
      <CharacterProfile
        name="Jonathan Gates"
        title="The Lumberjack"
        description={[
          <>
            Stalwart of the Camarilla since the city’s founding, Jonathan Gates
            is a Brujah and an unliving legend; a leader on and off the field of
            battle. Gates has distinguished himself in numerous conflicts
            against Werewolves and the Sabbat alike, earning himself the
            nickname “The Lumberjack” due to his deadly proficiency with a
            simple Wood Ax.
          </>,
          <>
            Gates is at his core an idealist. He has proven time and again to be
            a stalwart defender of the Traditions, and possesses an unusual
            attachment to his own humanity for a vampire of his age.
          </>,
        ]}
      />
      <CharacterProfile
        name="George Grenville"
        title="The Archon"
        description={[
          <>
            In service to the Malkavian Justicar, the esteemed Archon Grenville
            has been a regular presence in Oklahoma City since the 1940s. While
            Princes often chafe against the interference of the Justicariate in
            local affairs, Grenville has, inarguably, promoted peace, security
            and stability within the city.
          </>,
          <>
            The Archon left Oklahoma after The Night of Fires. While he has not
            yet returned to the city, to this night he serves Justicar Juliet
            Parr with loyalty and distinction.
          </>,
        ]}
      />
      <CharacterProfile
        name="Kenneth Lindsey"
        title="The Coward"
        description={[
          <>
            The Ventrue Kenneth Lindsey is under a blood hunt issued during The
            Night of Fires seven years ago. Betraying the location of Elysium,
            along with the identity of several court members, Kenneth pleaded
            innocence and has since gone to ground.
          </>,
          <>
            With the city fallen into Torpor and without a Prince, opinion is
            split on whether this Blood Hunt still stands. Hunted or no, many
            would still see Lindsey meet a sunrise for the death and disruption
            he has caused the Kindred of Oklahoma City.
          </>,
        ]}
      />
    </Box>
  );
}
