import { Box, Heading } from "@chakra-ui/react";
import EventCard from "@/components/ui/EventCard";

const events = [
  {
    title: "Cthulhu Live: The Inheritance of Ambrose Wincrest",
    date: "October 24th, 2026",
    time: "3:30 - 11:30PM",
    location:
      "Edmond American Legion Hall\n101 E. 5th Street, Edmond, Oklahoma 73034",
    ctaLabel: "Buy Tickets",
    ctaHref: "https://central-oklahoma-live-action-games.square.site/",
  },
];

export default function EventsPage() {
  return (
    <Box className="bg-secondary-blue text-white page-section">
      <Box className="page-section !font-lex">
        <Heading className="text-center mb-8 !font-lucky !text-primary-orange">
          Event Schedule
        </Heading>

        <Box className="space-y-8">
          {events.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
