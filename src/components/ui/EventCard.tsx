// components/EventCard.js
interface EventCardProps {
  title: string;
  date: string;
  time?: string;
  location: React.ReactNode;
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
      <div className="event-text">{location}</div>
      {description && <div className="event-description">{description}</div>}
    </div>
  );
};

export default EventCard;
