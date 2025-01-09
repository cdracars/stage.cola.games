import { Box, Heading, Flex, Link, Text } from "@chakra-ui/react";

interface RelatedLink {
  label: string;
  href: string;
  description?: string; // Optional description for additional context
}

interface RelatedLinksProps {
  links: RelatedLink[];
}

export default function RelatedLinks({ links }: RelatedLinksProps) {
  return (
    <Box className="bg-gray-900 text-white py-6 px-4 my-8 rounded-md shadow-md">
      <Heading
        as="h3"
        className="text-lg font-bold mb-4 text-center text-gray-300 font-cinzel"
      >
        Explore More
      </Heading>
      <Flex
        className="justify-center flex-wrap gap-6"
        flexDirection={{ base: "column", md: "row" }}
      >
        {links.map((link) => (
          <Box key={link.href} className="text-center max-w-xs">
            <Link
              href={link.href}
              className="text-brand-500 font-bold text-lg hover:underline"
            >
              {link.label}
            </Link>
            {link.description && (
              <Text className="text-sm text-gray-400 mt-2">
                {link.description}
              </Text>
            )}
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
