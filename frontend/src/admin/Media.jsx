import { useEffect, useState } from 'react';
import { Upload, Trash2 } from 'lucide-react';
import api from '../services/api';

export default function Media() {
  const [media, setMedia] = useState([]);
  const [uploading, setUploading] = useState(false);

  const load = () => {
    api.get('/media').then(({ data }) => setMedia(data));
  };

  useEffect(load, []);

  const handleUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const fd = new FormData();
    fd.append('file', file);
    try {
      await api.post('/media', fd, { headers: { 'Content-Type': 'multipart/form-data' } });
      load();
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  };

  const remove = async (id) => {
    if (!confirm('Delete this file?')) return;
    await api.delete(`/media/${id}`);
    setMedia((prev) => prev.filter((m) => m._id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-heading uppercase text-white">Media Library</h1>
        <label className="flex items-center gap-2 bg-brand-red text-white px-4 py-2 rounded cursor-pointer text-sm font-heading uppercase">
          <Upload size={16} /> {uploading ? 'Uploading...' : 'Upload'}
          <input type="file" accept="image/*" className="hidden" onChange={handleUpload} disabled={uploading} />
        </label>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {media.map((m) => (
          <div key={m._id} className="relative group bg-card border border-white/10 rounded overflow-hidden">
            <img src={m.secureUrl} alt={m.filename} className="w-full aspect-square object-cover" />
            <button
              onClick={() => remove(m._id)}
              className="absolute top-1 right-1 bg-brand-red/90 text-white p-1.5 rounded opacity-0 group-hover:opacity-100"
            >
              <Trash2 size={14} />
            </button>
          </div>
        ))}
      </div>
      {media.length === 0 && <p className="text-gray mt-4">No media uploaded yet.</p>}
    </div>
  );
}
