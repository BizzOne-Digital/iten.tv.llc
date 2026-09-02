import { useState } from 'react';
import { X, Upload, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import api from '../services/api';
import { PROJECT_TYPES } from '../utils/constants';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  projectType: 'Other',
  subject: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [success, setSuccess] = useState(false);
  const [apiError, setApiError] = useState('');

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleFile = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (!f.type.startsWith('image/')) {
      setErrors((er) => ({ ...er, file: 'Only image files are allowed.' }));
      return;
    }
    if (f.size > 8 * 1024 * 1024) {
      setErrors((er) => ({ ...er, file: 'Image must be under 8MB.' }));
      return;
    }
    setErrors((er) => ({ ...er, file: undefined }));
    setFile(f);
    setPreview(URL.createObjectURL(f));
  };

  const removeFile = () => {
    setFile(null);
    setPreview(null);
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Enter a valid email';
    if (!form.message.trim()) errs.message = 'Message is required';
    setErrors((prev) => ({ ...prev, ...errs }));
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setApiError('');
    setProgress(0);

    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => fd.append(k, v));
    if (file) fd.append('image', file);

    try {
      await api.post('/contact', fd, {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: (evt) => {
          setProgress(Math.round((evt.loaded * 100) / (evt.total || 1)));
        },
      });
      setSuccess(true);
      setForm(initialForm);
      removeFile();
    } catch (err) {
      setApiError(err.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <section className="pt-40 pb-24 max-w-xl mx-auto px-6 text-center">
        <CheckCircle size={48} className="text-brand-red mx-auto mb-4" />
        <h1 className="text-2xl font-heading uppercase text-white mb-2">Message Sent</h1>
        <p className="text-gray mb-6">Thanks for reaching out - our team will get back to you shortly.</p>
        <Button onClick={() => setSuccess(false)}>Send Another Message</Button>
      </section>
    );
  }

  return (
    <>
      <SEO title="Contact Us" description="Get in touch with iTEN.TV for content and production inquiries." />
      <section className="pt-40 pb-24 max-w-3xl mx-auto px-6">
        <SectionHeading eyebrow="Get In Touch" title="CONTACT" highlight="iTEN.TV" align="center" />

        <form onSubmit={handleSubmit} className="bg-card border border-white/10 rounded-lg p-8 space-y-5">
          {apiError && <p className="text-brand-red text-sm">{apiError}</p>}

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="text-sm text-gray block mb-1">Name *</label>
              <input name="name" value={form.name} onChange={handleChange} className="w-full bg-bg border border-white/10 rounded px-4 py-2.5 text-white outline-none focus:border-brand-red" />
              {errors.name && <p className="text-brand-red text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="text-sm text-gray block mb-1">Email *</label>
              <input name="email" value={form.email} onChange={handleChange} className="w-full bg-bg border border-white/10 rounded px-4 py-2.5 text-white outline-none focus:border-brand-red" />
              {errors.email && <p className="text-brand-red text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="text-sm text-gray block mb-1">Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange} className="w-full bg-bg border border-white/10 rounded px-4 py-2.5 text-white outline-none focus:border-brand-red" />
            </div>
            <div>
              <label className="text-sm text-gray block mb-1">Company</label>
              <input name="company" value={form.company} onChange={handleChange} className="w-full bg-bg border border-white/10 rounded px-4 py-2.5 text-white outline-none focus:border-brand-red" />
            </div>
            <div>
              <label className="text-sm text-gray block mb-1">Project Type</label>
              <select name="projectType" value={form.projectType} onChange={handleChange} className="w-full bg-bg border border-white/10 rounded px-4 py-2.5 text-white outline-none focus:border-brand-red">
                {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm text-gray block mb-1">Subject</label>
              <input name="subject" value={form.subject} onChange={handleChange} className="w-full bg-bg border border-white/10 rounded px-4 py-2.5 text-white outline-none focus:border-brand-red" />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray block mb-1">Message *</label>
            <textarea name="message" value={form.message} onChange={handleChange} rows={5} className="w-full bg-bg border border-white/10 rounded px-4 py-2.5 text-white outline-none focus:border-brand-red" />
            {errors.message && <p className="text-brand-red text-xs mt-1">{errors.message}</p>}
          </div>

          <div>
            <label className="text-sm text-gray block mb-1">Reference Image (optional)</label>
            {!preview ? (
              <label className="flex items-center gap-2 border border-dashed border-white/20 rounded px-4 py-4 text-gray text-sm cursor-pointer hover:border-brand-red">
                <Upload size={16} /> Click to upload an image
                <input type="file" accept="image/*" className="hidden" onChange={handleFile} />
              </label>
            ) : (
              <div className="relative inline-block">
                <img src={preview} alt="Preview" className="h-32 rounded border border-white/10" />
                <button type="button" onClick={removeFile} className="absolute -top-2 -right-2 bg-brand-red text-white rounded-full p-1">
                  <X size={14} />
                </button>
              </div>
            )}
            {errors.file && <p className="text-brand-red text-xs mt-1">{errors.file}</p>}
          </div>

          {submitting && progress > 0 && (
            <div className="w-full bg-bg rounded h-2 overflow-hidden">
              <div className="bg-brand-red h-full transition-all" style={{ width: `${progress}%` }} />
            </div>
          )}

          <Button type="submit" className="w-full justify-center">
            {submitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </section>
    </>
  );
}
