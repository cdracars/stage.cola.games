"use client";

import Section from "@/components/ui/section";
import { Box, Text } from "@chakra-ui/react";

export default function LiveActionSection() {
  return (
    <Section title="What is live-action gaming?">
      <Box className="space-y-4">
        <Text className="text-lg text-gray-300">
          Live-action roleplaying (or <strong>LARP</strong>, as it’s commonly
          called) is very similar to a tabletop roleplaying game like{" "}
          <span className="font-semibold text-brand-500">
            Dungeons and Dragons
          </span>
          . Players generate and portray a character, interacting and making
          decisions for that character. Another player (often called a{" "}
          <span className="font-semibold">GM</span> or{" "}
          <span className="font-semibold">Storyteller</span>) describes the game
          world, filling it with interesting characters, stories, and challenges
          for player characters to overcome.
        </Text>
        <Text className="text-lg text-gray-300">
          The key difference with live-action is, rather than sitting around a
          table with your friends describing what your character does and how
          they act, you move around and interact with your friends and the
          environment as if you were your character!
        </Text>
      </Box>
    </Section>
  );
}
