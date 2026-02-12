import Image from "next/image";
import Link from "next/link";
import {
  Della_Respira,
  Overlock_SC,
  Uncial_Antiqua,
} from "next/font/google";

const dellaRespira = Della_Respira({
  subsets: ["latin"],
  weight: "400",
});

const overlockSC = Overlock_SC({
  subsets: ["latin"],
  weight: "400",
});

const uncialAntiqua = Uncial_Antiqua({
  subsets: ["latin"],
  weight: "400",
});

const steps = [
  {
    title: "Step 1 • Join our Discord Server",
    body: (
      <>
        <p>
          Our Discord server is where you&apos;ll connect with storytellers and fellow
          players, get your concept approved, and build in- and out-of-character
          ties.
        </p>
        <p className="font-semibold mt-2">
          COLA Games Discord Server
        </p>
      </>
    ),
    image: "/images/CRoS/Step%201.png",
  },
  {
    title: "Step 2 • Review the Setting",
    body: (
      <>
        <p>
          We recommend you review Changeling: The Dreaming in the Minds Eye
          Theater rules. If you&apos;re new, storytellers can help refine your concept
          and answer questions.
        </p>
        <p>
          There are unique Oklahoma details — kingdom history and notable NPCs —
          to ground your character.
        </p>
        <p className="mt-2">
          <Link
            href="/a-crown-of-storms/chronicle-setting"
            className="text-[#e69138] underline"
          >
            Review the local setting &amp; NPCs
          </Link>
        </p>
      </>
    ),
    image: "/images/CRoS/Step%202.png",
  },
  {
    title: "Step 3 • Concept Approval",
    body: (
      <>
        <p>
          Submit a short concept in the Discord <em>Character Concepts</em>
          channel. Include kith &amp; court, history in Oklahoma, duchy, and what
          others would know. A few sentences are plenty.
        </p>
        <p className="mt-2 font-semibold">Example:</p>
        <p className="italic">
          Bertie Goodhollow is a Seelie Ghillie Dhu who has been in the Duchy of
          Singing Grass as long as anyone can remember. He&apos;s a farmer north of
          town—a friend to responsible farmers and an enemy to anyone who would
          trample nature for profit.
        </p>
        <p className="mt-2">
          New to Changeling? Staff can help — reach out in Discord.
        </p>
        <ul className="list-disc list-inside space-y-1 mt-3">
          <li>Seelie or Unseelie only (no Shadow Court PCs).</li>
          <li>All characters must be 18+ (Foundlings experienced Chrysalis later).</li>
          <li>
            Chronicle focus: social, investigation, adventure, light politics —
            build with that in mind.
          </li>
        </ul>
      </>
    ),
    image: "/images/CRoS/Step%203.png",
  },
  {
    title: "Step 4 • Character Creation",
    body: (
      <>
        <p>
          Use the Minds Eye Theater: Changeling the Dreaming rules. If you don&apos;t
          have the book, use our interactive guide.
        </p>
        <p className="mt-2">
          Fill out your sheet, then email it to{" "}
          <a
            href="mailto:staff@cola.games"
            className="text-[#e69138] underline"
          >
            staff@cola.games
          </a>{" "}
          so we can enter it into our database.
        </p>
        <p className="mt-2">
          Review Initial XP and Custom Mechanics — some options work differently
          in this chronicle. The Custom Mechanics page also covers Treasures &
          Curios rules for this chronicle.
        </p>
        <p className="mt-2 font-semibold">
          <a
            href="https://docs.google.com/document/"
            className="text-[#e69138] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            A Crown of Storms: Character Creation Resources &amp; Rules
          </a>{" "}
          (live Google Doc for updates)
        </p>
        <p className="mt-2">
          Read the{" "}
          <Link
            href="/a-crown-of-storms/custom-mechanics"
            className="text-[#f1c232] underline"
          >
            Custom Mechanics
          </Link>{" "}
          for how Treasures &amp; Curios work in play.
        </p>
        <p className="mt-2">
          You may also buy a ticket and play a pre-generated character at game.
        </p>
      </>
    ),
    image: "/images/CRoS/Step%204.png",
  },
  {
    title: "Step 5 • Pick Your Game",
    body: (
      <>
        <p>
          This two-part mini-chronicle lets you shape a revolution across the
          Duchies of Storms. Attend any games you like — every appearance matters.
        </p>
        <div className="space-y-2 mt-3">
          <p className="font-semibold">Act I — The Duchies of Storms</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              The Princess of Stillwater — <strong>Mar 28</strong>, 9:30 AM–4:00 PM,
              Stillwater Public Library (FREE)
            </li>
            <li>
              The Knight of Tulsa — <strong>Apr 11</strong>, 2:30 PM–10:00 PM,
              Clare Michael Event Space, Tulsa ($20)
            </li>
            <li>
              The Spymaster of Oklahoma City — <strong>Apr 25</strong>, 4:00 PM–11:30 PM,
              Memorial Park Cemetery Historic Chapel, OKC ($20)
            </li>
          </ul>
          <p className="font-semibold mt-2">Act II — Finale</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              The Shadow Queen of Oklahoma — <strong>May 16</strong>, 12:30 PM–10:00 PM,
              The Ivy Event Space, Sperry ($30)
            </li>
          </ul>
        </div>
        <p className="mt-3">
          Tickets &amp; registration live on the{" "}
          <Link href="/events" className="text-[#e69138] underline">
            COLA Games Events page
          </Link>
          .
        </p>
      </>
    ),
    image: "/images/CRoS/Step%205.png",
  },
  {
    title: "Step 6 • We’ll See You There!",
    body: (
      <>
        <p>
          Bring your curiosity, your Glamour, and your best stories. We can’t wait
          to see what you create together.
        </p>
        <p className="mt-2">
          Need help? Ping storytellers in Discord or email{" "}
          <a
            href="mailto:staff@cola.games"
            className="text-[#e69138] underline"
          >
            staff@cola.games
          </a>
          .
        </p>
      </>
    ),
    image: "/images/CRoS/Step%206.png",
  },
];

