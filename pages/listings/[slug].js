import Layout from '../../components/Layout';
import { getContent, getSingleContent } from '../../lib/api';
import ReactMarkdown from 'react-markdown';
import { Phone, Mail } from 'lucide-react';

export default function ListingPage({ listing, content }) {
  if (!listing) return null;
// FIX: Use optional chaining or conditional logic for price formatting
  const formattedPrice = listing.price 
    ? new Intl.NumberFormat('en-PK', {
        style: 'currency',
        currency: 'PKR',
        maximumSignificantDigits: 3
      }).format(listing.price)
    : 'Price Upon Request';
  return (
    <Layout title={listing.title}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-heading font-bold mb-2">{listing.title}</h1>
            <p className="text-gray-500 mb-6">{listing.address}</p>
            
            <img src={listing.image} alt={listing.title} className="w-full h-96 object-cover rounded-lg mb-8" />
            
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-xl font-bold mb-4 border-b pb-2">Property Details</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div><span className="font-bold block">Price</span> {formattedPrice}</div>
                <div><span className="font-bold block">Type</span> {listing.category}</div>
                <div><span className="font-bold block">Beds</span> {listing.bedrooms}</div>
                <div><span className="font-bold block">Baths</span> {listing.bathrooms}</div>
                <div><span className="font-bold block">Area</span> {listing.size} sqft</div>
                <div><span className="font-bold block">Status</span> {listing.status}</div>
              </div>
            </div>

            <div className="prose max-w-none bg-white p-6 rounded-lg shadow-sm">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
              <h3 className="text-xl font-bold mb-4">Interested?</h3>
              <p className="mb-4 text-sm text-gray-600">Contact us to schedule a viewing for this property.</p>
              
              <a href="tel:03002334448" className="flex items-center justify-center gap-2 w-full bg-primary text-white py-3 rounded mb-3 font-bold hover:bg-opacity-90">
                <Phone size={18} /> Call Agent
              </a>
              
              <form name="contact" method="POST" data-netlify="true" action="/contact" className="space-y-3 mt-6">
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="subject" value={`Inquiry for ${listing.title}`} />
                <input type="text" name="name" placeholder="Your Name" required className="w-full border p-2 rounded" />
                <input type="email" name="email" placeholder="Your Email" required className="w-full border p-2 rounded" />
                <textarea name="message" placeholder="I am interested in this property..." className="w-full border p-2 rounded h-24"></textarea>
                <button type="submit" className="w-full bg-secondary text-white py-2 rounded font-bold hover:bg-gray-700">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const listings = getContent('listings');
  const paths = listings.map((l) => ({ params: { slug: l.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { data, content } = getSingleContent('listings', params.slug);
  return { props: { listing: data, content } };
}
