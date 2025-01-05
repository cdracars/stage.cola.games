import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface LoresheetEntryProps {
  name: string;
  dots: number;
  description: React.ReactNode;
}

const LoresheetEntry: React.FC<LoresheetEntryProps> = ({
  name,
  dots,
  description,
}) => {
  return (
    <Box className="bg-background text-foreground pl-12 mb-4">
      {/* Dots Section */}
      <Text className="font-fell">
        {Array.from({ length: dots }).map((_, index) => (
          <span className="" key={index}>
            ●
          </span>
        ))}
        <span className="text-inherit font-bold ml-1">{name}</span> -{" "}
        {description}
      </Text>
    </Box>
  );
};

export default LoresheetEntry;
