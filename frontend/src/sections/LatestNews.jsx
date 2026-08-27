import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import api from '../services/api';
import { img } from '../utils/constants';

export default function LatestNews() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api
      .get('/blog', { params: { limit: 3 } })
      .then(({ data }) => setPosts(data.posts || []))
      .catch(() => setPosts([]));
  }, []);

  if (!posts.length) return null;

  return (
    <section className="py-24">
      <div className="max-w-[1440px] mx-auto px-6">
        <SectionHeading eyebrow="From the Blog" title="LATEST" highlight="NEWS" />
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <Link
              key={post._id}
              to={`/blog/${post.slug}`}
              className="group bg-card border border-white/10 rounded-lg overflow-hidden hover:border-brand-red/50 transition-colors"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.featuredImage?.url || img(40 + i, 600, 340)}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading uppercase text-white text-lg mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-gray text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                <span className="text-brand-red text-sm font-heading uppercase flex items-center gap-1">
                  Read More <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
