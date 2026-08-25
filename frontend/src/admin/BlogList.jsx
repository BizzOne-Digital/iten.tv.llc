import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import api from '../services/api';

export default function BlogList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    api.get('/blog', { params: { all: true, limit: 100 } }).then(({ data }) => setPosts(data.posts)).finally(() => setLoading(false));
  };

  useEffect(load, []);

  const remove = async (id) => {
    if (!confirm('Delete this post?')) return;
    await api.delete(`/blog/${id}`);
    setPosts((prev) => prev.filter((p) => p._id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-heading uppercase text-white">Blog Posts</h1>
        <Link to="/admin/blog/new" className="flex items-center gap-2 bg-brand-red text-white px-4 py-2 rounded text-sm font-heading uppercase">
          <Plus size={16} /> New Post
        </Link>
      </div>
      {loading && <p className="text-gray">Loading...</p>}
      <div className="bg-card border border-white/10 rounded-lg overflow-hidden">
        {posts.map((p) => (
          <div key={p._id} className="flex items-center justify-between px-6 py-4 border-b border-white/5 last:border-0">
            <div>
              <p className="text-white">{p.title}</p>
              <p className="text-gray text-xs">
                {p.published ? 'Published' : 'Draft'} &middot; {p.category?.name || 'Uncategorized'} &middot; {p.views || 0} views
              </p>
            </div>
            <div className="flex gap-3">
              <Link to={`/admin/blog/${p._id}`} className="text-gray hover:text-brand-red"><Pencil size={16} /></Link>
              <button onClick={() => remove(p._id)} className="text-gray hover:text-brand-red"><Trash2 size={16} /></button>
            </div>
          </div>
        ))}
        {!loading && posts.length === 0 && <p className="text-gray p-6">No posts yet.</p>}
      </div>
    </div>
  );
}
