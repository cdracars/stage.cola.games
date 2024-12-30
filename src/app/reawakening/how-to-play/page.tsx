import { VStack, Box, Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function HowToPlayPage() {
  return (
    <VStack py={8}>
      <Heading>How to Play</Heading>
      <Text>
        Follow these steps to create your character and join the world of COLA.
      </Text>
      <Box>
        <Link href="/reawakening/city-timeline">
          <Button colorScheme="blue">Read City Timeline</Button>
        </Link>
        <Link href="/reawakening/how-to-play/character-creation">
          <Button colorScheme="green">Character Creation Guide</Button>
        </Link>
      </Box>
    </VStack>
  );
}
