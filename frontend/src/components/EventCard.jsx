import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

function EventCard({ title, description, image, id }) {
  return (
    <Link
      to={`/event/${id}`}
      className="min-w-[310px] max-w-[310px] custom-shadow p-3 rounded-md hover:scale-105 transition-all duration-150 ease-in-out cursor-pointer bg-white"
    >
      {/* Lazy Loaded Image with Blur Effect */}
      <LazyLoadImage
        src={image}
        alt={title}
        effect="blur"
        className="w-[310px] h-[200px] rounded-md object-cover"
      />
      <p className="text-md py-1 line-clamp-1">{title}</p>
      <p className="text-sm text-slate-700 line-clamp-3">{description}</p>
      <div className="flex justify-between py-2">
        <button className="border w-full bg-blue-100 border-blue-600 text-blue-600 py-1 px-4 rounded-md text-sm">
          Learn more
        </button>
      </div>
    </Link>
  );
}

export default EventCard;
