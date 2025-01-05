"use client";

import { SimpleGrid, Box, Text } from "@chakra-ui/react";
import FeatureCard from "@/components/ui/feature-card";

const features = [
  {
    title: "What We Do",
    description: (
      <>
        <Text>
          Discover our unique approach to live-action role-playing games.
        </Text>
        <Text>Immerse yourself in thrilling adventures today!</Text>
      </>
    ),
    image: "/images/what-we-do-square.jpeg",
    link: "/what-we-do",
  },
  {
    title: "Join the Guild",
    description: (
      <>
        <Text>Become a member of our vibrant community.</Text>
        <Text>Forge alliances and embark on thrilling quests.</Text>
      </>
    ),
    image: "/images/join-us-on-discord.jpeg",
    link: "/join-the-guild",
  },
  {
    title: "Reawakening",
    description: (
      <>
        <Text>
          Step into the world of Vampire: The Masquerade with our flagship
          event,
          <strong> Reawakening</strong>.
        </Text>
      </>
    ),
    image: "/images/reawakening-splash-square.jpeg",
    link: "/reawakening",
  },
];

const FeatureSection = () => {
  return (
    <Box className="py-16 px-8 bg-gray-800">
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        className="items-stretch space-x-8"
      >
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default FeatureSection;
