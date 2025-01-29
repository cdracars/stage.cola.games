import { Box, Text, Heading } from "@chakra-ui/react";

interface BlockquoteProps {
  heading?: string;
  text: React.ReactNode;
  author?: string;
}

const Blockquote: React.FC<BlockquoteProps> = ({ heading, text, author }) => {
  return (
    <>
      {heading && (
        <Heading className="-mb-8 text-brand-500 font-bold">{heading}</Heading>
      )}
      <Box
        as="blockquote"
        className="relative my-8 px-6 py-4 bg-gray-800 text-gray-300 rounded-md border-l-4 border-brand-500"
      >
        {typeof text === "string" ? (
          <Text className="italic">{text}</Text>
        ) : (
          text
        )}
        {author && (
          <Text
            as="cite"
            className="block mt-4 text-right text-sm font-semibold text-brand-400"
          >
            — {author}
          </Text>
        )}
      </Box>
    </>
  );
};

export default Blockquote;
