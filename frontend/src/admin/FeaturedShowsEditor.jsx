import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';

const empty = { title: '', genre: 'Racing', order: 0, active: true };

export default function FeaturedShowsEditor() {
  const { id } = useParams();
  const isNew = !id || id === 'new';
  const navigate = useNavigate();
  const [form, setForm] = useState(empty);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isNew) return;
    api.get(`/featured-shows/${id}`).then(({ data }) => {
      setForm({
        title: data.title || '',
        genre: data.genre || 'Racing',
        order: data.order || 0,
        active: data.active,
      });
      setPreview(data.image?.url || null);
    });
  }, [id, isNew]);

  const handleFile = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isNew && !file) {
      setError('Please choose an image');
      return;
    }
    setSaving(true);
    setError('');
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));
      if (file) fd.append('image', file);
      if (isNew) {
        await api.post('/featured-shows', fd, { headers: { 'Content-Type': 'multipart/form-data' } });
      } else {
        await api.put(`/featured-shows/${id}`, fd, { headers: { 'Content-Type': 'multipart/form-data' } });
      }
      navigate('/admin/featured-shows');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save featured show');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-heading uppercase text-white mb-8">{isNew ? 'Add Featured Show' : 'Edit Featured Show'}</h1>
      <form onSubmit={handleSubmit} className="bg-card border border-white/10 rounded-lg p-8 max-w-2xl space-y-5">
        {error && <p className="text-brand-red text-sm">{error}</p>}
        <div>
          <label className="text-sm text-gray block mb-1">Title *</label>
          <input
            required
            value={form.title}
            onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
            className="w-full bg-bg border border-white/10 rounded px-4 py-2.5 text-white outline-none focus:border-brand-red"
          />
        </div>
        <div>
          <label className="text-sm text-gray block mb-1">Genre</label>
          <input
            value={form.genre}
            onChange={(e) => setForm((f) => ({ ...f, genre: e.target.value }))}
            placeholder="e.g. Racing, Automotive"
            className="w-full bg-bg border border-white/10 rounded px-4 py-2.5 text-white outline-none focus:border-brand-red"
          />
        </div>
        <div>
          <label className="text-sm text-gray block mb-1">Poster Image {isNew && '*'}</label>
          {preview && <img src={preview} alt="preview" className="h-40 rounded mb-2 border border-white/10" />}
          <input type="file" accept="image/*" onChange={handleFile} className="text-sm text-gray" />
        </div>
        <div className="flex items-center gap-6">
          <div>
            <label className="text-sm text-gray block mb-1">Order</label>
            <input
              type="number"
              value={form.order}
              onChange={(e) => setForm((f) => ({ ...f, order: e.target.value }))}
              className="w-24 bg-bg border border-white/10 rounded px-4 py-2.5 text-white outline-none focus:border-brand-red"
            />
          </div>
          <label className="flex items-center gap-2 text-gray text-sm mt-6">
            <input type="checkbox" checked={form.active} onChange={(e) => setForm((f) => ({ ...f, active: e.target.checked }))} />
            Active
          </label>
        </div>
        <button type="submit" disabled={saving} className="bg-brand-red text-white font-heading uppercase px-6 py-2.5 rounded hover:bg-brand-brightred disabled:opacity-50">
          {saving ? 'Saving...' : 'Save Show'}
        </button>
      </form>
    </div>
  );
}
