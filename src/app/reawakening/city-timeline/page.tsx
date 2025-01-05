import { Timeline } from "@/components/ui/timeline";
import { Box, Text } from "@chakra-ui/react";
import MiniBanner from "@/components/ui/mini-banner";
import Hero from "@/components/ui/hero";
import { StaticBreadcrumbs } from "@/components/ui/breadcrumbs";

const events = [
  {
    title: "Land Run",
    date: "April 22, 1889",
    description: (
      <>
        <Text className="mb-4">
          Oklahoma City is founded during the Land Run, with humans settling
          long-held Werewolf territory. While the Wolves were wary of settlers,
          they generally avoided open conflict while the humans’ claim on
          territory remained small.
        </Text>
        <Text className="mb-4">
          The Camarilla watches the budding city with interest, but remains
          patient - The risks of running afoul of Wolves remain too great for so
          small a gain.
        </Text>
      </>
    ),
  },
  {
    title: "Camarilla Founding",
    date: "December 11, 1907",
    description: (
      <>
        <Text className="mb-4">
          Rapid population growth in the area prompts the Camarilla to take
          action and lay claim on both blood and resources before the Sabbat. A
          contingent of Kindred is sent to tame the Werewolf population and
          establish a Praxis.
        </Text>{" "}
        <Text className="mb-4">
          Conflict with the Wolves over the next years is bloody, but heroes
          emerge - the Brujah <strong>Jonathan Gates</strong> being the most
          notable. Gates’ exploits earn him the nickname “The Lumberjack,” tales
          spreading of him chopping down wolves with a wood ax like they were
          trees.
        </Text>
        <Text className="mb-4">
          Eventually, things settle into a tense and uneasy stalemate, though
          border skirmishes continue to occasionally occur.
        </Text>
      </>
    ),
  },
  {
    title: "The War of Wolves & Swords",
    date: "July 18, 1928 – April 16, 1940",
    description: (
      <>
        <Text className="mb-4">
          With the discovery of oil in the city limits, Oklahoma City becomes a
          major hub of oil production and the mortal population grows to match.
          This unchecked growth, combined with the plundering of mother Gaia’s
          resources, enrages factions within the local Werewolf community.
        </Text>
        <Text className="mb-4">
          The Wolves know their numbers are small while the Kindred population
          is booming, and cooler heads reach out for negotiation. Tired of
          conflict and always eager to see the best in his enemies, Gates leads
          a small peace contingent of Kindred to negotiate with the Werewolves,
          and establish clear borders & guidelines on city growth.
        </Text>
        <Text className="mb-4">
          The Sabbat, however, sees an opportunity to destabilize the growing
          Camarlla government, as well as seize new territory. Tzimisce
          Paladin&nbsp;
          <strong>Jeanelle DeLight</strong> is assigned to the area with orders
          to overthrow the Camarilla.
        </Text>
        <Text className="mb-4">
          DeLight immediately sets to work forging an alliance and undermining
          peace talks. With the Paladin in the wolf leader’s ear, Gates cannot
          see the talks to a peaceful resolution. Conflict erupts between the
          local Camarilla and the combined might of the local wolves and the
          Sabbat.
        </Text>
        <Text className="mb-4">
          This sparks a forceful response from the Camarilla in nearby domains,
          asserting their force while the Sabbat were embroiled in civil war.
          The conflict escalates to neighboring states, with the Camarilla
          response believed in some circles to be a key factor in the end of the
          Second Sabbat Civil War with the adoption of the Code of Milan in
          1933.
        </Text>
        <Text className="mb-4">
          As conflict with the Sabbat grows elsewhere across the New World,
          Oklahoma City’s Camarilla domain is victorious by 1940. After years of
          conflict, Gates drives DeLight from the city and establishes an uneasy
          peace with the Werewolves. Clear territorial boundaries are
          established between the two parties.
        </Text>
        <Text className="mb-4">
          Tensions are high, but stability wins the day for the coming decades -
          though DeLight and the Sabbat will remain a presence in the
          surrounding areas.
        </Text>
      </>
    ),
  },
  {
    title: "The Archon’s Arrival",
    date: "September 3, 1945",
    description: (
      <>
        <Text className="mb-4">
          After continuing conflict with a unified Sabbat, the Camarilla is
          weakened by years of war. When the United States employs a nuclear
          attack during World War II, the Inner Circle takes notice. In
          response, the Malkavian Justicar dispatches{" "}
          <strong>Archon George Grenville</strong> to the territory of Oklahoma
          City.
        </Text>
        <Text className="mb-4">
          Fairly or unfairly, The Inner Circle sees decades of costly conflict
          with the Sabbat as originating in Oklahoma City. The Archon is sent
          with express orders to re-stabilize the area and ensure no further
          problems are created for the Camarilla.
        </Text>
        <Text className="mb-4">
          Over the next several decades, Grenville is a regular figure in local
          politics. The eye of the Justicariate is on Oklahoma City.
        </Text>
      </>
    ),
  },
  {
    title: "Change in the Camarilla",
    date: "2005 - 2018",
    description: (
      <>
        <Text className="mb-4">
          It is a period of disruption in the Ivory Tower. The Kindred computer
          & communications network ShreckNet is compromised by the Second
          Inquisition, a secret collective of government agencies and Hunter
          organizations. Kindred Elders also begin to succumb to the mysterious
          Beckoning, leaving their local domains to fight a holy war in the
          East.
        </Text>
        <Text className="mb-4">
          As The Inquisition grows bolder, Archon Grenville oversees Camarilla
          policies implemented banning technological communications (including
          mobile phones) and imposing restrictions on Clanless Kindred.
        </Text>
        <Text className="mb-4">
          The situation is tense, but productive. While the increasingly
          paranoid policies of the Camarilla chafe many (including the Prince of
          the city) they are effective. The Second Inquisition, while active in
          the area, isn’t able to act against the Kindred in Oklahoma City for
          more than a decade.
        </Text>
      </>
    ),
  },
  {
    title: "The Night of Fires",
    date: "March 1, 2018",
    description: (
      <>
        <Text className="mb-4">
          The Kindred of Oklahoma City are finally exposed to the Second
          Inquisition. A data leak exposes the havens of many notable Kindred in
          the city, along with the location of Elysium. Many power players,
          including the Prince and nearly the entire court, are staked and
          burned, and the Elysium is set to the torch.
        </Text>
        <Text className="mb-4">
          Evidence is produced that the Ventrue Ancilla{" "}
          <strong>Kenneth Lindsey</strong> is responsible. Forbidden electronic
          records are exposed, tied directly to Lindsey’s mortal business
          interests. Before the Prince meets her final death, a Blood Hunt is
          issued and Lindsey disappears - no bounty is ever claimed.
        </Text>
        <Text className="mb-4">
          Remaining Kindred either go into hiding or flee the city, and Oklahoma
          City falls into a period of time known colloquially as Torpor.
        </Text>
      </>
    ),
  },
  {
    title: "City in Torpor",
    date: "2018 - 2025",
    description: (
      <>
        <Text className="mb-4">
          Between the threat of Hunters and the eventual pandemic, Oklahoma City
          is calm - not dead, but not thriving. Kindred keep mostly to
          themselves and their Coteries. Interactions between Vampires are
          cautious, but mostly peaceful. With so much domain and so few Kindred
          left in the city, territory becomes effectively self-managed.
        </Text>
        <Text className="mb-4">
          Informal leaders emerge, but no Praxis is claimed and no formal
          gatherings are held.
        </Text>
        <Text className="mb-4">
          Kindred either learn to hide, or are tracked down by Hunters and
          killed. Even without a central authority to govern, Coteries manage
          between themselves. The Traditions are upheld - this is still a
          Camarilla city, after all.
        </Text>
        <Text className="mb-4">
          After a couple of years, the Second Inquisition presence in the city
          begins to fade. Hunters leave, and government agencies relax their
          surveillance. By 2021, the risk of heightened scrutiny has faded, but
          the Kindred of the city have grown used to their unique form of
          self-government.
        </Text>
      </>
    ),
  },
  {
    title: "Reawakening",
    date: "Present Night",
    description: (
      <>
        <Text className="mb-4">
          An invitation from the former Ventrue Primogen, Andrea Caldwell, is
          issued to all known Kindred in the city.
        </Text>
        <Text className="mb-4">
          The Sabbat has been rumored to have resumed operation in the area. A
          series of strange killings is prominent in mortal media in recent
          weeks - bodies exsanguinated and drained into a chalice. The traitor
          Kenneth Lindsey is still at large.
        </Text>
        <Text className="mb-4">
          The first formal court in seven years will be held on the anniversary
          of The Night of Fires, and a new Praxis will be established.
        </Text>
        <Text className="mb-4">
          The time has come for the Kindred of Oklahoma City to gather once
          again.
        </Text>
      </>
    ),
  },
];

export default function CityTimelinePage() {
  return (
    <>
      <Box className="bg-background">
        <Hero
          src="/images/city-timeline-banner.png"
          alt="Reawakening City Timeline"
        />
        <StaticBreadcrumbs
          routes={[
            { label: "Home", href: "/" },
            { label: "Reawakening", href: "/reawakening" },
            { label: "City Timeline", href: "#" },
          ]}
        />
        <Text className="mb-4 page-section">
          A territory carved violently from the dominion of both Werewolves and
          the Sabbat, Oklahoma City’s history is one of blood, sweat and
          unswerving loyalty to The Camarilla. Even after the Second Inquisition
          staked or burned the Prince and his court - leaving the city with no
          formal structure for several years - observance of The Traditions
          endures to this very night.
        </Text>
        <MiniBanner
          src="/images/walker-texas-vampire.png"
          alt="Walker, Texas Vampire"
        />
        <Timeline events={events} />
      </Box>
    </>
  );
}
