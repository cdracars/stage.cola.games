"use client";

import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Image,
} from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const { open, onToggle } = useDisclosure();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Reawakening", href: "/reawakening" },
    { name: "Events", href: "/events" },
  ];
  console.log("Menu open state:", open);
  return (
    <Box bg="gray.900" color="white" px={4} shadow="md">
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        maxW="1200px"
        mx="auto"
      >
        {/* Logo */}
        <HStack className="space-x-2">
          <Image
            src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ""}/logo.png`}
            alt="COLA Games Logo"
            boxSize="40px"
            objectFit="contain"
          />
          <Box fontSize="xl" fontWeight="bold" color="brand.500">
            COLA Games
          </Box>
        </HStack>

        {/* Desktop Navigation */}
        <HStack
          as="nav"
          className="space-x-8"
          display={{ base: "none", md: "flex" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              _hover={{ color: "brand.500" }}
              fontWeight="medium"
            >
              {link.name}
            </Link>
          ))}
        </HStack>

        {/* Mobile Menu Button */}
        <IconButton
          aria-label="Open Menu"
          // className="md:hidden"
          onClick={() => {
            console.log("Button clicked!");
            onToggle();
          }}
          variant="outline"
          colorScheme="brand"
          display={{ md: "none" }}
        >
          {open ? <FaTimes /> : <FaBars />}
        </IconButton>
      </Flex>

      {/* Mobile Navigation */}
      {open && (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" className="space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                _hover={{ color: "brand.500" }}
                fontWeight="medium"
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
