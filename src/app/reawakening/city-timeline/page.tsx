import { Timeline } from "@/components/ui/timeline";

const events = [
  {
    title: "Land Run",
    date: "April 22, 1889",
    description: (
      <>
        Oklahoma City is founded during the Land Run, with humans settling
        long-held Werewolf territory. While the Wolves were wary of settlers,
        they generally avoided open conflict while the humans’ claim on
        territory remained small.
      </>
    ),
  },
  {
    title: "Camarilla Founding",
    date: "December 11, 1907",
    description: (
      <>
        Rapid population growth in the area prompts the Camarilla to take action
        and lay claim on both blood and resources before the Sabbat. A
        contingent of Kindred is sent to tame the Werewolf population and
        establish a Praxis. Conflict with the Wolves over the next years is
        bloody, but heroes emerge – the Brujah <strong>Jonathan Gates</strong>{" "}
        being the most notable.
      </>
    ),
  },
  {
    title: "The War of Wolves & Swords",
    date: "July 18, 1928 – April 16, 1940",
    description: (
      <>
        With the discovery of oil in the city limits, Oklahoma City becomes a
        major hub of oil production, enraging factions within the local Werewolf
        community. Gates leads peace talks with the Werewolves, but the Sabbat
        destabilizes the talks, leading to years of bloody conflict. By 1940,
        the Camarilla is victorious, driving out the Sabbat and establishing
        clear territorial boundaries with the Werewolves.
      </>
    ),
  },
  {
    title: "The Archon’s Arrival",
    date: "September 3, 1945",
    description: (
      <>
        After years of conflict, the Camarilla dispatches{" "}
        <strong>Archon George Grenville</strong> to stabilize Oklahoma City.
        Grenville becomes a prominent figure in local politics, ensuring the
        area adheres to Camarilla policies.
      </>
    ),
  },
  {
    title: "The Night of Fires",
    date: "March 1, 2018",
    description: (
      <>
        The Second Inquisition exposes Oklahoma City’s Kindred population,
        resulting in the destruction of the Prince and her court. Kindred either
        flee, hide, or are hunted down. The city enters a period known as
        Torpor, with no formal gatherings or leadership.
      </>
    ),
  },
  {
    title: "Reawakening",
    date: "Present Night",
    description: (
      <>
        Former Ventrue Primogen Andrea Caldwell issues an invitation for the
        first formal court in seven years. The Kindred of Oklahoma City are
        called to gather and establish a new Praxis amidst rumors of Sabbat
        resurgence.
      </>
    ),
  },
];

export default function CityTimelinePage() {
  return (
    <div>
      <Timeline events={events} />
    </div>
  );
}
