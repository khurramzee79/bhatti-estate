import Link from 'next/link';
import { Calendar, User } from 'lucide-react';
import { format } from 'date-fns';

export default function BlogCard({ post }) {
  const formattedDate = post.date ? format(new Date(post.date), 'MMMM dd, yyyy') : '';

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
      <Link href={`/blog/${post.slug}`}>
        <div className="h-48 bg-gray-200 relative overflow-hidden">
          {/* Use CSS background or Next/Image in production */}
          <img 
            src={post.cover_image || '/assets/BhattiEstate.png'} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
          />
        </div>
      </Link>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center text-xs text-gray-500 mb-3 gap-3">
          <span className="flex items-center gap-1"><Calendar size={12} /> {formattedDate}</span>
          <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
        </div>
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-xl font-heading font-bold text-secondary mb-3 hover:text-primary transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
          {post.excerpt}
        </p>
        <Link href={`/blog/${post.slug}`} className="text-primary font-bold text-sm hover:underline mt-auto">
          Read Article &rarr;
        </Link>
      </div>
    </div>
  );
}