import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import api from '../services/api';

export default function TeamList() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    api.get('/team').then(({ data }) => setMembers(data)).finally(() => setLoading(false));
  };

  useEffect(load, []);

  const remove = async (id) => {
    if (!confirm('Delete this team member?')) return;
    await api.delete(`/team/${id}`);
    setMembers((prev) => prev.filter((m) => m._id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-heading uppercase text-white">Team Members</h1>
        <Link to="/admin/team/new" className="flex items-center gap-2 bg-brand-red text-white px-4 py-2 rounded text-sm font-heading uppercase">
          <Plus size={16} /> Add Member
        </Link>
      </div>
      {loading && <p className="text-gray">Loading...</p>}
      <div className="bg-card border border-white/10 rounded-lg overflow-hidden">
        {members.map((m) => (
          <div key={m._id} className="flex items-center justify-between px-6 py-4 border-b border-white/5 last:border-0">
            <div>
              <p className="text-white">{m.name}</p>
              <p className="text-gray text-xs">{m.role} &middot; {m.active ? 'Active' : 'Hidden'}</p>
            </div>
            <div className="flex gap-3">
              <Link to={`/admin/team/${m._id}`} className="text-gray hover:text-brand-red"><Pencil size={16} /></Link>
              <button onClick={() => remove(m._id)} className="text-gray hover:text-brand-red"><Trash2 size={16} /></button>
            </div>
          </div>
        ))}
        {!loading && members.length === 0 && <p className="text-gray p-6">No team members yet.</p>}
      </div>
    </div>
  );
}
