import Image from "next/image";
import Link from "next/link";
import { Della_Respira, Overlock_SC, Uncial_Antiqua } from "next/font/google";

const dellaRespira = Della_Respira({ subsets: ["latin"], weight: "400" });
const overlockSC = Overlock_SC({ subsets: ["latin"], weight: "400" });
const uncialAntiqua = Uncial_Antiqua({ subsets: ["latin"], weight: "400" });

const BODY_SIZE = "18px";
const SUBTITLE_SIZE = "26px";
const TITLE_SIZE = "36px";

export default function ACrownOfStormsPage() {
  return (
    <div
      className="min-h-screen w-full"
      style={{ backgroundColor: "#1e1432", color: "#ffffff" }}
    >
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        <Image
          src="/images/CRoS/ACoSTitle.jpg"
          alt="A Crown of Storms key art"
          width={1600}
          height={900}
          className="w-full max-w-3xl rounded-md shadow-2xl mx-auto"
          priority
        />

        <Image
          src="/images/CRoS/coverletter.jpeg"
          alt="Royal decree of King Alaric the Thunder-Sworn"
          width={1200}
          height={1800}
          className="w-full max-w-2xl rounded-md shadow-lg mx-auto"
        />

        <hr className="border-gray-600 w-full max-w-3xl mx-auto" />

        <div className="w-full max-w-3xl mx-auto space-y-6">
          <h2
            className={`${uncialAntiqua.className} text-center`}
            style={{ fontSize: TITLE_SIZE, color: "#ffffff" }}
          >
            Welcome to our Chronicle
          </h2>

          <div className="space-y-4 text-left">
            <p className={dellaRespira.className} style={{ fontSize: BODY_SIZE }}>
              <span style={{ color: "#f1c232" }}>A Crown of Storms</span> is our
              urban fantasy live-action experience using the{" "}
              <span style={{ color: "#f1c232" }}>
                Mind&apos;s Eye Theater: Changeling the Dreaming
              </span>{" "}
              ruleset. Please join us for this mini-chronicle in two Acts, starting
              on <span style={{ color: "#f1c232" }}>March 28, 2026</span>, where the
              fate of Oklahoma&apos;s Kingdom of Storms will be decided.
            </p>

            <p className={dellaRespira.className} style={{ fontSize: BODY_SIZE }}>
              Whether you&apos;re an experienced player, or brand new to live-action
              gaming, we&apos;d love to see you there.
            </p>
          </div>

          <div className="space-y-2">
            <p
              className={`${overlockSC.className} text-center`}
              style={{ fontSize: SUBTITLE_SIZE, color: "#f1c232" }}
            >
              What you&apos;ll need:
            </p>
            <ul
              className={`${dellaRespira.className} list-disc list-inside space-y-1 text-left mx-auto max-w-xl`}
              style={{ fontSize: BODY_SIZE }}
            >
              <li>An approved Character Concept</li>
              <li>An approved Character sheet using the MET rules</li>
              <li>An event ticket (or registration for a free event)</li>
            </ul>
            <p
              className={`${dellaRespira.className} text-left max-w-xl mx-auto`}
              style={{ fontSize: BODY_SIZE }}
            >
              Don&apos;t worry! We will help you step-by-step with everything.
            </p>
          </div>

          <div className="space-y-2 text-center">
            <p
              className={overlockSC.className}
              style={{ fontSize: SUBTITLE_SIZE, color: "#f1c232" }}
            >
              Ready to get started?
            </p>
            <Link
              href="/a-crown-of-storms/getting-started"
              className="inline-block font-semibold underline"
              style={{ color: "#e69138", fontSize: BODY_SIZE }}
            >
              Get started here.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
