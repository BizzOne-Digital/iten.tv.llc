import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import api from '../services/api';

export default function FeaturedShowsList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    api.get('/featured-shows').then(({ data }) => setItems(data)).finally(() => setLoading(false));
  };

  useEffect(load, []);

  const remove = async (id) => {
    if (!confirm('Delete this featured show?')) return;
    await api.delete(`/featured-shows/${id}`);
    setItems((prev) => prev.filter((s) => s._id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-heading uppercase text-white">Featured Shows</h1>
        <Link to="/admin/featured-shows/new" className="flex items-center gap-2 bg-brand-red text-white px-4 py-2 rounded text-sm font-heading uppercase">
          <Plus size={16} /> Add Show
        </Link>
      </div>
      {loading && <p className="text-gray">Loading...</p>}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item._id} className="bg-card border border-white/10 rounded-lg overflow-hidden group">
            <img src={item.image?.url} alt={item.title} className="w-full aspect-[2/3] object-cover" />
            <div className="p-4">
              <p className="text-white text-sm truncate">{item.title}</p>
              <p className="text-gray text-xs">{item.genre} · {item.active ? 'Active' : 'Hidden'}</p>
              <div className="flex gap-3 mt-3">
                <Link to={`/admin/featured-shows/${item._id}`} className="text-gray hover:text-brand-red"><Pencil size={16} /></Link>
                <button onClick={() => remove(item._id)} className="text-gray hover:text-brand-red"><Trash2 size={16} /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!loading && items.length === 0 && (
        <p className="text-gray bg-card border border-white/10 rounded-lg p-6">No featured shows yet.</p>
      )}
    </div>
  );
}
