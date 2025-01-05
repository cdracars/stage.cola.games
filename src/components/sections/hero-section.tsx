"use client";

import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import Image from "@/components/overrides/image";
import Link from "next/link";

const Hero = () => {
  return (
    <Box className="border-b-2 border-gray-700 relative w-full h-[60vh] md:h-[80vh]">
      {/* Background Image */}
      <Box className="absolute inset-0">
        <Image
          src="/images/hero.svg" // Replace with your image path
          alt="Hero Background"
          objectFit="cover"
          className="w-full h-full"
        />
      </Box>

      {/* Content Overlay */}
      <VStack className="absolute inset-0 flex items-center justify-center text-center px-4 bg-black/50 space-x-4">
        <Heading
          as="h1"
          className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg"
        >
          Welcome to COLA Games
        </Heading>
        <Text className="text-white text-lg md:text-xl drop-shadow-md">
          Experience immersive live-action role-playing events. Create your
          character, step into thrilling stories, and bring the COLA universe to
          life!
        </Text>
        <Box className="flex flex-wrap justify-center gap-4">
          <Link href="/events" passHref>
            <Button className="border border-gray-700 bg-brand-500 hover:bg-brand-300 text-white text-lg font-semibold py-2 px-6 rounded transition">
              View Events
            </Button>
          </Link>
          <Link href="/about-us" passHref>
            <Button
              variant="outline"
              className="border border-gray-700 bg-brand-700 text-white text-lg font-semibold py-2 px-6 rounded hover:bg-brand-500 hover:text-white transition"
            >
              Learn More
            </Button>
          </Link>
        </Box>
      </VStack>
    </Box>
  );
};

export default Hero;
