import Image from "next/image";
import Link from "next/link";
import { Della_Respira, Overlock_SC } from "next/font/google";

const dellaRespira = Della_Respira({ subsets: ["latin"], weight: "400" });
const overlockSC = Overlock_SC({ subsets: ["latin"], weight: "400" });

const BODY_SIZE = "18px";
const SUBTITLE_SIZE = "26px";

export default function ACrownOfStormsGettingStartedPage() {
  return (
    <div
      className="min-h-screen w-full"
      style={{ backgroundColor: "#1e1432", color: "#ffffff" }}
    >
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">
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

        <section className="space-y-4 text-left">
          <div className="flex justify-center">
            <Image
              src="/images/CRoS/Rainbow.png"
              alt="Welcome artwork"
              width={1200}
              height={700}
              className="w-full max-w-2xl rounded-md shadow-lg"
            />
          </div>
          <div
            className={`${dellaRespira.className} space-y-4 leading-relaxed`}
            style={{ fontSize: BODY_SIZE }}
          >
            <p>
              <span style={{ color: "#f1c232" }}>A Crown of Storms</span> is a
              2-Act live-action roleplaying chronicle using the Changeling: the
              Dreaming setting and rules. In Changeling: the Dreaming, players
              portray changelings, fae souls bound to mortal lives, struggling to
              keep wonder, passion, and meaning alive in a world that constantly
              threatens to smother them under banality.
            </p>
            <p>
              This chronicle centers on the{" "}
              <span style={{ color: "#f1c232" }}>Kingdom of Storms</span>, an
              Oklahoma fae realm thrown into crisis after the sacrifice of its king.
              In the wake of Endless Winter and years of quiet resistance against
              the Shadow Court, the Kingdom declared itself sovereign and endured.
              Now, as the Shadow Queen&apos;s claim comes due and the protections of
              the past begin to fray, the Kingdom must decide not only who should
              rule, but what kind of kingdom it intends to be.
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
              safe, immersive, and enjoyable play-space for everyone, please review
              our content and safety guidelines below before play.
            </p>
          </div>
        </section>

        <hr className="border-gray-600" />

        <section className="space-y-6">
          <div className="text-center space-y-3">
            <Image
              src="/images/CRoS/Chronicle%20Content%20Lines%20and%20Veils.png"
              alt="Chronicle Content Lines and Veils"
              width={1600}
              height={900}
              className="w-full max-w-3xl mx-auto rounded-md shadow-2xl"
            />
          </div>

          <div
            className={`${dellaRespira.className} space-y-3 leading-relaxed text-left`}
            style={{ fontSize: BODY_SIZE }}
          >
            <p>
              We know discussion of these topics can be uncomfortable for some, but
              we are including some explanation and nuance here to make sure
              everyone is on the same page and we can maintain a safe and enjoyable
              play-space for everyone.
            </p>

            <div className="flex justify-center py-2">
              <Image
                src="/images/CRoS/FairyCage.png"
                alt="Fairy cage artwork"
                width={1200}
                height={700}
                className="w-full max-w-2xl rounded-md shadow-lg"
              />
            </div>

            <h3
              className={overlockSC.className}
              style={{ fontSize: SUBTITLE_SIZE, color: "#f1c232" }}
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
              contracts.
            </p>
            <p>
              Changeling games also contain a social element that may bring player
              characters into social or physical conflict with one another. Please
              always remember that your fellow players are not your enemy, even if
              your characters come into conflict. Take advantage of game intermission
              and social time after game to check in with your fellow players,
              introduce yourself and let them know you are not their rival, even if
              you play one in game.
            </p>

            <h3
              className={overlockSC.className}
              style={{ fontSize: SUBTITLE_SIZE, color: "#f1c232" }}
            >
              Chronicle Lines
            </h3>
            <p>
              The following subject matter is{" "}
              <span style={{ color: "#e69138", fontWeight: 700 }}>
                NOT ALLOWED
              </span>
              , and will not be explored in-game or in communication channels by
              Storytellers or by players, including in character backgrounds:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <span style={{ color: "#e69138", fontWeight: 700 }}>
                  Sexual Assault of any kind
                </span>
                . Romantic activity must always be consensual and will observe a{" "}
                <span style={{ color: "#f1c232", fontWeight: 700 }}>
                  FADE TO BLACK
                </span>{" "}
                rule.
              </li>
              <li>
                <span style={{ color: "#e69138", fontWeight: 700 }}>
                  Behavior or concepts involving real-world hate movements,
                  race-based slavery or discrimination based on sex, race, religion,
                  gender identity or sexual orientation
                </span>
                . Changelings find these things banal.
              </li>
            </ul>

            <h3
              className={overlockSC.className}
              style={{ fontSize: SUBTITLE_SIZE, color: "#f1c232" }}
            >
              Chronicle Veils
            </h3>
            <p>
              The following may occur in-game, but will involve a{" "}
              <span style={{ color: "#f1c232", fontWeight: 700 }}>
                FADE TO BLACK
              </span>
              :
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

        <section className="space-y-6">
          <div className="text-center space-y-3">
            <Image
              src="/images/CRoS/Safety%20Rules.png"
              alt="Safety rules artwork"
              width={1200}
              height={700}
              className="w-full max-w-2xl mx-auto rounded-md shadow-lg"
            />
          </div>

          <ul
            className={`${dellaRespira.className} list-disc list-inside space-y-2 leading-relaxed text-left`}
            style={{ fontSize: BODY_SIZE }}
          >
            <li>
              <span style={{ color: "#f1c232", fontWeight: 700 }}>
                No Touching Without Permission
              </span>{" "}
              - ask clearly with the out-of-character gesture and respect the
              answer.
            </li>
            <li>
              <span style={{ color: "#f1c232", fontWeight: 700 }}>
                No overtly sexual, violent or harmful physical roleplay
              </span>{" "}
              - actions of this kind result in immediate ejection.
            </li>
            <li>
              <span style={{ color: "#f1c232", fontWeight: 700 }}>
                No Weapons or Weapon Props
              </span>{" "}
              - even lookalikes stay at home.
            </li>
            <li>
              <span style={{ color: "#f1c232", fontWeight: 700 }}>
                No alcohol or recreational drug use
              </span>{" "}
              - including arriving visibly intoxicated.
            </li>
            <li>
              <span style={{ color: "#f1c232", fontWeight: 700 }}>
                No Minors
              </span>{" "}
              - players must be 18+ due to mature themes.
            </li>
            <li>
              <span style={{ color: "#f1c232", fontWeight: 700 }}>
                Use the Safety Tools
              </span>{" "}
              - staff will brief tools and decompression spaces; printed copies
              provided.
            </li>
            <li>
              <span style={{ color: "#f1c232", fontWeight: 700 }}>
                No other antisocial or disruptive behavior
              </span>{" "}
              - keep the space welcoming for everyone.
            </li>
          </ul>
          <div className="flex justify-center pt-2">
            <Link
              href="/a-crown-of-storms/character-creation"
              className={`${overlockSC.className} inline-block font-semibold px-6 py-3 rounded-md`}
              style={{ backgroundColor: "#e69138", color: "#ffffff", fontSize: BODY_SIZE }}
            >
              Next Step: Character Creation
            </Link>
          </div>
        </section>

        <hr className="border-gray-600" />

        <section className="text-center space-y-4">
          <p
            className={overlockSC.className}
            style={{ fontSize: SUBTITLE_SIZE, color: "#f1c232" }}
          >
            Continue Reading
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/a-crown-of-storms/chronicle-setting"
              className="font-semibold underline"
              style={{ color: "#e69138", fontSize: BODY_SIZE }}
            >
              Chronicle Setting
            </Link>
            <Link
              href="/a-crown-of-storms/custom-mechanics"
              className="font-semibold underline"
              style={{ color: "#e69138", fontSize: BODY_SIZE }}
            >
              Custom Mechanics
            </Link>
            <Link
              href="/a-crown-of-storms/character-creation"
              className="font-semibold underline"
              style={{ color: "#e69138", fontSize: BODY_SIZE }}
            >
              Character Creation
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
