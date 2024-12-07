/**
 * @fileoverview
 * This component renders a visually appealing "Under Construction" page for COLA Games.
 * It uses Chakra UI and FontAwesome icons to create a clean, responsive layout.
 * This version uses a black background and adjusts the layout for improved readability.
 *
 * Usage:
 * 1. Ensure Chakra UI and react-icons are installed:
 *    npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion react-icons
 * 2. Import and render <UnderConstructionPage /> in your Next.js page.
 *
 * Why these changes?
 * - Using a solid black background and carefully chosen text colors increases contrast.
 * - A constrained max-width and spacing improves text readability and focus.
 * - Using gray tones for secondary text provides visual hierarchy and depth.
 *
 * Example:
 * ```jsx
 * // In your Next.js page:
 * import UnderConstructionPage from './UnderConstructionPage';
 *
 * export default function Home() {
 *   return <UnderConstructionPage />;
 * }
 * ```
 */

"use client";

import {
  Box,
  Center,
  VStack,
  Heading,
  Text,
  Button,
  IconButton,
  Image,
  Link
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function UnderConstructionPage() {
  return (
    <Center minH="100vh" bg="black" p={6}>
      <Box
        w="100%"
        maxW="md"
        mx="auto"
        textAlign="center"
        color="white"
      >
        <VStack textAlign="center" color="white">
          {/* Placeholder logo; replace /logo.png when available */}
          <Image
            src="/logo.png"
            alt="Insert Logo Here"
            boxSize="120px"
            mb={4}
          />

          <Heading fontSize="4xl" color="whiteAlpha.900" lineHeight="shorter">
            COLA Games
          </Heading>

          <Text fontSize="lg" color="gray.300" lineHeight="tall">
            Our gaming universe is getting a makeover! Stay tuned for the epic launch.
          </Text>

          <Text fontSize="sm" color="gray.400">
            Estimated Launch: <strong>Mid December 2024</strong>
          </Text>

          <Link href="mailto:staff@cola.games" style={{ textDecoration: "none" }}>
            <Button
              colorScheme="blue"
              size="lg"
              mt={4}
              borderRadius="full"
            >
              <FaEnvelope /> Contact Us
            </Button>
          </Link>

        </VStack>
      </Box>
    </Center>
  );
}
