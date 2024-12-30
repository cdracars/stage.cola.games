import Section from "@/components/ui/section";

export default function AboutSection() {
  return (
    <Section title="Who are we?">
      <p>
        Central Oklahoma Live Action Games (or COLA Games, for short) is a club
        of tabletop and live-action gamers looking to evolve and grow the hobby
        of live-action roleplay in the central Oklahoma area.
      </p>
      <p>
        Leveraging nearly a combined century as players and hosts of live-action
        experiences, we look to put on immersive and engaging events for both
        experienced players and those new to the hobby.
      </p>
      <p>
        <a href="/reawakening" className="text-brand-400 underline">
          Click here
        </a>{" "}
        to explore our upcoming premier Vampire: The Masquerade event,
        <strong> Reawakening</strong>, and stay tuned for further events in the
        central Oklahoma area.
      </p>
    </Section>
  );
}
