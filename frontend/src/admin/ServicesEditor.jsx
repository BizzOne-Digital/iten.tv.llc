import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';

const empty = { title: '', description: '', order: 0, active: true };

export default function ServicesEditor() {
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
    api.get(`/services/${id}`).then(({ data }) => {
      setForm({ title: data.title || '', description: data.description || '', order: data.order || 0, active: data.active });
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
    setSaving(true);
    setError('');
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));
      if (file) fd.append('image', file);
      if (isNew) {
        await api.post('/services', fd, { headers: { 'Content-Type': 'multipart/form-data' } });
      } else {
        await api.put(`/services/${id}`, fd, { headers: { 'Content-Type': 'multipart/form-data' } });
      }
      navigate('/admin/services');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save service');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-heading uppercase text-white mb-8">{isNew ? 'Add Service' : 'Edit Service'}</h1>
      <form onSubmit={handleSubmit} className="bg-card border border-white/10 rounded-lg p-8 max-w-2xl space-y-5">
        {error && <p className="text-brand-red text-sm">{error}</p>}
        <div>
          <label className="text-sm text-gray block mb-1">Title *</label>
          <input required value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} className="w-full bg-bg border border-white/10 rounded px-4 py-2.5 text-white outline-none focus:border-brand-red" />
        </div>
        <div>
          <label className="text-sm text-gray block mb-1">Description *</label>
          <textarea required rows={4} value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} className="w-full bg-bg border border-white/10 rounded px-4 py-2.5 text-white outline-none focus:border-brand-red" />
        </div>
        <div>
          <label className="text-sm text-gray block mb-1">Image</label>
          {preview && <img src={preview} alt="preview" className="h-32 rounded mb-2 border border-white/10" />}
          <input type="file" accept="image/*" onChange={handleFile} className="text-sm text-gray" />
        </div>
        <div className="flex items-center gap-6">
          <div>
            <label className="text-sm text-gray block mb-1">Order</label>
            <input type="number" value={form.order} onChange={(e) => setForm((f) => ({ ...f, order: e.target.value }))} className="w-24 bg-bg border border-white/10 rounded px-4 py-2.5 text-white outline-none focus:border-brand-red" />
          </div>
          <label className="flex items-center gap-2 text-gray text-sm mt-6">
            <input type="checkbox" checked={form.active} onChange={(e) => setForm((f) => ({ ...f, active: e.target.checked }))} />
            Active
          </label>
        </div>
        <button type="submit" disabled={saving} className="bg-brand-red text-white font-heading uppercase px-6 py-2.5 rounded hover:bg-brand-brightred disabled:opacity-50">
          {saving ? 'Saving...' : 'Save Service'}
        </button>
      </form>
    </div>
  );
}
