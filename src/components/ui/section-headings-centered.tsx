import { Heading } from "@chakra-ui/react";

const SectionHeadingsCentered: React.FC<{
  section_heading: string;
  subsection_heading: string;
}> = ({ section_heading, subsection_heading }) => {
  return (
    <>
      {/* Section Heading */}
      <Heading
        as="h2"
        className="subheading-alt !text-inherit text-center !mb-0"
      >
        {section_heading}
      </Heading>

      {/* Sub-Section Heading */}
      <Heading as="h3" className="subheading-alt-2 text-center">
        {subsection_heading}
      </Heading>
    </>
  );
};

export default SectionHeadingsCentered;
