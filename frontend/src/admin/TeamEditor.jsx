import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';

const empty = { name: '', role: '', bio: '', order: 0, active: true, instagram: '', twitter: '', linkedin: '', facebook: '' };

export default function TeamEditor() {
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
    api.get(`/team/${id}`).then(({ data }) => {
      setForm({
        name: data.name || '',
        role: data.role || '',
        bio: data.bio || '',
        order: data.order || 0,
        active: data.active,
        instagram: data.socials?.instagram || '',
        twitter: data.socials?.twitter || '',
        linkedin: data.socials?.linkedin || '',
        facebook: data.socials?.facebook || '',
      });
      setPreview(data.photo?.url || null);
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
      if (file) fd.append('photo', file);
      if (isNew) {
        await api.post('/team', fd, { headers: { 'Content-Type': 'multipart/form-data' } });
      } else {
        await api.put(`/team/${id}`, fd, { headers: { 'Content-Type': 'multipart/form-data' } });
      }
      navigate('/admin/team');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save member');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-heading uppercase text-white mb-8">{isNew ? 'Add Team Member' : 'Edit Team Member'}</h1>
      <form onSubmit={handleSubmit} className="bg-card border border-white/10 rounded-lg p-8 max-w-2xl space-y-5">
        {error && <p className="text-brand-red text-sm">{error}</p>}
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="text-sm text-gray block mb-1">Name *</label>
            <input required value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} className="w-full bg-bg border border-white/10 rounded px-4 py-2.5 text-white outline-none focus:border-brand-red" />
          </div>
          <div>
            <label className="text-sm text-gray block mb-1">Role *</label>
            <input required value={form.role} onChange={(e) => setForm((f) => ({ ...f, role: e.target.value }))} className="w-full bg-bg border border-white/10 rounded px-4 py-2.5 text-white outline-none focus:border-brand-red" />
          </div>
        </div>
        <div>
          <label className="text-sm text-gray block mb-1">Bio</label>
          <textarea rows={3} value={form.bio} onChange={(e) => setForm((f) => ({ ...f, bio: e.target.value }))} className="w-full bg-bg border border-white/10 rounded px-4 py-2.5 text-white outline-none focus:border-brand-red" />
        </div>
        <div>
          <label className="text-sm text-gray block mb-1">Photo</label>
          {preview && <img src={preview} alt="preview" className="h-24 w-24 object-cover rounded-full mb-2 border border-white/10" />}
          <input type="file" accept="image/*" onChange={handleFile} className="text-sm text-gray" />
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <input placeholder="Instagram URL" value={form.instagram} onChange={(e) => setForm((f) => ({ ...f, instagram: e.target.value }))} className="w-full bg-bg border border-white/10 rounded px-4 py-2.5 text-white outline-none focus:border-brand-red" />
          <input placeholder="Twitter URL" value={form.twitter} onChange={(e) => setForm((f) => ({ ...f, twitter: e.target.value }))} className="w-full bg-bg border border-white/10 rounded px-4 py-2.5 text-white outline-none focus:border-brand-red" />
          <input placeholder="LinkedIn URL" value={form.linkedin} onChange={(e) => setForm((f) => ({ ...f, linkedin: e.target.value }))} className="w-full bg-bg border border-white/10 rounded px-4 py-2.5 text-white outline-none focus:border-brand-red" />
          <input placeholder="Facebook URL" value={form.facebook} onChange={(e) => setForm((f) => ({ ...f, facebook: e.target.value }))} className="w-full bg-bg border border-white/10 rounded px-4 py-2.5 text-white outline-none focus:border-brand-red" />
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
          {saving ? 'Saving...' : 'Save Member'}
        </button>
      </form>
    </div>
  );
}
