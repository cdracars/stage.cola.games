import { Box, Text } from "@chakra-ui/react";
import {
  CthulhuActionLink,
  CthulhuBody,
  CthulhuPageShell,
  CthulhuSectionTitle,
  CthulhuTextLink,
} from "@/components/cthulhu/page-shell";

const registrationUrl = "https://forms.gle/TJZAREwnx1oNqcDv6";
const ticketUrl = "https://central-oklahoma-live-action-games.square.site/";
const discordUrl = "https://discord.gg/5p59HPmtYH";
const investigatorPacketUrl =
  "/docs/cthulhu1929/Inheritance_2026_Investigator_Packet.pdf";

export default function Cthulhu1929RegistrationPage() {
  return (
    <CthulhuPageShell
      routes={[
        { label: "Home", href: "/" },
        { label: "Cthulhu 1929", href: "/cthulhu-1929" },
        { label: "Registration", href: "#" },
      ]}
      title="Tickets & Registration"
      heroSrc="/images/cthulhu1929/TicketsRegistration.jpg"
      heroAlt="Tickets and registration"
    >
      <CthulhuBody className="mx-auto max-w-4xl text-center">
        <Text>
          Whether you&apos;re an experienced LARPer or stepping into live-action
          roleplaying for the very first time, we&apos;d love to have you join us.
          We&apos;ll guide you through every step of the process, from
          registration to your first scene.
        </Text>
        <Text>Before we get started, a few things to know:</Text>
        <ul className="list-disc space-y-2 pl-6 text-left">
          <li>
            We will use the Cthulhu Live 3rd Edition ruleset. We will also
            provide a brief rules and gameplay introduction before the game
            begins.
          </li>
          <li>
            Period costuming is highly encouraged! Many of our players enjoy
            dressing in period attire and helping bring the game to life.
          </li>
          <li>
            Numerous costuming resources are available both online and through
            our Discord server, and we&apos;re happy to help newcomers learn how
            to put together a look for the evening.
          </li>
        </ul>
      </CthulhuBody>

      <Box className="grid gap-8">
        <Box className="rounded-2xl border border-[#76a5af]/40 bg-white/5 p-6">
          <CthulhuSectionTitle>
            Step 1: Join the Cola Games Discord Server
          </CthulhuSectionTitle>
          <CthulhuBody className="mt-4">
            <Text>
              Our Discord server is where we answer questions, share updates,
              and help everyone prepare for the game.
            </Text>
            <CthulhuTextLink href={discordUrl} external>
              COLA Games Discord Server
            </CthulhuTextLink>
          </CthulhuBody>
        </Box>

        <Box className="rounded-2xl border border-[#f6b26b]/40 bg-white/5 p-6">
          <CthulhuSectionTitle>
            Step 2: Review the Setting & Investigators
          </CthulhuSectionTitle>
          <CthulhuBody className="mt-4">
            <Text>
              Take a look at our Investigator Packet to learn about the setting
              and review your investigator options:
            </Text>
            <CthulhuTextLink href={investigatorPacketUrl}>
              Investigator Packet: The Inheritance of Ambrose Wincrest
            </CthulhuTextLink>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Each Investigator is unique and can only be played by one
                person.
              </li>
              <li>
                During the early registration period, we will do our best to
                match players with one of their preferred Investigators.
              </li>
              <li>
                After early registration closes, remaining characters will be
                assigned on a first-come, first-served basis.
              </li>
            </ul>
            <Text>
              If one of your preferred Investigators isn&apos;t available, we will
              work with you to find a character you&apos;ll enjoy.
            </Text>
          </CthulhuBody>
        </Box>

        <Box className="rounded-2xl border border-[#76a5af]/40 bg-white/5 p-6">
          <CthulhuSectionTitle>Step 3: Buy your Ticket</CthulhuSectionTitle>
          <CthulhuBody className="mt-4">
            <CthulhuTextLink href={ticketUrl} external>
              COLA Games Online Store
            </CthulhuTextLink>
            <Text>Your ticket is $125 and includes:</Text>
            <ul className="list-disc space-y-2 pl-6">
              <li>Admission to the event</li>
              <li>
                A fully developed investigator character, including your
                character sheet, notebook, and any in-game materials or props
                relevant to your character&apos;s story
              </li>
              <li>A catered, in-character dinner</li>
            </ul>
            <Text>This event will be limited to 35 participants.</Text>
            <Box className="pt-2">
              <CthulhuActionLink href={ticketUrl} external>
                Buy Your Ticket
              </CthulhuActionLink>
            </Box>
          </CthulhuBody>
        </Box>

        <Box className="rounded-2xl border border-[#f6b26b]/40 bg-white/5 p-6">
          <CthulhuSectionTitle>Step 4: Register</CthulhuSectionTitle>
          <CthulhuBody className="mt-4">
            <Text>
              Select your meal option, let us know if you&apos;re arriving with
              friends, and tell us which characters you&apos;re most interested in
              portraying:
            </Text>
            <CthulhuTextLink href={registrationUrl} external>
              Registration: The Inheritance of Ambrose Wincrest
            </CthulhuTextLink>
            <Box className="pt-2">
              <CthulhuActionLink href={registrationUrl} external>
                Register Now
              </CthulhuActionLink>
            </Box>
            <Text>
              Once you&apos;ve registered, you&apos;re all set! We will email you a
              copy of your Investigator information, and everything will be
              waiting for you at the door.
            </Text>
          </CthulhuBody>
        </Box>

        <Box className="rounded-2xl border border-[#76a5af]/40 bg-white/5 p-6">
          <CthulhuSectionTitle>Step 5: See you at game!</CthulhuSectionTitle>
          <CthulhuBody className="mt-4">
            <Text>
              We can&apos;t wait to see what stories emerge when curiosity leads
              your investigators into the unknown.
            </Text>
            <Text className="font-bold text-white">
              The Inheritance of Ambrose Wincrest
              <br />
              Saturday, October 24th, 2026
              <br />
              3:30 PM to 11:30 PM
            </Text>
            <Text className="text-[#f6b26b]">
              Edmond American Legion Hall
              <br />
              101 E. 5th Street
              <br />
              Edmond, Oklahoma 73034
            </Text>
            <Text className="font-beth text-2xl text-white">
              Cthulhu fhtagn!
            </Text>
          </CthulhuBody>
        </Box>
      </Box>
    </CthulhuPageShell>
  );
}
