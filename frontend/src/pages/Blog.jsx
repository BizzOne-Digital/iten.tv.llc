import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import api from '../services/api';
import { img } from '../utils/constants';

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [pages, setPages] = useState(1);
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [loading, setLoading] = useState(true);

  const page = parseInt(searchParams.get('page') || '1', 10);
  const category = searchParams.get('category') || '';

  useEffect(() => {
    api.get('/categories').then(({ data }) => setCategories(data)).catch(() => {});
  }, []);

  useEffect(() => {
    setLoading(true);
    api
      .get('/blog', { params: { page, category: category || undefined, search: searchParams.get('search') || undefined } })
      .then(({ data }) => {
        setPosts(data.posts || []);
        setPages(data.pages || 1);
      })
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, [page, category, searchParams]);

  const updateParams = (updates) => {
    const next = new URLSearchParams(searchParams);
    Object.entries(updates).forEach(([k, v]) => {
      if (v) next.set(k, v);
      else next.delete(k);
    });
    setSearchParams(next);
  };

  return (
    <>
      <SEO title="Blog" description="Latest news and stories from iTEN.TV." />
      <section className="pt-40 pb-16 max-w-[1440px] mx-auto px-6">
        <SectionHeading eyebrow="News & Stories" title="THE" highlight="BLOG" />

        <div className="flex flex-wrap gap-4 items-center justify-between mb-10">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => updateParams({ category: '', page: '1' })}
              className={`px-4 py-1.5 text-xs font-heading uppercase rounded-full border ${
                !category ? 'bg-brand-red border-brand-red text-white' : 'border-white/20 text-gray'
              }`}
            >
              All
            </button>
            {categories.map((c) => (
              <button
                key={c._id}
                onClick={() => updateParams({ category: c._id, page: '1' })}
                className={`px-4 py-1.5 text-xs font-heading uppercase rounded-full border ${
                  category === c._id ? 'bg-brand-red border-brand-red text-white' : 'border-white/20 text-gray'
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              updateParams({ search, page: '1' });
            }}
            className="flex items-center gap-2 bg-card border border-white/10 rounded-full px-4 py-2"
          >
            <Search size={16} className="text-gray" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles..."
              className="bg-transparent outline-none text-sm text-white placeholder:text-gray"
            />
          </form>
        </div>

        {loading && <p className="text-gray">Loading...</p>}
        {!loading && posts.length === 0 && <p className="text-gray">No articles found.</p>}

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <Link
              key={post._id}
              to={`/blog/${post.slug}`}
              className="group bg-card border border-white/10 rounded-lg overflow-hidden hover:border-brand-red/50 transition-colors"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.featuredImage?.url || img(100 + i, 600, 340)}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                {post.category?.name && (
                  <span className="text-brand-red text-xs font-heading uppercase">{post.category.name}</span>
                )}
                <h3 className="font-heading uppercase text-white text-lg mt-1 mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-gray text-sm line-clamp-2">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        {pages > 1 && (
          <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: pages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => updateParams({ page: String(p) })}
                className={`w-9 h-9 rounded text-sm font-heading ${
                  p === page ? 'bg-brand-red text-white' : 'bg-card text-gray hover:text-white'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
