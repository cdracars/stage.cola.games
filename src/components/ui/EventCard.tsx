// components/EventCard.js
interface EventCardProps {
  title: string;
  date: string;
  time?: string;
  location: string;
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
      <h2 className="event-heading">{title}</h2>
      <p className="event-text">
        {date} {time && ` | ${time}`}
      </p>
      <p className="event-text">{location}</p>
      {description && <p className="event-description">{description}</p>}
    </div>
  );
};

export default EventCard;
