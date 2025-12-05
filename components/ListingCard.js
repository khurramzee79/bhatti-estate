import Link from 'next/link';
import { MapPin, Bed, Bath, Maximize } from 'lucide-react';

export default function ListingCard({ listing }) {
  const { title, slug, price, location, bedrooms, bathrooms, size, image, category } = listing;

  // FIX: Check if price exists before formatting
  const formattedPrice = price 
    ? new Intl.NumberFormat('en-PK', {
        style: 'currency',
        currency: 'PKR',
        maximumSignificantDigits: 3
      }).format(price)
    : 'Price Upon Request'; // Default fallback text

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
      <div className="relative h-56 bg-gray-200">
        <img src={image || '/assets/BhattiEstate.png'} alt={title} className="w-full h-full object-cover" />
        <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wide">
          {category}
        </span>
        <span className="absolute bottom-4 left-4 bg-white text-secondary text-xs font-bold px-2 py-1 rounded shadow">
          {formattedPrice}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <MapPin size={14} className="mr-1" /> {location}
        </div>
        <h3 className="text-xl font-heading font-bold text-secondary mb-3 line-clamp-1">{title}</h3>
        <div className="flex justify-between border-t pt-4 text-sm text-gray-600">
          <div className="flex items-center"><Bed size={16} className="mr-1" /> {bedrooms} Bed</div>
          <div className="flex items-center"><Bath size={16} className="mr-1" /> {bathrooms} Bath</div>
          <div className="flex items-center"><Maximize size={16} className="mr-1" /> {size} sqft</div>
        </div>
        <Link href={`/listings/${slug}`} className="block mt-4 text-center w-full py-2 border border-primary text-primary font-bold rounded hover:bg-primary hover:text-white transition-colors">
          View Details
        </Link>
      </div>
    </div>
  );
}
