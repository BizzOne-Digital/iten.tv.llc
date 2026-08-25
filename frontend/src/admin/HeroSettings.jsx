import { useEffect, useState } from 'react';
import api from '../services/api';

const FIELDS = [
  ['eyebrowText', 'Eyebrow Text'],
  ['headingMain', 'Heading Main'],
  ['headingHighlight', 'Heading Highlight (red word)'],
  ['headingSub', 'Heading Sub'],
  ['description', 'Description', 'textarea'],
  ['videoUrl', 'Video URL'],
  ['posterImageUrl', 'Poster Image URL'],
  ['ctaPrimaryText', 'Primary CTA Text'],
  ['ctaPrimaryLink', 'Primary CTA Link'],
  ['ctaSecondaryText', 'Secondary CTA Text'],
  ['ctaSecondaryLink', 'Secondary CTA Link'],
];

export default function HeroSettings() {
  const [form, setForm] = useState(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    api.get('/hero').then(({ data }) => setForm(data));
  }, []);

  if (!form) return <p className="text-gray">Loading...</p>;

  const handleChange = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await api.put('/hero', form);
    setForm(data);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div>
      <h1 className="text-2xl font-heading uppercase text-white mb-8">Hero Settings</h1>
      <form onSubmit={handleSubmit} className="bg-card border border-white/10 rounded-lg p-8 max-w-2xl space-y-5">
        {saved && <p className="text-brand-red text-sm">Saved!</p>}
        {FIELDS.map(([key, label, type]) => (
          <div key={key}>
            <label className="text-sm text-gray block mb-1">{label}</label>
            {type === 'textarea' ? (
              <textarea
                rows={3}
                value={form[key] || ''}
                onChange={(e) => handleChange(key, e.target.value)}
                className="w-full bg-bg border border-white/10 rounded px-4 py-2.5 text-white outline-none focus:border-brand-red"
              />
            ) : (
              <input
                value={form[key] || ''}
                onChange={(e) => handleChange(key, e.target.value)}
                className="w-full bg-bg border border-white/10 rounded px-4 py-2.5 text-white outline-none focus:border-brand-red"
              />
            )}
          </div>
        ))}
        <button type="submit" className="bg-brand-red text-white font-heading uppercase px-6 py-2.5 rounded hover:bg-brand-brightred">
          Save Changes
        </button>
      </form>
    </div>
  );
}
