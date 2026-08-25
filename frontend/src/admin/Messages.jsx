import { useEffect, useState } from 'react';
import api from '../services/api';

const STATUSES = ['New', 'Read', 'Responded'];

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    api.get('/contact').then(({ data }) => setMessages(data)).finally(() => setLoading(false));
  };

  useEffect(load, []);

  const updateStatus = async (id, status) => {
    await api.put(`/contact/${id}`, { status });
    setMessages((prev) => prev.map((m) => (m._id === id ? { ...m, status } : m)));
  };

  const remove = async (id) => {
    if (!confirm('Delete this message?')) return;
    await api.delete(`/contact/${id}`);
    setMessages((prev) => prev.filter((m) => m._id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-heading uppercase text-white mb-8">Messages</h1>
      {loading && <p className="text-gray">Loading...</p>}
      <div className="space-y-4">
        {messages.map((m) => (
          <div key={m._id} className="bg-card border border-white/10 rounded-lg p-6">
            <div className="flex flex-wrap justify-between gap-4 mb-2">
              <div>
                <p className="text-white font-medium">{m.name} <span className="text-gray text-sm">({m.email})</span></p>
                <p className="text-gray text-xs">{m.phone} &middot; {m.projectType} &middot; {new Date(m.createdAt).toLocaleString()}</p>
              </div>
              <div className="flex items-center gap-2">
                <select
                  value={m.status}
                  onChange={(e) => updateStatus(m._id, e.target.value)}
                  className="bg-bg border border-white/10 rounded px-3 py-1.5 text-sm text-white"
                >
                  {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                <button onClick={() => remove(m._id)} className="text-brand-red text-sm">Delete</button>
              </div>
            </div>
            <p className="text-gray text-sm">{m.message}</p>
            {m.imageUrl && (
              <img src={m.imageUrl} alt="attachment" className="mt-3 h-28 rounded border border-white/10" />
            )}
          </div>
        ))}
        {!loading && messages.length === 0 && <p className="text-gray">No messages.</p>}
      </div>
    </div>
  );
}
