import Image from "next/image";
import Link from "next/link";
import { Della_Respira, Overlock_SC, Uncial_Antiqua } from "next/font/google";

const dellaRespira = Della_Respira({ subsets: ["latin"], weight: "400" });
const overlockSC = Overlock_SC({ subsets: ["latin"], weight: "400" });
const uncialAntiqua = Uncial_Antiqua({ subsets: ["latin"], weight: "400" });

const BODY_SIZE = "18px";
const SUBTITLE_SIZE = "26px";
const TITLE_SIZE = "36px";

export default function ACrownOfStormsChronicleSettingPage() {
  return (
    <div
      className="min-h-screen w-full"
      style={{ backgroundColor: "#1e1432", color: "#ffffff" }}
    >
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">
        <Image
          src="/images/CRoS/Chronicle%20Setting.png"
          alt="Chronicle setting banner"
          width={1600}
          height={900}
          className="w-full max-w-3xl mx-auto rounded-md shadow-2xl"
          priority
        />

        <div className="space-y-6 text-left">
          <h1
            className={`${uncialAntiqua.className} text-center`}
            style={{ fontSize: TITLE_SIZE, color: "#f1c232" }}
          >
            Our Story So Far...
          </h1>

          <div
            className={`${dellaRespira.className} space-y-4 leading-relaxed`}
            style={{ fontSize: BODY_SIZE }}
          >
            <p>
              Endless Winter came to Oklahoma like a promise turning cold. In the
              wider Dreaming, the disappearance of High King David sent shockwaves
              through courts that had relied on his steadiness, proof that even
              thrones blessed by legend can simply slip away. In the Duchy of
              Storms, that uncertainty became a question of survival.
            </p>
            <p>
              Oklahoma did not wait to be claimed. With the world freezing and the
              Shadow Court pressing inward, the Duchy of Storms declared itself the
              Kingdom of Storms, a refuge built out of stubborn hope and storm-won
              authority. Under King Alaric Thundersworn, it held the line against
              both hunger and fear. Against expectation, it did not just survive. It
              thrived.
            </p>
            <p>
              Then Shadow Queen Velistra arrived. She came with an army and an old
              kind of legitimacy, one written in the ink of ancient law. When
              conflict threatened to destroy everything the Kingdom had protected,
              King Alaric challenged her to a duel to the death. He lost. By the
              terms sworn before witnesses, Velistra will claim the Kingdom within a
              Year and a Day, and in that taking, no subject shall be harmed.
            </p>
            <p>
              That deadline is close now. Velistra has worked openly with the
              Kingdom&apos;s great duchies, arranging a calm handover of power. Her
              followers stand ready to assume the duties of rule. It looks, from the
              outside, like a peaceful transition, unavoidable, even fair.
            </p>
            <p>
              But beneath the ceremony, the Kingdom of Storms is a storm of its own.
              The duchies&apos; leaders, Percy Darkrow, Cole Thornridge, and Dawn
              Caelithae, appear to cooperate with Velistra as the final day
              approaches. In truth, each hunts for a way to break her claim without
              breaking the Kingdom, and each carries a different vision of what
              should exist when the crown finally changes hands.
            </p>
            <p>
              The Year and a Day is almost done. Whatever the Kingdom of Storms
              becomes next, crown, council, or ruin, will be decided by those willing
              to move before the last night falls.
            </p>
          </div>
        </div>

        <hr className="border-gray-600 w-full max-w-3xl mx-auto" />

        <div className="space-y-10 text-left">
          <h2
            className={`${overlockSC.className} text-center`}
            style={{ fontSize: SUBTITLE_SIZE, color: "#f1c232" }}
          >
            The Duchies of Storms
          </h2>

          <div className="space-y-6">
            <div className="flex justify-center">
              <Image
                src="/images/CRoS/SingingGrass.png"
                alt="The Duchy of Singing Grass"
                width={1200}
                height={600}
                className="w-full max-w-2xl rounded-md shadow-lg"
              />
            </div>
            <h3
              className={overlockSC.className}
              style={{ fontSize: SUBTITLE_SIZE, color: "#f1c232" }}
            >
              The Duchy of Singing Grass, Stillwater
            </h3>
            <p
              className={`${dellaRespira.className} italic`}
              style={{ fontSize: BODY_SIZE, color: "#f1c232" }}
            >
              "A kingdom without hope is already conquered."
              <br />
              - Dawn Caelithae, Duchess of Singing Grass
            </p>
            <p
              className={`${dellaRespira.className} leading-relaxed`}
              style={{ fontSize: BODY_SIZE }}
            >
              Stillwater is a place of quiet radiance. Wind moves through tall
              grass and shaded groves, carrying dreams shaped by study, art, and
              shared hope. The Dreaming here is gentle but resilient, fed by
              imagination, learning, and the belief that the future can be better
              if it is carefully tended. Princess Dawn Caelithae rules with
              compassion and trust, nurturing a Seelie court built on inspiration
              rather than fear. Stillwater has not yet been hardened by war, and
              that innocence is both its greatest strength and its greatest risk.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex justify-center">
              <Image
                src="/images/CRoS/OpenRoad.png"
                alt="The Duchy of the Open Road"
                width={1200}
                height={600}
                className="w-full max-w-2xl rounded-md shadow-lg"
              />
            </div>
            <h3
              className={overlockSC.className}
              style={{ fontSize: SUBTITLE_SIZE, color: "#f1c232" }}
            >
              The Duchy of The Open Road, Tulsa
            </h3>
            <p
              className={`${dellaRespira.className} italic`}
              style={{ fontSize: BODY_SIZE, color: "#f1c232" }}
            >
              "We do not earn tomorrow by waiting."
              <br />
              - Cole Thornridge, Duke of the Open Road
            </p>
            <p
              className={`${dellaRespira.className} leading-relaxed`}
              style={{ fontSize: BODY_SIZE }}
            >
              Tulsa is shaped by motion and possibility. Wide skies, long roads,
              and the promise of somewhere better just ahead feed a Dreaming born of
              travel, hard choices, and building a life with your own hands. Freedom
              here is earned, not granted. Duke Cole Thornridge rules like a sheriff
              of an old road town, firm, fair, and trusted to stand between danger
              and those who cannot. Tulsa values loyalty, shared responsibility, and
              stepping up when the road turns rough.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex justify-center">
              <Image
                src="/images/CRoS/CrownCoin.png"
                alt="The Duchy of Crow and Coin"
                width={1200}
                height={600}
                className="w-full max-w-2xl rounded-md shadow-lg"
              />
            </div>
            <h3
              className={overlockSC.className}
              style={{ fontSize: SUBTITLE_SIZE, color: "#f1c232" }}
            >
              The Duchy of Crow and Coin, Oklahoma City
            </h3>
            <p
              className={`${dellaRespira.className} italic`}
              style={{ fontSize: BODY_SIZE, color: "#f1c232" }}
            >
              "I protect me and mine. Any king ought to do the same, or they are no
              king of mine."
              <br />- Duke Percy Darkrow
            </p>
            <p
              className={`${dellaRespira.className} leading-relaxed`}
              style={{ fontSize: BODY_SIZE }}
            >
              Crow and Coin is loud, restless, and alive. Neon lights, music,
              arguments, and laughter feed the Dreaming here, where expression is
              currency and survival is an art. This is a city that distrusts titles
              on principle and believes power must prove itself every day. Duke Percy
              Darkrow presides without ceremony, having built a culture where
              freedom, voice, and community matter more than hierarchy. Crow and Coin
              does not reject the idea of a monarch, but it will never accept one
              who has not earned belief.
            </p>
          </div>
        </div>

        <hr className="border-gray-600 w-full max-w-3xl mx-auto" />

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
