// components/EventCard.js
interface EventCardProps {
  title: string;
  date: string;
  time?: string;
  location: React.ReactNode;
  address?: string;
  description?: React.ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  time,
  location,
  description,
  ctaLabel,
  ctaHref,
}) => {
  return (
    <div className="event-card">
      <h2 className="event-heading font-lucky text-primary-orange">{title}</h2>
      <p className="event-text font-bold">
        {date} {time && <span> | {time}</span>}
      </p>
      <div className="event-text">{location}</div>
      {description && <div className="event-description">{description}</div>}
      {ctaLabel && ctaHref && (
        <div className="text-center mt-4">
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-orange text-white font-semibold px-5 py-2 rounded-md hover:opacity-90 transition-opacity"
          >
            {ctaLabel}
          </a>
        </div>
      )}
    </div>
  );
};

export default EventCard;
