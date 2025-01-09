"use client";

import { Box, Heading, Text, List } from "@chakra-ui/react";
import Image from "@/components/overrides/image";
import Link from "next/link";
import MiniBanner from "@/components/ui/mini-banner";
import Hero from "@/components/ui/hero";
import { StaticBreadcrumbs } from "@/components/ui/breadcrumbs";
import RelatedLinks from "@/components/ui/related-links";

export default function ReawakeningPage() {
  return (
    <Box className="bg-background text-foreground">
      <Hero
        src="/images/reawakening/reawakening-welcome-banner.png"
        alt="Reawakening Event Banner"
      />

      <StaticBreadcrumbs
        routes={[
          { label: "Home", href: "/" },
          { label: "Reawakening", href: "#" },
        ]}
      />

      {/* Centered Image Section */}
      <Box className="flex justify-center py-8 bottom-border">
        <Image
          src="/images/reawakening/letter.jpeg"
          alt="Letter from the Founders"
          className="rounded-md shadow-lg max-w-[90%] md:max-w-[60%]"
        />
      </Box>

      {/* About Section */}
      <Box className="page-section">
        <MiniBanner
          src="/images/reawakening/welcome-to-our-chronicle.png"
          alt="Welcome to our chronicle"
        />
        <Text className="mb-4">
          <strong>Reawakening</strong> is our upcoming premier live-action
          experience, leveraging the newest <i>Vampire: The Masquerade</i>{" "}
          live-action ruleset. Join us when the chronicle kicks off on{" "}
          <strong>March 1, 2025</strong>.
        </Text>
        <Text className="mb-4">
          Whether you&apos;re an experienced player or brand new to live-action
          gaming, we’d love to see you there!
        </Text>
      </Box>

      {/* Requirements Section */}
      <Box className="page-section-alt">
        <Heading className="section-heading">What You’ll Need</Heading>
        <List.Root className="list-disc space-y-2">
          <List.Item>An approved character concept</List.Item>
          <List.Item>
            An approved character sheet using the v5 Laws of the Night rules
          </List.Item>
          <List.Item>
            An event ticket ($25 per event, or $100 for a Season Pass)
          </List.Item>
        </List.Root>
        <Text className="mt-4">
          Don’t worry! We will help you step-by-step with everything.
        </Text>
      </Box>

      {/* Call to Action Section */}
      <Box className="page-section text-center mb-4">
        <Heading className="section-heading">Ready to Get Started?</Heading>
        <Link
          href="/reawakening/getting-started"
          className="text-link inline-block"
        >
          Get Started Here
        </Link>
      </Box>
      <Box className="page-section-alt">
        <RelatedLinks
          links={[
            {
              label: "Character Creation",
              href: "/reawakening/character-creation",
              description:
                "Learn how to create your character and start your journey.",
            },
            {
              label: "Character Advancement",
              href: "/reawakening/character-advancement",
              description:
                "Discover how to advance your character and unlock new abilities.",
            },
            {
              label: "Supporting Cast",
              href: "/reawakening/supporting-cast",
              description: "Meet the important NPCs in the chronicle.",
            },
            {
              label: "Custom Loresheets",
              href: "/reawakening/custom-loresheets",
              description:
                "Check out the custom loresheets available for your character.",
            },
            {
              label: "City Timeline",
              href: "/reawakening/city-timeline",
              description:
                "Explore the history of Oklahoma City in the World of Darkness.",
            },
          ]}
        />
      </Box>
    </Box>
  );
}
