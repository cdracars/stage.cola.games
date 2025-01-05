import { Box } from "@chakra-ui/react";
import React from "react";
import Image from "../overrides/image";

interface HeroProps {
  src: string; // The image source
  alt: string; // The alt text for accessibility
  className?: string; // Optional: Additional TailwindCSS classes
}

const Hero: React.FC<HeroProps> = ({ src, alt, className = "" }) => {
  return (
    <Box
      className={`relative w-full overflow-hidden aspect-video bottom-border ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        className="inset-0 w-full h-full object-cover"
      />
    </Box>
  );
};

export default Hero;
