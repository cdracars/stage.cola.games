"use client";

import { Box, Heading } from "@chakra-ui/react";
import React from "react";

export const CollapsibleSection: React.FC<{
  title: string;
  children: React.ReactNode;
  className?: string;
}> = ({ title, children, className = "" }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Box className={`mb-6 ${className}`}>
      <Heading
        as="h3"
        className="text-md font-bold cursor-pointer hover:underline"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </Heading>
      {isOpen && <Box className="mt-4">{children}</Box>}
    </Box>
  );
};
