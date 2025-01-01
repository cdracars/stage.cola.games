"use client";

import Section from "@/components/ui/section";
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <Section title="Who are we?">
      <Box className="space-y-4">
        <Text className="text-lg text-gray-300">
          Central Oklahoma Live Action Games (or <strong>COLA Games</strong>,
          for short) is a club of tabletop and live-action gamers looking to
          evolve and grow the hobby of live-action roleplay in the central
          Oklahoma area.
        </Text>
        <Text className="text-lg text-gray-300">
          Leveraging nearly a combined century as players and hosts of
          live-action experiences, we aim to create immersive and engaging
          events for both experienced players and those new to the hobby.
        </Text>
        <Text className="text-lg text-gray-300">
          <Link
            href="/reawakening"
            className="text-brand-500 font-semibold hover:underline"
          >
            Click here
          </Link>{" "}
          to explore our upcoming premier{" "}
          <span className="font-semibold text-brand-600">
            Vampire: The Masquerade
          </span>{" "}
          event, <strong>Reawakening</strong>, and stay tuned for further events
          in the central Oklahoma area.
        </Text>
      </Box>
    </Section>
  );
}
