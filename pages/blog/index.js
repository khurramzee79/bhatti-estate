import Layout from '../../components/Layout';
import BlogCard from '../../components/BlogCard';
import { getContent } from '../../lib/api';

export default function BlogIndex({ posts }) {
  return (
    <Layout 
      title="Property Insights & News" 
      description="Latest real estate news, investment tips for Malir Cantt and Askari, and construction advice from Bhatti Estate."
    >
      <div className="bg-secondary text-white py-16 text-center">
        <h1 className="text-4xl font-heading font-bold mb-4">Property Insights</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto px-4">
          Expert advice on buying, selling, and investing in Karachi's most secure neighborhoods.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-xl font-bold text-gray-500">No posts found.</h3>
            <p className="text-gray-400">Check back soon for updates.</p>
          </div>
        )}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getContent('blog');
  return {
    props: { posts },
  };
}