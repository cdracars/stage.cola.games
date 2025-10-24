// components/EventCard.js
interface EventCardProps {
  title: string;
  date: string;
  time?: string;
  location: string;
  address?: string;
  description?: React.ReactNode;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  time,
  location,
  description,
}) => {
  return (
    <div className="event-card">
      <h2 className="event-heading font-lucky text-primary-orange">{title}</h2>
      <p className="event-text font-bold">
        {date} {time && <span> | {time}</span>}
      </p>
      <p className="event-text">{location}</p>
      {description && <p className="event-description">{description}</p>}
    </div>
  );
};

export default EventCard;
