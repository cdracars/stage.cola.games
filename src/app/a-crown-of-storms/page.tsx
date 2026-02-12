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

export default function ACrownOfStormsPage() {
  return (
    <div
      className="min-h-screen w-full"
      style={{ backgroundColor: "#1e1432", color: "#ffffff" }}
    >
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8 flex flex-col items-center text-center">
        <Image
          src="/images/CRoS/ACoSTitle.jpg"
          alt="A Crown of Storms key art"
          width={1600}
          height={900}
          className="w-full max-w-3xl rounded-md shadow-2xl"
          priority
        />

        <Image
          src="/images/CRoS/coverletter.jpeg"
          alt="Royal decree of King Alaric the Thunder-Sworn"
          width={1200}
          height={1800}
          className="w-full max-w-2xl rounded-md shadow-lg"
        />

        <hr className="border-gray-600 w-full max-w-3xl" />

        <div className="w-full max-w-3xl space-y-6 text-center">
          <h2
            className={`${uncialAntiqua.className}`}
            style={{ fontSize: "23px", color: "#f1c232" }}
          >
            Welcome to Our Chronicle
          </h2>
          <p
            className={`${dellaRespira.className}`}
            style={{ fontSize: "11px" }}
          >
            A Crown of Storms is our urban fantasy live-action experience using the
            Mind’s Eye Theater: Changeling the Dreaming ruleset. Please join us for
            this mini-chronicle in two Acts, starting on March 28, 2026, where the
            fate of Oklahoma’s Kingdom of Storms will be decided.
          </p>
          <p
            className={`${dellaRespira.className}`}
            style={{ fontSize: "11px" }}
          >
            Whether you’re an experienced player, or brand new to live-action
            gaming, we’d love to see you there!
          </p>

          <div className="space-y-2">
            <p
              className={`${overlockSC.className}`}
              style={{ fontSize: "16px", color: "#f1c232" }}
            >
              What you’ll need:
            </p>
            <ul
              className={`${dellaRespira.className} list-disc list-inside space-y-1 text-left mx-auto max-w-sm`}
              style={{ fontSize: "11px" }}
            >
              <li>An approved Character Concept</li>
              <li>An approved Character sheet using the MET rules</li>
              <li>An event ticket (or registration for a free event)</li>
            </ul>
            <p
              className={`${dellaRespira.className}`}
              style={{ fontSize: "11px" }}
            >
              Don’t worry! We will help you step-by-step with everything.
            </p>
          </div>

          <div className="space-y-2">
            <p
              className={`${overlockSC.className}`}
              style={{ fontSize: "16px", color: "#f1c232" }}
            >
              Ready to get started?
            </p>
            <Link
              href="/a-crown-of-storms/getting-started"
              className="inline-block font-semibold underline"
              style={{
                color: "#e69138",
                fontSize: "11px",
              }}
            >
              Get started here.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
