import Layout from '../../components/Layout';
import { getContent, getSingleContent } from '../../lib/api';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import Link from 'next/link';
import { Facebook, Linkedin, Twitter, Share2 } from 'lucide-react';

export default function BlogPost({ post, content, relatedPosts }) {
  if (!post) return null;

  const formattedDate = post.date ? format(new Date(post.date), 'MMMM dd, yyyy') : '';
  const shareUrl = `https://bhattiestate.com/blog/${post.slug}`;

  return (
    <Layout title={post.title} description={post.excerpt}>
      {/* Article Header */}
      <div className="bg-neutral py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-4 text-primary font-bold uppercase tracking-wider text-sm">
            {post.tags && post.tags[0]}
          </div>
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-secondary mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center text-gray-500 text-sm gap-4">
            <span>By <span className="font-bold text-secondary">{post.author}</span></span>
            <span>•</span>
            <span>{formattedDate}</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Cover Image */}
        <div className="rounded-xl overflow-hidden shadow-lg mb-10">
          <img src={post.cover_image || '/assets/BhattiEstate.png'} alt={post.title} className="w-full h-auto" />
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          {/* Main Content */}
          <article className="md:col-span-12 prose prose-lg max-w-none text-secondary">
            <ReactMarkdown>{content}</ReactMarkdown>
            
            {/* CTA Box within article */}
            <div className="bg-secondary text-white p-8 rounded-lg my-12 not-prose text-center">
              <h3 className="text-2xl font-bold mb-3 font-heading">Looking to invest in Malir Cantt?</h3>
              <p className="mb-6 text-gray-300">Contact our expert team today for verified listings and transparent deals.</p>
              <div className="flex justify-center gap-4 flex-wrap">
                <a href="tel:03002334448" className="bg-primary text-white px-6 py-3 rounded font-bold hover:bg-opacity-90">
                  Call 0300 233 4448
                </a>
                <Link href="/contact" className="bg-white text-secondary px-6 py-3 rounded font-bold hover:bg-gray-100">
                  Contact Us
                </Link>
              </div>
            </div>
          </article>
        </div>

        {/* Share & Tags */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-2 flex-wrap">
            {post.tags && post.tags.map(tag => (
              <span key={tag} className="bg-neutral px-3 py-1 rounded-full text-sm text-gray-600">#{tag}</span>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="font-bold text-sm text-gray-500 flex items-center gap-1"><Share2 size={16}/> Share:</span>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#1877F2]"><Facebook size={20}/></a>
            <a href={`https://twitter.com/intent/tweet?text=${post.title}&url=${shareUrl}`} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#1DA1F2]"><Twitter size={20}/></a>
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0A66C2]"><Linkedin size={20}/></a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts = getContent('blog');
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { data, content } = getSingleContent('blog', params.slug);
  // Optional: Fetch related posts (simple logic: just recent ones)
  const allPosts = getContent('blog');
  const relatedPosts = allPosts.filter(p => p.slug !== params.slug).slice(0, 3);

  return { 
    props: { 
      post: data, 
      content,
      relatedPosts
    } 
  };
}