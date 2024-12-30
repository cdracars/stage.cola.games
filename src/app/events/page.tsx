import { VStack, Box, Heading, Text, Link } from "@chakra-ui/react";

export default function EventsPage() {
  return (
    <VStack align="start" py={8} px={4}>
      <Heading>Upcoming Events</Heading>
      <Box>
        <Text fontWeight="bold">December 20, 2024</Text>
        <Text>Winter Campaign Kickoff</Text>
        <Link href="https://example.com/tickets" color="blue.500">
          Buy Tickets
        </Link>
      </Box>
      <Box>
        <Text fontWeight="bold">January 15, 2025</Text>
        <Text>New Year’s LARP Extravaganza</Text>
        <Link href="https://example.com/tickets" color="blue.500">
          Buy Tickets
        </Link>
      </Box>
    </VStack>
  );
}
