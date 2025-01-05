import { Box, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import SectionHeadingsCentered from "./section-headings-centered";

interface CharacterProfileProps {
  name: string;
  title: string;
  description: ReactNode[];
}

const CharacterProfile: React.FC<CharacterProfileProps> = ({
  name,
  title,
  description,
}) => {
  return (
    <Box className="page-section bottom-border">
      <SectionHeadingsCentered
        section_heading={name}
        subsection_heading={title}
      />
      {/* Character Description */}
      {description.map((paragraph, index) => (
        <Text key={index} className="mb-4">
          {paragraph}
        </Text>
      ))}
    </Box>
  );
};

export default CharacterProfile;
