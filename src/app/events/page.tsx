import EventCard from "@/components/ui/EventCard";
const events = [
  //   {
  //     title: "Pre-Chronicle Cast & Crew Connect",
  //     date: "February 15, 2025",
  //     time: "1:00 PM - 4:00 PM",
  //     location:
  //       "University of Central Oklahoma, Nigh University Center, 2nd Floor Lounge",
  //     description:
  //       "Come meet the crew, create your character & connect with your fellow players at this free pre-chronicle event.",
  //   },
  //   {
  //     title: "Reawakening: Game 1",
  //     date: "March 1, 2025",
  //     time: "2:30 PM - 10:00 PM",
  //     location:
  //       "University of Central Oklahoma, Nigh University Center, 4th Floor",
  //     description: (
  //       <>
  //         <p className="mb-4">Join us for Game 1 of Reawakening!</p>
  //         <Link
  //           href="https://central-oklahoma-live-action-games.square.site/
  // "
  //           passHref
  //         >
  //           <Button className="border border-gray-700 bg-primary-orange hover:bg-brand-300 text-white text-lg font-semibold py-2 px-6 rounded transition">
  //             Buy Tickets
  //           </Button>
  //         </Link>
  //       </>
  //     ),
  //   },
  {
    title: "Reawakening: Game 6",
    date: "January 17, 2026",
    time: "2:30 PM - 10:00 PM",
    location: (
      <div className="leading-tight">
        <span className="font-bold text-primary-orange">New Location!</span>{" "}
        The Hilton Skirvin Hotel, Floor 14 - One Park Ave, Oklahoma City, OK
        73102
      </div>
    ),
    description: (
      <div className="mt-4">
        <a
          href="https://central-oklahoma-live-action-games.square.site/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="border border-gray-700 bg-primary-orange hover:bg-brand-300 text-white text-lg font-semibold py-2 px-6 rounded transition">
            Buy Tickets
          </button>
        </a>
      </div>
    ),
  },
  {
    title: "A Crown of Storms: Stillwater",
    date: "March 28, 2026",
    time: "9:30 AM - 4:00 PM",
    location: "Stillwater Public Library\n1107 S Duck St, Stillwater, OK 74074",
  },
  {
    title: "A Crown of Storms: Tulsa",
    date: "April 11, 2026",
    time: "2:30 PM - 10:00 PM",
    location: "Clare Michael Event Space\n2314 E Admiral Blvd, Tulsa, OK 74110",
  },
  {
    title: "A Crown of Storms: Oklahoma City",
    date: "April 25, 2026",
    time: "4:00 PM - 11:30 PM",
    location: "Memorial Park Cemetery Historic Chapel\n13400 N Kelley Ave, Oklahoma City, OK 73131",
  },
  {
    title: "A Crown of Storms: Finale",
    date: "May 16, 2026",
    time: "12:30 PM - 10:00 PM",
    location: "The Ivy Event Space\n10604 N Sheridan Rd, Sperry, OK 74073",
  },
];

export default function EventsPage() {
  return (
    <div className="bg-secondary-blue text-white  font-lex p-8">
      <h1 className="text-4xl text-center text-primary-orange mb-8 font-lucky">
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