export default function ACrownOfStormsCharacterCreationPage() {
  return (
    <div
      className="min-h-screen w-full"
      style={{ backgroundColor: "#1e1432", color: "#ffffff" }}
    >
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">
        <header className="space-y-4 text-center">
          <Image
            src="/images/CRoS/Character%20Creation.png"
            alt="A Crown of Storms character creation"
            width={1600}
            height={900}
            className="w-full max-w-3xl mx-auto rounded-md shadow-2xl"
            priority
          />
          <p
            className={`${uncialAntiqua.className}`}
            style={{ fontSize: "23px", color: "#f1c232" }}
          >
            Character Creation
          </p>
          <p className={`${dellaRespira.className}`} style={{ fontSize: "11px" }}>
            Create a character that fits the story and the table. Review the setting
            first, then walk through these steps — we&apos;ll help at every stage.
          </p>
        </header>

        <section
          className={`${dellaRespira.className} space-y-6 leading-relaxed`}
          style={{ fontSize: "11px" }}
        >
          <p>
            Character creation involves a few steps to ensure a balanced play
            environment and that your changeling is appropriate (and, more
            importantly, enjoyable to play) in the game. We suggest you review the
            settings materials first, then jump in and start with a character
            concept!
          </p>
          <p>
            We use the Mind’s Eye Theater: Changeling the Dreaming rules. New to
            C:tD? Don’t worry — we have tools to help with rules and building a
            character even if you don’t have the book. You can also buy a ticket
            and pick up a pre-generated character at the game.
          </p>
          <p>
            Players are limited to one character at a time. To make a new one,
            your previous character must die or retire. If your character dies
            early in a session, we have pregens to keep you in play; afterward you
            can continue that character or create a new one.
          </p>
        </section>

        <hr className="border-t border-gray-700" />

        <section className="space-y-10">
          {steps.map((step, idx) => {
            const bonusImages = [
              "/images/CRoS/Face.png",
              "/images/CRoS/Telephone.png",
              "/images/CRoS/OKC.png",
              "/images/CRoS/King.png",
              "/images/CRoS/WaterLady.png",
              "/images/CRoS/Gaffiti.png",
            ];
            const bonus = bonusImages[idx];
            return (
              <div key={step.title} className="space-y-3">
                <div className="flex justify-center">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={1200}
                    height={700}
                    className="w-full max-w-3xl rounded-md shadow-lg"
                  />
                </div>
                {bonus && (
                  <div className="flex justify-center">
                    <Image
                      src={bonus}
                      alt={`Art for ${step.title}`}
                      width={1200}
                      height={700}
                      className="w-full max-w-3xl rounded-md shadow-lg"
                    />
                  </div>
                )}
                <h3
                  className={`${overlockSC.className} text-center`}
                  style={{ fontSize: "16px", color: "#f1c232" }}
                >
                  {step.title}
                </h3>
                <div
                  className={`${dellaRespira.className} space-y-2 leading-relaxed`}
                  style={{ fontSize: "11px" }}
                >
                  {step.body}
                </div>
                <hr className="border-t border-gray-700" />
              </div>
            );
          })}
        </section>

        <div className="space-y-4 text-center">
          <p
            className={`${overlockSC.className}`}
            style={{ fontSize: "16px", color: "#f1c232" }}
          >
            Ready to play with the full rules?
          </p>
          <Link
            href="/a-crown-of-storms/custom-mechanics"
            className="font-semibold underline"
            style={{ color: "#e69138", fontSize: "11px" }}
          >
            Read Custom Mechanics (Treasures &amp; Curios)
          </Link>
          <br />
          <Link
            href="/a-crown-of-storms/getting-started"
            className="underline"
            style={{ color: "#f1c232", fontSize: "11px" }}
          >
            Back to Getting Started
          </Link>
        </div>
      </div>
    </div>
  );
}
