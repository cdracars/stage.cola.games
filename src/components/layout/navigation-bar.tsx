"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, Flex, Button } from "@chakra-ui/react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Reawakening", href: "/reawakening/how-to-play" },
  { name: "Events", href: "/events" },
];

export default function NavigationBar() {
  const pathname = usePathname();

  return (
    <Box bg="gray.800" color="white" py={4} px={8}>
      <Flex justify="space-between" align="center" maxW="6xl" mx="auto">
        {/* Logo */}
        <Link href="/" passHref>
          <Button
            variant="ghost"
            fontSize="xl"
            fontWeight="bold"
            color="white"
            _hover={{ textDecoration: "none" }}
          >
            COLA Games
          </Button>
        </Link>

        {/* Navigation Links */}
        <Flex gap={4}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} passHref>
              <Button
                variant="ghost"
                colorScheme="whiteAlpha"
                bg={pathname === link.href ? "gray.700" : "transparent"}
                _hover={{ bg: "gray.700" }}
                _focus={{ boxShadow: "outline" }}
              >
                {link.name}
              </Button>
            </Link>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}
