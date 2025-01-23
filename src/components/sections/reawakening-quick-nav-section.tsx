import { Box } from "@chakra-ui/react";
import RelatedLinks from "../ui/related-links";

const ReawakeningQuickLinks = () => {
  return (
    <Box className="page-section-alt">
      <RelatedLinks
        links={[
          {
            label: "Character Creation",
            href: "/reawakening/character-creation",
            description:
              "Learn how to create your character and start your journey.",
          },
          {
            label: "Character Advancement",
            href: "/reawakening/character-advancement",
            description:
              "Discover how to advance your character and unlock new abilities.",
          },
          {
            label: "Custom Mechanics",
            href: "/reawakening/custom-mechanics",
            description:
              "Take a look at the custom mechanics in our chronicle.",
          },
          {
            label: "Supporting Cast",
            href: "/reawakening/supporting-cast",
            description: "Meet the important NPCs in the chronicle.",
          },
          {
            label: "Custom Loresheets",
            href: "/reawakening/custom-loresheets",
            description:
              "Check out the custom loresheets available for your character.",
          },
          {
            label: "City Timeline",
            href: "/reawakening/city-timeline",
            description:
              "Explore the history of Oklahoma City in the World of Darkness.",
          },
        ]}
      />
    </Box>
  );
};

export default ReawakeningQuickLinks;
