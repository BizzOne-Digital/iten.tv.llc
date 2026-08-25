import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';

const empty = {
  title: '',
  category: '',
  excerpt: '',
  content: '',
  seoTitle: '',
  seoDescription: '',
  author: 'iTEN.TV Team',
  published: false,
};

export default function BlogEditor() {
  const { id } = useParams();
  const isNew = !id || id === 'new';
  const navigate = useNavigate();
  const [form, setForm] = useState(empty);
  const [categories, setCategories] = useState([]);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    api.get('/categories').then(({ data }) => setCategories(data));
  }, []);

  useEffect(() => {
    if (isNew) return;
    api.get(`/blog/admin/${id}`).then(({ data }) => {
      setForm({
        title: data.title || '',
        category: data.category?._id || '',
        excerpt: data.excerpt || '',
        content: data.content || '',
        seoTitle: data.seoTitle || '',
        seoDescription: data.seoDescription || '',
        author: data.author || '',
        published: data.published || false,
      });
      setPreview(data.featuredImage?.url || null);
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
      if (file) fd.append('featuredImage', file);

      if (isNew) {
        await api.post('/blog', fd, { headers: { 'Content-Type': 'multipart/form-data' } });
      } else {
        await api.put(`/blog/${id}`, fd, { headers: { 'Content-Type': 'multipart/form-data' } });
      }
      navigate('/admin/blog');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save post');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-heading uppercase text-white mb-8">{isNew ? 'New Post' : 'Edit Post'}</h1>
      <form onSubmit={handleSubmit} className="bg-card border border-white/10 rounded-lg p-8 max-w-3xl space-y-5">
        {error && <p className="text-brand-red text-sm">{error}</p>}
        <div>
          <label className="text-sm text-gray block mb-1">Title *</label>
          <input required value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} className="w-full bg-bg border border-white/10 rounded px-4 py-2.5 text-white outline-none focus:border-brand-red" />
        </div>
        <div>
          <label className="text-sm text-gray block mb-1">Category</label>
          <select value={form.category} onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))} className="w-full bg-bg border border-white/10 rounded px-4 py-2.5 text-white outline-none focus:border-brand-red">
            <option value="">None</option>
            {categories.map((c) => <option key={c._id} value={c._id}>{c.name}</option>)}
          </select>
        </div>
        <div>
          <label className="text-sm text-gray block mb-1">Featured Image</label>
          {preview && <img src={preview} alt="preview" className="h-32 rounded mb-2 border border-white/10" />}
          <input type="file" accept="image/*" onChange={handleFile} className="text-sm text-gray" />
        </div>
        <div>
          <label className="text-sm text-gray block mb-1">Excerpt</label>
          <textarea rows={2} value={form.excerpt} onChange={(e) => setForm((f) => ({ ...f, excerpt: e.target.value }))} className="w-full bg-bg border border-white/10 rounded px-4 py-2.5 text-white outline-none focus:border-brand-red" />
        </div>
        <div>
          <label className="text-sm text-gray block mb-1">Content (HTML) *</label>
          <textarea required rows={10} value={form.content} onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))} className="w-full bg-bg border border-white/10 rounded px-4 py-2.5 text-white outline-none focus:border-brand-red font-mono text-sm" />
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="text-sm text-gray block mb-1">SEO Title</label>
            <input value={form.seoTitle} onChange={(e) => setForm((f) => ({ ...f, seoTitle: e.target.value }))} className="w-full bg-bg border border-white/10 rounded px-4 py-2.5 text-white outline-none focus:border-brand-red" />
          </div>
          <div>
            <label className="text-sm text-gray block mb-1">SEO Description</label>
            <input value={form.seoDescription} onChange={(e) => setForm((f) => ({ ...f, seoDescription: e.target.value }))} className="w-full bg-bg border border-white/10 rounded px-4 py-2.5 text-white outline-none focus:border-brand-red" />
          </div>
        </div>
        <label className="flex items-center gap-2 text-gray text-sm">
          <input type="checkbox" checked={form.published} onChange={(e) => setForm((f) => ({ ...f, published: e.target.checked }))} />
          Published
        </label>
        <button type="submit" disabled={saving} className="bg-brand-red text-white font-heading uppercase px-6 py-2.5 rounded hover:bg-brand-brightred disabled:opacity-50">
          {saving ? 'Saving...' : 'Save Post'}
        </button>
      </form>
    </div>
  );
}
