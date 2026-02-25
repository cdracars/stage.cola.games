import Image from "next/image";
import Link from "next/link";
import { Della_Respira, Overlock_SC } from "next/font/google";

const dellaRespira = Della_Respira({ subsets: ["latin"], weight: "400" });
const overlockSC = Overlock_SC({ subsets: ["latin"], weight: "400" });

const BODY_SIZE = "18px";
const SUBTITLE_SIZE = "26px";

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
        </header>

        <section
          className={`${dellaRespira.className} space-y-4 leading-relaxed text-left`}
          style={{ fontSize: BODY_SIZE }}
        >
          <p>
            Character creation involves a few steps to ensure a balanced play
            environment and that your changeling is appropriate (and more
            importantly, enjoyable to play) in the game. We suggest you review the
            settings materials first, then jump in and start with a character
            concept!
          </p>
          <p>
            As a reminder, we are using the setting and rules contained within the{" "}
            <a
              href="https://www.storytellersvault.com/en/product/326469/mind-s-eye-theatre-changeling-the-dreaming"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e69138] underline"
            >
              Mind&apos;s Eye Theater: Changeling the Dreaming rules
            </a>
            .
          </p>
          <p>
            If you&apos;re new to Changeling: The Dreaming, don&apos;t worry! We have
            some tools to help you with the rules and creating a character, even if
            you don&apos;t have access to the book.
          </p>
          <p>
            You can also choose to just buy a ticket and pick up a pre-generated
            character at the game itself!
          </p>
          <p>
            Please note that players will be limited to one character at a time
            during the chronicle. In order to create a new character, the previous
            character must die or be retired - if your character dies early in a
            session, we have pregenerated characters for you to jump right back into
            play. After the session, you can continue that character or create a new
            one.
          </p>
          <div className="flex justify-center pt-2">
            <Image
              src="/images/CRoS/Face.png"
              alt="Character creation art"
              width={1200}
              height={700}
              className="w-full max-w-3xl rounded-md shadow-lg"
            />
          </div>
        </section>

        <hr className="border-t border-gray-700" />

        <section className="space-y-4">
          <Image
            src="/images/CRoS/Step%201.png"
            alt="Step 1 - Join our Discord Server"
            width={1200}
            height={700}
            className="w-full max-w-3xl rounded-md shadow-lg mx-auto"
          />
          <div
            className={`${dellaRespira.className} space-y-3 leading-relaxed text-left`}
            style={{ fontSize: BODY_SIZE }}
          >
            <p>
              Our Discord server is where you will connect with the game staff,
              storytellers and your fellow players!
            </p>
            <p>
              This is also where you&apos;ll get your character concept approved and
              will be able to forge in-character and out-of-character connections
              with other players.
            </p>
            <ul className="list-disc list-inside pl-4">
              <li>
                <a
                  href="https://discord.gg/5p59HPmtYH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e69138] underline font-semibold"
                >
                  COLA Games Discord Server
                </a>
              </li>
            </ul>
            <p>
              As you develop your character and concept, we encourage you to reach
              out and create character ties or generate background connections with
              other chronicle characters.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/CRoS/Telephone.png"
              alt="Discord connection art"
              width={1200}
              height={700}
              className="w-full max-w-3xl rounded-md shadow-lg"
            />
          </div>
        </section>

        <hr className="border-t border-gray-700" />

        <section className="space-y-4">
          <Image
            src="/images/CRoS/Step%202.png"
            alt="Step 2 - Review the Setting"
            width={1200}
            height={700}
            className="w-full max-w-3xl rounded-md shadow-lg mx-auto"
          />
          <div
            className={`${dellaRespira.className} space-y-3 leading-relaxed text-left`}
            style={{ fontSize: BODY_SIZE }}
          >
            <p>
              We recommend you review the setting of Changeling: The Dreaming
              contained in the Minds Eye Theater rules. There is also a wealth of
              other resources that cover the setting, including tabletop C:tD
              resources.
            </p>
            <p>
              If you&apos;re new to Changeling, do not worry - our storytellers can
              help you refine your concept, or understand any questions you have
              about the setting.
            </p>
            <p>
              There are some unique circumstances in Oklahoma these days, including
              kingdom history and notable characters.
            </p>
            <ul className="list-disc list-inside pl-4">
              <li>
                <Link
                  href="/a-crown-of-storms/chronicle-setting"
                  className="text-[#e69138] underline"
                >
                  Review the local setting &amp; NPCs here - Chronicle Setting
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/CRoS/OKC.png"
              alt="Oklahoma setting art"
              width={1200}
              height={700}
              className="w-full max-w-3xl rounded-md shadow-lg"
            />
          </div>
        </section>

        <hr className="border-t border-gray-700" />

        <section className="space-y-4">
          <Image
            src="/images/CRoS/Step%203.png"
            alt="Step 3 - Concept Approval"
            width={1200}
            height={700}
            className="w-full max-w-3xl rounded-md shadow-lg mx-auto"
          />
          <div
            className={`${dellaRespira.className} space-y-3 leading-relaxed text-left`}
            style={{ fontSize: BODY_SIZE }}
          >
            <p>
              In order to save players and storytellers time writing, re-writing
              and refining completely statted-out characters, we ask that players
              submit their character concepts in advance in the Character Concepts
              channel of our Discord server. This allows us to help you refine any
              concepts that may be inappropriate or unfun to play for the planned
              Chronicle.
            </p>
            <p>
              Your character concept is a short description of your character&apos;s
              Kith &amp; Court, their history in Oklahoma, which Duchy they live in,
              and any information other characters would know. It should not be any
              longer than a few sentences covering their background, where they&apos;re
              starting the chronicle and how you intend to play them.
            </p>
            <p className="font-semibold">Example:</p>
            <p>
              Bertie Goodhollow is a Seelie Ghillie Dhu who has been in the Duchy
              of Singing Grass as long as anyone can remember. He&apos;s a farmer who
              lives north of town. Bertie is a friend to responsible farmers across
              the community - and an enemy to anyone who would trample nature for
              profit.
            </p>
            <p>
              <span className={`${overlockSC.className}`} style={{ fontSize: SUBTITLE_SIZE, color: "#f1c232" }}>
                A note for newer Changeling players
              </span>
            </p>
            <p>
              There are plenty of resources online for looking into the
              Changeling: The Dreaming setting. If you don&apos;t feel quite like doing
              that much homework, staff is available on the Discord to help you out!
            </p>
            <div className="flex justify-center py-2">
              <Image
                src="/images/CRoS/Gaffiti.png"
                alt="Concept art"
                width={1200}
                height={700}
                className="w-full max-w-3xl rounded-md shadow-lg"
              />
            </div>
            <p className={`${overlockSC.className}`} style={{ fontSize: SUBTITLE_SIZE, color: "#f1c232" }}>
              Character Concept Guidelines
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                All characters must be of the Seelie or Unseelie Courts. Shadow
                Court characters are not allowed.
              </li>
              <li>
                All characters must be 18+. Foundlings simply experienced their
                Chrysalis later in life.
              </li>
              <li>
                A Crown of Storms will have a primarily social, investigation and
                adventuring focus, with some light political play - keep this in
                mind as you create your character!
              </li>
            </ul>
            <p>
              Once approved by a storyteller, we can move on to figuring out your
              character&apos;s attributes, abilities and powers!
            </p>
          </div>
        </section>

        <hr className="border-t border-gray-700" />

        <section className="space-y-4">
          <div
            className={`${dellaRespira.className} space-y-3 leading-relaxed text-left`}
            style={{ fontSize: BODY_SIZE }}
          >
            <p>
              Create your character using the Minds Eye Theater Changeling: The
              Dreaming rules. If you don&apos;t have access to the book, we&apos;ve created
              an interactive guide to help with character creation!
            </p>
            <p>
              You can use the following link to find all of our character creation
              resources and rules. Once you&apos;re done with your character, save and
              email this sheet to{" "}
              <a
                href="mailto:staff@cola.games"
                className="text-[#e69138] underline"
              >
                staff@cola.games
              </a>{" "}
              , and we will enter your character into our database.
            </p>
            <p>
              Please review the Initial XP and custom mechanics information,
              because some of the options you&apos;re taking may work a little
              differently in our chronicle.
            </p>
            <p className="font-semibold">
              <a
                href="https://docs.google.com/document/"
                className="text-[#e69138] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                A Crown of Storms: Character Creation Resources &amp; Rules
              </a>
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/CRoS/WaterLady.png"
              alt="Character creation section artwork"
              width={1200}
              height={700}
              className="w-full max-w-3xl rounded-md shadow-lg"
            />
          </div>
        </section>

        <hr className="border-t border-gray-700" />

        <section className="space-y-4">
          <Image
            src="/images/CRoS/Step%205.png"
            alt="Step 5 - Pick Your Game"
            width={1200}
            height={700}
            className="w-full max-w-3xl rounded-md shadow-lg mx-auto"
          />
          <div
            className={`${dellaRespira.className} space-y-3 leading-relaxed text-left`}
            style={{ fontSize: BODY_SIZE }}
          >
            <p>
              In this two-part mini-chronicle, you will shape the story of a
              revolution - as the three Duchies of the Kingdom of Storms unite
              against the tyranny of the wicked Shadow Court.
            </p>
            <p>
              Act I: Local freehold games across central Oklahoma, each with its own
              story, characters, and conflicts.
            </p>
            <p>
              Act II: A grand combined event where all Freeholds gather and the
              kingdom&apos;s fate is decided.
            </p>
            <p>
              While designed as a two-game event, you may attend as many or as few
              games as you wish. Every appearance, every dream, every spark of
              Glamour adds to the tale. Whether you follow one Freehold&apos;s journey
              or join them all, your choices will impact the fate of the Dreaming
              across Oklahoma.
            </p>
            <p>
              Register or pick up your tickets on the{" "}
              <Link href="/events" className="text-[#e69138] underline">
                COLA Games Events page
              </Link>
              .
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/CRoS/King.png"
              alt="King artwork"
              width={1200}
              height={700}
              className="w-full max-w-3xl rounded-md shadow-lg"
            />
          </div>
          <div
            className={`${dellaRespira.className} space-y-2 leading-relaxed text-left`}
            style={{ fontSize: BODY_SIZE }}
          >
            <p className="font-semibold">Act I - The Duchies of Storms</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                The Princess of Stillwater - March 28th, 9:30 AM - 4:00 PM,
                Stillwater Public Library, Stillwater. Our kickoff event is FREE
                in partnership with the library!
              </li>
              <li>
                The Knight of Tulsa - April 11th, 2:30 PM - 10:00 PM, Clare
                Michael Event Space, Tulsa. $20
              </li>
              <li>
                The Spymaster of Oklahoma City - April 25th, 4:00 PM - 11:30 PM,
                Memorial Park Cemetery Historic Chapel, Oklahoma City. $20
              </li>
            </ul>
            <p className="font-semibold mt-2">Act II - Finale</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                The Shadow Queen of Oklahoma - May 16th, 12:30 PM - 10:00 PM, The
                Ivy Event Space, Sperry. $30
              </li>
            </ul>
          </div>
        </section>

        <hr className="border-t border-gray-700" />

        <section className="space-y-4">
          <Image
            src="/images/CRoS/Step%206.png"
            alt="Step 6 - We'll See You There"
            width={1200}
            height={700}
            className="w-full max-w-3xl rounded-md shadow-lg mx-auto"
          />
          <div className="flex justify-center">
            <Image
              src="/images/CRoS/Castle.png"
              alt="Castle artwork"
              width={1200}
              height={700}
              className="w-full max-w-3xl rounded-md shadow-lg"
            />
          </div>
          <div
            className={`${dellaRespira.className} space-y-3 leading-relaxed text-left`}
            style={{ fontSize: BODY_SIZE }}
          >
            <p>
              We can&apos;t wait to share our chronicle with you and see what stories
              you and your fellow players tell.
            </p>
            <p>
              Please visit our{" "}
              <Link
                href="/a-crown-of-storms/custom-mechanics"
                className="text-[#e69138] underline"
              >
                Custom Mechanics
              </Link>{" "}
              page for information about how we&apos;ll be running this game a little
              differently - including some exciting rules around Treasures and
              Curios!
            </p>
          </div>
        </section>

        <hr className="border-t border-gray-700" />

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
