import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import api from '../services/api';

export default function ServicesList() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    api.get('/services').then(({ data }) => setServices(data)).finally(() => setLoading(false));
  };

  useEffect(load, []);

  const remove = async (id) => {
    if (!confirm('Delete this service?')) return;
    await api.delete(`/services/${id}`);
    setServices((prev) => prev.filter((s) => s._id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-heading uppercase text-white">Services</h1>
        <Link to="/admin/services/new" className="flex items-center gap-2 bg-brand-red text-white px-4 py-2 rounded text-sm font-heading uppercase">
          <Plus size={16} /> Add Service
        </Link>
      </div>
      {loading && <p className="text-gray">Loading...</p>}
      <div className="bg-card border border-white/10 rounded-lg overflow-hidden">
        {services.map((s) => (
          <div key={s._id} className="flex items-center justify-between px-6 py-4 border-b border-white/5 last:border-0">
            <div>
              <p className="text-white">{s.title}</p>
              <p className="text-gray text-xs">{s.active ? 'Active' : 'Hidden'}</p>
            </div>
            <div className="flex gap-3">
              <Link to={`/admin/services/${s._id}`} className="text-gray hover:text-brand-red"><Pencil size={16} /></Link>
              <button onClick={() => remove(s._id)} className="text-gray hover:text-brand-red"><Trash2 size={16} /></button>
            </div>
          </div>
        ))}
        {!loading && services.length === 0 && <p className="text-gray p-6">No services yet.</p>}
      </div>
    </div>
  );
}
