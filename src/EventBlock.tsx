import ImageCarousel from "./ImageCarousel";

interface EventProps {
  title: string;
  date: string;
  info: string;
  detail: string;
  rating: string;
  images: string[];
  reverse?: boolean;
  compact?: boolean; // ← New!
}

const EventBlock = ({ title, date, info, detail, rating, images, reverse, compact }: EventProps) => {
  return (
    <div className={`two-column ${reverse ? "reverse" : ""} ${compact ? "compact" : ""}`}>
    <div className="column left">
        <h3>{date}</h3>
        <h4 id="emph" dangerouslySetInnerHTML={{ __html: info }} />
        {/* Use dangerouslySetInnerHTML to render HTML content */}
        <div dangerouslySetInnerHTML={{ __html: detail }} />
        {rating && rating.trim() !== "" && <h4>{rating}</h4>}
    </div>
    <div className="column right">
        {images.length > 0 && (
          <img src={images[0]} alt={`Event: ${title}`} className="photo" />
        )}
    </div>
    </div>
  );
};



export default EventBlock;
