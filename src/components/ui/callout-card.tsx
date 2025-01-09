import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "@/components/overrides/image";
import React from "react";

interface CalloutCardProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: React.ReactNode;
  className?: string;
}

export default function CalloutCard({
  title,
  imageSrc,
  imageAlt,
  description,
  className = "",
}: CalloutCardProps) {
  return (
    <Box
      className={`border rounded-lg overflow-hidden shadow-md bg-primary-orange text-white max-w-sm mx-auto ${className}`}
    >
      <Heading
        as="h3"
        className="text-lg font-bold text-center uppercase tracking-wide my-4"
      >
        {title}
      </Heading>
      {/* Image Section */}
      <Box className="relative h-56 w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          objectFit="cover"
          className="w-full h-full"
        />
      </Box>

      {/* Content Section */}
      <Box className="p-4">
        <Text className="text-sm leading-relaxed">{description}</Text>
      </Box>
    </Box>
  );
}
