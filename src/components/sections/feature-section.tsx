"use client";

import { SimpleGrid, Box, Text } from "@chakra-ui/react";
import FeatureCard from "@/components/ui/feature-card";

const features = [
  {
    title: "About our Club",
    description: (
      <>
        <Text>
          Learn about our club and mission, discover the hobby of live-action
          gaming, and explore our upcoming live-action experiences!
        </Text>
      </>
    ),
    image: "/images/home/who-we-are-rps-square.jpeg",
    link: "/about-us",
  },
  {
    title: "Join Our Community",
    description: (
      <>
        <Text>
          The COLA Games Discord channel is a great way to meet other gamers in
          the COLA community and connect with our upcoming events.
        </Text>
      </>
    ),
    image: "/images/home/join-us-on-discord-square.jpeg",
    link: "https://discord.gg/5p59HPmtYH",
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
    image: "/images/home/reawakening-splash-square.jpeg",
    link: "/reawakening",
  },
];

const FeatureSection = () => {
  return (
    <Box className="py-16 px-8 bg-secondary-blue">
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} className="gap-8">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default FeatureSection;
