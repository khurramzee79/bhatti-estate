import Layout from '../components/Layout';
import ListingCard from '../components/ListingCard';
import Link from 'next/link';
import { getContent } from '../lib/api';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Home({ listings, posts }) {
  return (
    <Layout title="Home">
      {/* Hero */}
      <section className="relative bg-secondary py-20 lg:py-32">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        {/* Placeholder for Hero Image - use CSS background-image in real prod */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Find Your Next Property in <span className="text-primary">Malir Cantt & Askari</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light text-gray-200">
            Trusted by hundreds of families for Buying, Selling & Construction.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/listings" className="bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-lg transition-all">
              Browse Listings
            </Link>
            <Link href="/contact" className="bg-white text-secondary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all">
              List Your Property
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-heading font-bold text-secondary">Featured Properties</h2>
            <p className="text-gray-500 mt-2">Latest investments and homes in Karachi's prime zones</p>
          </div>
          <Link href="/listings" className="hidden md:flex items-center text-primary font-bold hover:underline">
            View All <ArrowRight size={18} className="ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.slice(0, 3).map((listing) => (
            <ListingCard key={listing.slug} listing={listing} />
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
            <Link href="/listings" className="text-primary font-bold">View All Properties</Link>
        </div>
      </section>

      {/* Services/Why Us */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-secondary text-center mb-12">Why Choose Bhatti Estate?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg bg-neutral">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary font-bold text-2xl">1</div>
              <h3 className="text-xl font-bold mb-2">Local Experts</h3>
              <p className="text-gray-600">Specialized knowledge of Malir Cantt and Askari sectors since 2000.</p>
            </div>
            <div className="p-6 rounded-lg bg-neutral">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary font-bold text-2xl">2</div>
              <h3 className="text-xl font-bold mb-2">Transparent Deals</h3>
              <p className="text-gray-600">No hidden fees. We ensure documentation is verified and secure.</p>
            </div>
            <div className="p-6 rounded-lg bg-neutral">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary font-bold text-2xl">3</div>
              <h3 className="text-xl font-bold mb-2">Builder Services</h3>
              <p className="text-gray-600">From plot to key, we handle construction with premium materials.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-secondary mb-8">Property Insights</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.slice(0, 3).map((post) => (
            <div key={post.slug} className="group cursor-pointer">
              <Link href={`/blog/${post.slug}`}>
                <div className="h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                   {/* Placeholder image logic */}
                   <div className="w-full h-full bg-secondary/10 flex items-center justify-center text-gray-400">Read Post</div>
                </div>
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">{post.excerpt}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const listings = getContent('listings');
  const posts = getContent('blog');
  return {
    props: { listings, posts },
  };
}