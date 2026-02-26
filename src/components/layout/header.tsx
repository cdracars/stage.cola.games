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
import { usePathname } from "next/navigation";

const Header = () => {
  const { open, onToggle } = useDisclosure();
  const pathname = usePathname();

  const isReawakeningPath = pathname.startsWith("/reawakening");
  const isAcosPath = pathname.startsWith("/a-crown-of-storms");
  const classes = isReawakeningPath
    ? "bg-gray-700 text-gray-100 bottom-border"
    : isAcosPath
    ? "text-gray-100 bottom-border"
    : "bg-primary-blue text-white";
  const style = isAcosPath
    ? { backgroundColor: "#1e1432", borderColor: "#f1c232" }
    : undefined;
  const font = isReawakeningPath || isAcosPath ? "font-della" : "font-lucky";
  const hover = isReawakeningPath
    ? "hover:text-brand-500"
    : isAcosPath
    ? "hover:text-[#f1c232]"
    : "hover:text-primary-orange";
  const vamp = isReawakeningPath || isAcosPath ? "vamp" : "candy";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "A Crown of Storms", href: "/a-crown-of-storms" },
    { name: "Events", href: "/events" },
  ];

  return (
    <Box className={`${classes} px-4 ${font} shadow-md`} style={style}>
      <Flex className="h-16 items-center justify-between max-w-screen-xl mx-auto">
        {/* Logo */}
        <Link href="/" className="w-100">
          <HStack className="space-x-2">
            <Image
              src={`/images/logos/COLA_Logo_long_${vamp}.svg`}
              alt="COLA Games Logo"
              className="w-[148.5px] h-auto object-contain"
            />
          </HStack>
        </Link>

        {/* Desktop Navigation */}
        <HStack
          as="nav"
          className="space-x-8 text-lg font-medium"
          display={{ base: "none", md: "flex" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              // className="hover:text-brand-500 transition-colors"
              className={`${hover} transition-colors duration-200`}
            >
              {link.name}
            </Link>
          ))}
        </HStack>

        {/* Mobile Menu Button */}
        <IconButton
          aria-label="Open Menu"
          onClick={onToggle}
          className="md:hidden border border-brand-500 text-white hover:bg-brand-500 hover:text-white"
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
