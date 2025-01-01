"use client";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "@/components/overrides/image";

const Header = () => {
  const { open, onToggle } = useDisclosure();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Reawakening", href: "/reawakening/how-to-play" },
    { name: "Events", href: "/events" },
  ];

  return (
    <Box className="bg-gray-800 text-white shadow-md px-4 font-della">
      <Flex className="h-16 items-center justify-between max-w-screen-xl mx-auto">
        {/* Logo */}
        <HStack className="space-x-2">
          <Image
            src="/logo.png"
            alt="COLA Games Logo"
            className="h-10 w-10 object-contain"
          />
          <Box className="text-xl font-bold text-inherit">COLA Games</Box>
        </HStack>

        {/* Desktop Navigation */}
        <HStack as="nav" className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-medium hover:text-brand-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </HStack>

        {/* Mobile Menu Button */}
        <IconButton
          aria-label="Open Menu"
          onClick={onToggle}
          className="md:hidden border border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white"
        >
          {open ? <FaTimes /> : <FaBars />}
        </IconButton>
      </Flex>

      {/* Mobile Navigation */}
      {open && (
        <Box className="pb-4 md:hidden">
          <Stack as="nav" className="space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium hover:text-brand-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Header;
