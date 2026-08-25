import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
import SEO from '../components/SEO';
import api from '../services/api';
import { img } from '../utils/constants';

export default function BlogDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [related, setRelated] = useState([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setPost(null);
    setNotFound(false);
    api
      .get(`/blog/${slug}`)
      .then(({ data }) => {
        setPost(data.post);
        setRelated(data.related || []);
      })
      .catch(() => setNotFound(true));
  }, [slug]);

  if (notFound) {
    return (
      <section className="pt-40 pb-24 max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-3xl font-heading text-white mb-4">Article Not Found</h1>
        <Link to="/blog" className="text-brand-red">Back to Blog</Link>
      </section>
    );
  }

  if (!post) {
    return <section className="pt-40 pb-24 max-w-3xl mx-auto px-6 text-gray">Loading...</section>;
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <>
      <SEO title={post.seoTitle || post.title} description={post.seoDescription || post.excerpt} image={post.featuredImage?.url} />
      <article className="pt-40 pb-24 max-w-3xl mx-auto px-6">
        {post.category?.name && (
          <span className="text-brand-red text-xs font-heading uppercase">{post.category.name}</span>
        )}
        <h1 className="text-3xl md:text-4xl font-heading font-bold uppercase text-white mt-2 mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-gray text-sm mb-8">
          <span>{post.author}</span>
          <span>&middot;</span>
          <span>{new Date(post.createdAt).toLocaleDateString()}</span>
        </div>
        <img
          src={post.featuredImage?.url || img(200, 900, 500)}
          alt={post.title}
          className="w-full rounded-lg mb-10 object-cover max-h-[440px]"
        />
        <div
          className="prose prose-invert max-w-none text-gray leading-relaxed [&_p]:mb-4"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="flex items-center gap-4 mt-12 pt-8 border-t border-white/10">
          <span className="text-gray text-sm font-heading uppercase">Share:</span>
          <a href={`https://facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noreferrer" className="text-gray hover:text-brand-red"><Facebook size={18} /></a>
          <a href={`https://twitter.com/intent/tweet?url=${shareUrl}`} target="_blank" rel="noreferrer" className="text-gray hover:text-brand-red"><Twitter size={18} /></a>
          <a href={`https://linkedin.com/sharing/share-offsite/?url=${shareUrl}`} target="_blank" rel="noreferrer" className="text-gray hover:text-brand-red"><Linkedin size={18} /></a>
          <button onClick={() => navigator.clipboard?.writeText(shareUrl)} className="text-gray hover:text-brand-red"><LinkIcon size={18} /></button>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h3 className="font-heading uppercase text-white text-xl mb-6">Related Articles</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {related.map((r, i) => (
                <Link key={r._id} to={`/blog/${r.slug}`} className="group">
                  <img
                    src={r.featuredImage?.url || img(210 + i, 400, 240)}
                    alt={r.title}
                    className="w-full aspect-video object-cover rounded mb-2 group-hover:opacity-80"
                  />
                  <p className="text-white text-sm font-heading uppercase line-clamp-2">{r.title}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}
