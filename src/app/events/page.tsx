import { Box, Heading } from "@chakra-ui/react";
import EventCard from "@/components/ui/EventCard";
import { StaticBreadcrumbs } from "@/components/ui/breadcrumbs";
import Image from "@/components/overrides/image";

const events = [
  {
    title: "A Crown of Storms: Stillwater",
    date: "March 28, 2026",
    time: "9:30 AM - 4:00 PM",
    location: "Stillwater Public Library\n1107 S Duck St, Stillwater, OK 74074",
    ctaLabel: "Free Registration",
    ctaHref: "https://forms.gle/BwcxMGtUy2xa6xgZA",
  },
  {
    title: "A Crown of Storms: Tulsa",
    date: "April 11, 2026",
    time: "2:30 PM - 10:00 PM",
    location: "Clare Michael Event Space\n2314 E Admiral Blvd, Tulsa, OK 74110",
    ctaLabel: "Buy Tickets",
    ctaHref: "https://central-oklahoma-live-action-games.square.site/",
  },
  {
    title: "A Crown of Storms: Oklahoma City",
    date: "April 25, 2026",
    time: "4:00 PM - 11:30 PM",
    location:
      "Memorial Park Cemetery Historic Chapel\n13400 N Kelley Ave, Oklahoma City, OK 73131",
    ctaLabel: "Buy Tickets",
    ctaHref: "https://central-oklahoma-live-action-games.square.site/",
  },
  {
    title: "A Crown of Storms: Finale",
    date: "May 16, 2026",
    time: "12:30 PM - 10:00 PM",
    location: "The Ivy Event Space\n10604 N Sheridan Rd, Sperry, OK 74073",
    ctaLabel: "Buy Tickets",
    ctaHref: "https://central-oklahoma-live-action-games.square.site/",
  },
];

export default function EventsPage() {
  return (
    <Box className="bg-secondary-blue text-white page-section">
      <Box className="bottom-border">
        <Image
          src="/images/logos/COLA_Logo_box_candy.svg"
          alt="COLA Games Logo"
          className="block mx-auto w-[350px] h-auto object-contain mb-4"
        />
      </Box>

      <StaticBreadcrumbs
        routes={[
          { label: "Home", href: "/" },
          { label: "Events", href: "#" },
        ]}
      />

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
