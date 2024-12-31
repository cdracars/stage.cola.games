"use client";

import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";

const Hero = () => {
  return (
    <Box
      className="mb-5 font-fell"
      bg="background"
      color="accent"
      py={16}
      px={8}
    >
      <Flex
        maxW="7xl"
        mx="auto"
        align="center"
        justify="space-between"
        direction={{ base: "column-reverse", lg: "row" }}
        className="space-y-8 lg:space-y-0"
      >
        {/* Text Section */}
        <Box
          maxW={{ base: "full", lg: "50%" }}
          textAlign={{ base: "center", lg: "left" }}
          px={4}
        >
          <Heading
            as="h1"
            size="2xl"
            fontWeight="bold"
            lineHeight="short"
            className="text-brand mb-4 font-marcellus"
          >
            Welcome to COLA Games
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            className="mb-8 text-gray-800"
            color="accent"
            lineHeight="1.8"
          >
            Experience immersive live-action role-playing events. Create your
            character, step into thrilling stories, and bring the COLA universe
            to life!
          </Text>
          <Stack
            className="space-y-4 sm:space-y-0 sm:space-x-4"
            direction={{ base: "column", sm: "row" }}
            justify={{ base: "center", lg: "flex-start" }}
          >
            <Link href="/events" passHref>
              <Button
                as="a"
                colorScheme="brand"
                bg="brand.500"
                _hover={{ bg: "brand.600" }}
                size="lg"
              >
                View Events
              </Button>
            </Link>
            <Link href="/about-us" passHref>
              <Button
                as="a"
                colorScheme="gray"
                bg="gray.400"
                color="white"
                _hover={{ bg: "gray.700" }}
                size="lg"
              >
                Learn More
              </Button>
            </Link>
          </Stack>
        </Box>

        {/* Image Section */}
        <Box maxW={{ base: "full", lg: "50%" }} textAlign="center">
          <Image
            src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ""}/hero-image.svg`}
            alt="Hero Image"
            className="object-cover mx-auto"
            boxSize={{ base: "300px", md: "400px", lg: "500px" }} // Responsive sizing
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
