import Image from "next/image";
import Link from "next/link";
import { Della_Respira, Overlock_SC, Uncial_Antiqua } from "next/font/google";

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

export default function ACrownOfStormsCustomMechanicsPage() {
  const BODY_SIZE = "18px";
  const SUBTITLE_SIZE = "26px";
  const TITLE_SIZE = "36px";

  return (
    <div
      className="min-h-screen w-full"
      style={{ backgroundColor: "#1e1432", color: "#ffffff" }}
    >
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">
        <header className="space-y-4 text-center">
          <Image
            src="/images/CRoS/Custom%20Mechanics.png"
            alt="A Crown of Storms Custom Mechanics"
            width={1600}
            height={800}
            className="w-full max-w-2xl mx-auto rounded-md shadow-2xl"
            priority
          />
          <h1
            className={`${uncialAntiqua.className}`}
            style={{ fontSize: TITLE_SIZE, color: "#f1c232" }}
          >
            Treasures &amp; Curios
          </h1>
        </header>

        <section
          className={`${dellaRespira.className} space-y-8 leading-relaxed`}
          style={{ fontSize: BODY_SIZE }}
        >
          <div className="space-y-3 text-left">
            <h2
              className={`${overlockSC.className} text-center`}
              style={{ fontSize: SUBTITLE_SIZE, color: "#f1c232" }}
            >
              Character Creation
            </h2>
            <p>
              All characters will gain 3 dots in the Treasures background for free.
              These dots do not confer related Treasures unless taking another merit
              or character option granting a Treasure directly. Most Treasures will
              be acquired by gaining Treasure cards using the system below.
            </p>
            <p>
              Additionally, some Cantrips and Merits have been adjusted to better fit
              the use of Treasure cards – please refer to the Character Creation page
              for specific adjustments.
            </p>
          </div>

          <div className="space-y-4 text-left">
            <h2
              className={`${overlockSC.className} text-center`}
              style={{ fontSize: SUBTITLE_SIZE, color: "#f1c232" }}
            >
              Treasures &amp; Curios in Play
            </h2>
            <p>
              In A Crown of Storms, Treasures and Curios will be awarded to characters
              by the use of Treasure cards. Each card will indicate its dot value, its
              name, whether it is a Curio (Single-Use), Treasure, or Relic (Treasure
              Weapon), and any mechanics on how it’s used and what benefits (and
              drawbacks) it grants.
            </p>

            <div className="flex justify-center">
              <Image
                src="/images/CRoS/265%20-%20Bassline.jpg"
                alt="Example Treasure card"
                width={500}
                height={700}
                className="w-full max-w-xs rounded-md shadow-lg"
              />
            </div>

            <p>
              Treasures and Relics must be attuned by the character to be used. Curios
              do not require attunement. A player character may have a maximum number
              of “dots” worth of Treasures attuned equal to their Treasures
              background. There is no maximum on Curios.
            </p>
            <p>
              Players with a Treasure card are assumed to have the related item with
              their character. Likewise, if a player forgets or misplaces their
              Treasure card, the character will not have access to the related
              Treasure – so be sure to keep them with you.
            </p>
            <p>
              Most Treasures in the deck are Curios, which are powerful, single-use
              magic items. We encourage players to use Curios as often as they can,
              and similarly, encourage Storytellers to frequently award Treasure cards
              during play. Treasure cards are meant to be the primary means of
              mechanical advancement in A Crown of Storms, so keep them and bring them
              back for future games in the Chronicle!
            </p>
          </div>

          <div className="space-y-3 text-left">
            <h2
              className={`${overlockSC.className} text-center`}
              style={{ fontSize: SUBTITLE_SIZE, color: "#f1c232" }}
            >
              Acquiring Treasures
            </h2>
            <p>
              Each character will acquire one Treasure card upon check-in to each
              game, drawn from the top of a randomized deck, representing something
              acquired or created between games. Additional Treasure cards will be
              awarded for completing quests, participating in plots, or by powerful
              NPCs.
            </p>
            <p>
              Treasure cards may be traded freely among players. If you have a
              Treasure that doesn’t quite work for your character, feel free to trade
              it to another player in exchange for one they have – or for a favor or
              other in-character consideration!
            </p>
            <p className="font-semibold" style={{ color: "#f1c232" }}>
              Please do not trade Treasure Cards in exchange for real-world money or
              any other out-of-character consideration.
            </p>
          </div>
        </section>

        <hr className="border-t border-gray-700" />

        <section
          className={`${dellaRespira.className} space-y-8 leading-relaxed`}
          style={{ fontSize: BODY_SIZE }}
        >
          <div className="space-y-3 text-left">
            <h2
              className={`${overlockSC.className} text-center`}
              style={{ fontSize: SUBTITLE_SIZE, color: "#f1c232" }}
            >
              Equipment
            </h2>
            <h3 className="font-semibold" style={{ color: "#f1c232" }}>
              Character Creation
            </h3>
            <p>
              Your character may start with a single piece of mundane equipment, plus
              an additional piece for each dot of the Resources background. Each piece
              may be a Weapon, piece of Protective Gear, or Miscellaneous Equipment.
            </p>

            <h3 className="font-semibold" style={{ color: "#f1c232" }}>
              Narrative Items
            </h3>
            <p>
              Characters are assumed to have non-magical, non-mechanical items
              consistent with their Resources background. They can serve narrative
              purposes but don’t add mechanical effects or weapon tags. Work with your
              Storyteller to determine what fits your concept and scene.
            </p>
          </div>

          <div className="space-y-3 text-left">
            <h2
              className={`${overlockSC.className} text-center`}
              style={{ fontSize: SUBTITLE_SIZE, color: "#f1c232" }}
            >
              Character Death &amp; Retirement
            </h2>
            <p>
              Characters may die or be retired. We&apos;ll help you make a new character
              or grab a pre-generated one to keep playing. You can re-write between
              games to align with what you want to play next.
            </p>
            <p>
              Treasures awarded to a previous character do not transfer. Your new
              character will receive one Treasure card upon entering play.
            </p>
          </div>
        </section>

        <hr className="border-t border-gray-700" />

        <section className="text-center space-y-3">
          <p
            className={`${overlockSC.className}`}
            style={{ fontSize: SUBTITLE_SIZE, color: "#f1c232" }}
          >
            Keep building your story
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
