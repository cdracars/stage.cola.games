import Image from "next/image";
import Link from "next/link";
import {
  Della_Respira,
  Overlock_SC,
  Uncial_Antiqua,
} from "next/font/google";

const dellaRespira = Della_Respira({ subsets: ["latin"], weight: "400" });
const overlockSC = Overlock_SC({ subsets: ["latin"], weight: "400" });
const uncialAntiqua = Uncial_Antiqua({ subsets: ["latin"], weight: "400" });

export default function ACrownOfStormsGettingStartedPage() {
  return (
    <div
      className="min-h-screen w-full"
      style={{ backgroundColor: "#1e1432", color: "#ffffff" }}
    >
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">
        {/* Hero */}
        <div className="space-y-4 text-center">
          <Image
            src="/images/CRoS/Getting%20Started.png"
            alt="A Crown of Storms - Getting Started"
            width={1600}
            height={900}
            className="w-full max-w-3xl mx-auto rounded-md shadow-2xl"
            priority
          />
        </div>

        {/* Intro */}
        <section className="space-y-4 text-left">
          <h1
            className={`${uncialAntiqua.className} text-center`}
            style={{ fontSize: "23px", color: "#f1c232" }}
          >
            A Crown of Storms
          </h1>
          <div
            className={`${dellaRespira.className} space-y-4 leading-relaxed`}
            style={{ fontSize: "11px" }}
          >
            <p>
              A Crown of Storms is a 2-Act live-action roleplaying chronicle using
              the Changeling: the Dreaming setting and rules. In Changeling: the
              Dreaming, players portray changelings — fae souls bound to mortal
              lives — struggling to keep wonder, passion, and meaning alive in a
              world that constantly threatens to smother them under banality.
            </p>
            <p>
              This chronicle centers on the Kingdom of Storms, an Oklahoma fae
              realm thrown into crisis after the sacrifice of its king. In the wake
              of Endless Winter and years of quiet resistance against the Shadow
              Court, the Kingdom declared itself sovereign — and endured. Now, as
              the Shadow Queen’s claim comes due and the protections of the past
              begin to fray, the Kingdom must decide not only who should rule, but
              what kind of kingdom it intends to be.
            </p>
            <p>
              The first Act opens as changelings gather, knowing that the choices
              made now will shape the fate of the Dreaming for years to come.
            </p>
            <p>
              Players portray their characters in live action, through costuming,
              conversation, and movement, inhabiting the space as their changelings
              would. A Crown of Storms is designed to be welcoming to both new and
              experienced players, with an emphasis on character-driven play,
              political choice, and collaborative storytelling. To help ensure a
              safe, immersive, and enjoyable experience for everyone, please review
              our content and safety guidelines below before play.
            </p>
          </div>
        </section>

        <hr className="border-gray-600" />

        {/* Chronicle Content, Lines & Veils */}
        <section className="space-y-6">
          <div className="text-center space-y-3">
            <h2
              className={`${overlockSC.className}`}
              style={{ fontSize: "16px", color: "#f1c232" }}
            >
              Chronicle Content, Lines &amp; Veils
            </h2>
            <Image
              src="/images/CRoS/WaterLady.png"
              alt="Chronicle content artwork"
              width={1200}
              height={700}
              className="w-full max-w-2xl mx-auto rounded-md shadow-lg"
            />
          </div>

          <div
            className={`${dellaRespira.className} space-y-3 leading-relaxed`}
            style={{ fontSize: "11px" }}
          >
            <p>
              We know discussion of these topics can be uncomfortable for some, but
              we are including some explanation and nuance here to make sure
              everyone is on the same page and we can maintain a safe and enjoyable
              play-space for everyone.
            </p>

            <h3
              className={`${overlockSC.className}`}
              style={{ fontSize: "14px", color: "#f1c232" }}
            >
              Chronicle Content
            </h3>
            <p>
              Changeling: The Dreaming takes place in a supernatural version of our
              own world, and deals regularly with mature real-world subject matter
              like crime, sex, violence, drug and alcohol use or death within the
              game fiction. Content also includes supernatural elements common to
              fae fiction such as emotional influence, mind-control, dependent
              relationships, manipulation and the binding of mortals to oaths or
              contracts. Changeling games also contain a social element that may
              bring player characters into social or physical conflict with one
              another. Please always remember that your fellow players aren&apos;t
              your enemy, even if your characters come into conflict. Take
              advantage of game intermission and social time after game to check in
              with your fellow players, introduce yourself and let them know
              you&apos;re not their rival - even if you play one in game.
            </p>

            <h3
              className={`${overlockSC.className}`}
              style={{ fontSize: "14px", color: "#f1c232" }}
            >
              Chronicle Lines
            </h3>
            <p>The following subject matter is NOT ALLOWED:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <span className="font-semibold">Sexual Assault of any kind.</span>{" "}
                Romantic activity must always be consensual and will observe a
                “fade to black” rule.
              </li>
              <li>
                <span className="font-semibold">
                  Behavior or concepts involving real-world hate movements,
                  race-based slavery or discrimination based on sex, race,
                  religion, gender identity or sexual orientation.
                </span>{" "}
                Changelings find these things banal.
              </li>
            </ul>

            <h3
              className={`${overlockSC.className}`}
              style={{ fontSize: "14px", color: "#f1c232" }}
            >
              Chronicle Veils
            </h3>
            <p>
              The following may occur in-game, but will involve a FADE TO BLACK:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Description of sexual encounters</li>
              <li>Intense scenes of violence, such as torture, etc.</li>
              <li>
                Other intense or graphic content as determined by participants or
                storyteller.
              </li>
            </ul>
          </div>
        </section>

        <hr className="border-gray-600" />

        {/* Safety Rules */}
        <section className="space-y-6">
          <div className="text-center space-y-3">
            <h2
              className={`${overlockSC.className}`}
              style={{ fontSize: "16px", color: "#f1c232" }}
            >
              Safety Rules
            </h2>
            <Image
              src="/images/CRoS/Safety%20Rules.png"
              alt="Safety rules artwork"
              width={1200}
              height={700}
              className="w-full max-w-2xl mx-auto rounded-md shadow-lg"
            />
          </div>

          <ul
            className={`${dellaRespira.className} list-disc list-inside space-y-2 leading-relaxed`}
            style={{ fontSize: "11px" }}
          >
            <li>
              <span className="font-semibold">No Touching Without Permission</span>{" "}
              – ask clearly with the out-of-character gesture and respect the
              answer.
            </li>
            <li>
              <span className="font-semibold">
                No overtly sexual, violent or harmful physical roleplay
              </span>{" "}
              – actions of this kind result in immediate ejection.
            </li>
            <li>
              <span className="font-semibold">No Weapons or Weapon Props</span> –
              even lookalikes stay at home.
            </li>
            <li>
              <span className="font-semibold">
                No alcohol or recreational drug use
              </span>{" "}
              – including arriving visibly intoxicated.
            </li>
            <li>
              <span className="font-semibold">No Minors</span> – players must be
              18+ due to mature themes.
            </li>
            <li>
              <span className="font-semibold">Use the Safety Tools</span> – staff
              will brief tools and decompression spaces; printed copies provided.
            </li>
            <li>
              <span className="font-semibold">
                No other antisocial or disruptive behavior
              </span>{" "}
              – keep the space welcoming for everyone.
            </li>
          </ul>
        </section>

        <hr className="border-gray-600" />

        {/* CTA */}
        <section className="text-center space-y-3">
          <p
            className={`${overlockSC.className}`}
            style={{ fontSize: "16px", color: "#f1c232" }}
          >
            All set? Great!
          </p>
          <p
            className={`${dellaRespira.className}`}
            style={{ fontSize: "11px" }}
          >
            You can start working on your character here.
          </p>
          <div className="space-y-2 text-center">
            <Link
              href="/a-crown-of-storms/character-creation"
              className="font-semibold underline"
              style={{ color: "#e69138", fontSize: "11px" }}
            >
              Character Creation
            </Link>
            <br />
            <Link
              href="/a-crown-of-storms/custom-mechanics"
              className="font-semibold underline"
              style={{ color: "#f1c232", fontSize: "11px" }}
            >
              Custom Mechanics
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
