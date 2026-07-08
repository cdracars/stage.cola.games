import { Box, Text } from "@chakra-ui/react";
import Image from "@/components/overrides/image";
import {
  CthulhuActionLink,
  CthulhuBody,
  CthulhuPageShell,
  CthulhuSectionTitle,
} from "@/components/cthulhu/page-shell";

export default function Cthulhu1929GettingStartedPage() {
  return (
    <CthulhuPageShell
      routes={[
        { label: "Home", href: "/" },
        { label: "Cthulhu 1929", href: "/cthulhu-1929" },
        { label: "Getting Started", href: "#" },
      ]}
      title="Getting Started"
      heroSrc="/images/cthulhu1929/Chronicle Content.jpg"
      heroAlt="Chronicle content overview"
    >
      <CthulhuBody className="mx-auto max-w-4xl text-center">
        <Text>
          Before diving into Tickets & Registration, it&apos;s important to
          understand the content and rules we&apos;ll be using to keep the
          experience fun for everyone. We know discussion of these topics can
          be uncomfortable, but we are including explanation and nuance here to
          make sure everyone is on the same page.
        </Text>
      </CthulhuBody>

      <Box className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
        <Box className="space-y-8">
          <Box className="rounded-2xl border border-[#f6b26b]/40 bg-white/5 p-6">
            <CthulhuSectionTitle>Chronicle Content</CthulhuSectionTitle>
            <CthulhuBody className="mt-4">
              <Text>
                <Text as="span" className="font-bold text-white">
                  The Inheritance of Ambrose Wincrest
                </Text>{" "}
                is a noir horror experience set in 1929 New England, and deals
                regularly with mature real-world subject matter like crime, sex,
                violence, drug and alcohol use, and death within the game
                fiction.
              </Text>
              <Text>
                Content also includes supernatural elements common to cosmic
                horror such as eldritch conspiracies, occult rites and
                psychological deterioration in the face of the unknowable.
              </Text>
              <Text>
                This immersive experience will also contain visual and auditory
                horror elements like blood, some gore, disturbing sounds and
                lighting, dark environments and horrifying creatures.
              </Text>
            </CthulhuBody>
          </Box>

          <Box className="rounded-2xl border border-[#76a5af]/40 bg-white/5 p-6">
            <CthulhuSectionTitle>Chronicle Lines</CthulhuSectionTitle>
            <CthulhuBody className="mt-4">
              <Text>
                The following subject matter is{" "}
                <Text as="span" className="font-bold text-white">
                  NOT ALLOWED
                </Text>
                , and will not be explored in-game.
              </Text>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  Sexual Assault of any kind
                  <br />
                  Romantic activity must always be consensual and will observe a
                  &quot;fade to black&quot; rule (see below).
                </li>
                <li>
                  Behavior or content involving real-world hate movements,
                  race-based slavery or discrimination based on sex, race,
                  religion, gender identity or sexual orientation
                  <br />
                  We understand that 1929 America had to grapple with these
                  subjects, but they will not be a focus of our game. All
                  players regardless of gender, race or sexual identity will be
                  allowed to portray any of our investigators without concern.
                </li>
              </ul>
            </CthulhuBody>
          </Box>

          <Box className="rounded-2xl border border-[#f6b26b]/40 bg-white/5 p-6">
            <CthulhuSectionTitle>Chronicle Veils</CthulhuSectionTitle>
            <CthulhuBody className="mt-4">
              <Text>
                The following subject matter may occur in-game, but will
                involve a{" "}
                <Text as="span" className="font-bold text-white">
                  FADE TO BLACK
                </Text>
                :
              </Text>
              <ul className="list-disc space-y-2 pl-6">
                <li>Description of sexual encounters</li>
                <li>
                  Other overly intense or graphic content as determined by the
                  participants and storyteller in the scene.
                </li>
              </ul>
            </CthulhuBody>
          </Box>
        </Box>

        <Box className="space-y-8">
          <Box className="overflow-hidden rounded-2xl border border-[#76a5af]/40 bg-white/5 p-3">
            <Image
              src="/images/cthulhu1929/SafetyRules.jpg"
              alt="Safety rules"
              className="h-auto w-full rounded-xl object-cover"
            />
          </Box>

          <Box className="rounded-2xl border border-[#76a5af]/40 bg-white/5 p-6">
            <CthulhuSectionTitle>Your Fellow Players</CthulhuSectionTitle>
            <CthulhuBody className="mt-4">
              <Text>
                Live-action roleplay contains a social element that may bring
                player characters into fictional conflict with one another.
                Please always remember that your fellow players aren&apos;t your
                enemy, even if your characters have different goals.
              </Text>
              <Text>
                Take advantage of time before, during, and after the game to
                introduce yourself and let your fellow players know you&apos;re
                not rivals, even if your characters are.
              </Text>
            </CthulhuBody>
          </Box>

          <Box className="rounded-2xl border border-[#f6b26b]/40 bg-white/5 p-6">
            <CthulhuSectionTitle>Safety Rules</CthulhuSectionTitle>
            <CthulhuBody className="mt-4">
              <Text>
                To help us provide an immersive and safe experience for
                everyone, please observe the following rules:
              </Text>
              <ol className="list-decimal space-y-3 pl-6">
                <li>No Touching Without Permission</li>
                <li>No Dangerous, Violent or Sexual Physical Roleplay</li>
                <li>No Weapons or Weapon Props</li>
                <li>No alcohol or recreational drug use</li>
                <li>No Minors</li>
                <li>Use the Safety Tools at game</li>
                <li>No other antisocial or disruptive behavior</li>
              </ol>
              <Text className="pt-2">
                This is to catch any additional behavior with a negative impact
                to the game or its players not otherwise covered here. Long
                story short: please try to be a respectful and empathetic human
                being.
              </Text>
            </CthulhuBody>
          </Box>
        </Box>
      </Box>

      <Box className="mx-auto max-w-4xl rounded-2xl border border-[#76a5af]/40 bg-white/5 p-8 text-center">
        <CthulhuBody className="space-y-4">
          <Text>
            All set? Great! You can secure your tickets and register for the
            event here:
          </Text>
          <Box className="pt-2">
            <CthulhuActionLink href="/cthulhu-1929/registration">
              Tickets & Registration
            </CthulhuActionLink>
          </Box>
        </CthulhuBody>
      </Box>
    </CthulhuPageShell>
  );
}
