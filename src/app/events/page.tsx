import { Button } from "@/components/ui/button";
import EventCard from "@/components/ui/EventCard";
import Link from "next/link";
const events = [
  {
    title: "Pre-Chronicle Cast & Crew Connect",
    date: "February 15, 2025",
    time: "1:00 PM - 4:00 PM",
    location:
      "University of Central Oklahoma, Nigh University Center, 2nd Floor Lounge",
    description:
      "Come meet the crew, create your character & connect with your fellow players at this free pre-chronicle event.",
  },
  {
    title: "Reawakening: Game 1",
    date: "March 1, 2025",
    time: "2:30 PM - 10:00 PM",
    location:
      "University of Central Oklahoma, Nigh University Center, 4th Floor",
    description: (
      <>
        <p className="mb-4">Join us for Game 1 of Reawakening!</p>
        <Link
          href="https://central-oklahoma-live-action-games.square.site/
"
          passHref
        >
          <Button className="border border-gray-700 bg-primary-orange hover:bg-brand-300 text-white text-lg font-semibold py-2 px-6 rounded transition">
            Buy Tickets
          </Button>
        </Link>
      </>
    ),
  },
  {
    title: "Reawakening: Game 2",
    date: "May 3, 2025",
    time: "2:30 PM - 10:00 PM",
    location:
      "University of Central Oklahoma, Nigh University Center, 4th Floor",
  },
  {
    title: "Reawakening: Game 3",
    date: "July 5, 2025",
    time: "2:30 PM - 10:00 PM",
    location: "Will Rogers Gardens Exhibition Center",
  },
  {
    title: "Reawakening: Game 4",
    date: "Aug 30, 2025",
    time: "2:30 PM - 10:00 PM",
    location: "Will Rogers Gardens Exhibition Center",
  },
  {
    title: "Mid-Season Social Event",
    date: "October, 2025",
    location: "To be Announced",
  },
  {
    title: "Reawakening: Game 5",
    date: "November 22, 2025",
    time: "2:30 PM - 10:00 PM",
    location: "Will Rogers Gardens Exhibition Center",
  },
  {
    title: "Reawakening: Game 6",
    date: "January, 2026",
    location: "To be Announced",
  },
];

export default function EventsPage() {
  return (
    <div className="bg-secondary-blue text-white  font-lex p-8">
      <h1 className="text-4xl text-center text-primary-orange mb-8">
        Event Schedule
      </h1>
      <div className="space-y-8">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
}
