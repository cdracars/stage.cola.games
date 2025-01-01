"use client";

import { Box, Flex, Heading, Text, Button, Stack } from "@chakra-ui/react";
import Image from "@/components/overrides/image";
import Link from "next/link";

const Hero = () => {
  return (
    <Box bg="background" color="accent" py={16} px={8} className="mb-14">
      <Flex
        maxW="7xl"
        mx="auto"
        align="center"
        justify="space-between"
        direction={{ base: "column", lg: "row" }}
        className="space-y-8 lg:space-y-0"
      >
        {/* Text Section */}
        <Box maxW={{ base: "full", lg: "50%" }} className="pr-5">
          <Heading
            as="h1"
            size="2xl"
            fontWeight="bold"
            lineHeight="short"
            className="text-brand mb-4"
          >
            Welcome to COLA Games
          </Heading>
          <Text fontSize="lg" className="mb-8 text-textPrimary">
            Experience immersive live-action role-playing events. Create your
            character, step into thrilling stories, and bring the COLA universe
            to life!
          </Text>
          <Stack
            className="space-x-4"
            direction={{ base: "column", sm: "row" }}
          >
            <Link href="/events" passHref>
              <Button className="button-primary">View Events</Button>
            </Link>
            <Link href="/about-us" passHref>
              <Button className="button-secondary">Learn More</Button>
            </Link>
          </Stack>
        </Box>

        {/* Image Section */}
        <Box maxW={{ base: "full", lg: "50%" }} textAlign="center">
          <Image
            src="/hero-image.svg"
            alt="Hero Image"
            className="object-contain"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
