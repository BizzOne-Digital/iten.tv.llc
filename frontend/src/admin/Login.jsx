import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      navigate('/admin');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg px-6">
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-card border border-white/10 rounded-lg p-8">
        <div className="text-center mb-8">
          <span className="font-heading font-bold text-2xl text-white">
            iTEN<span className="text-brand-red">.TV</span>
          </span>
          <p className="text-gray text-sm mt-1">Admin Login</p>
        </div>
        {error && <p className="text-brand-red text-sm mb-4">{error}</p>}
        <div className="mb-4">
          <label className="text-sm text-gray block mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-bg border border-white/10 rounded px-4 py-2.5 text-white outline-none focus:border-brand-red"
          />
        </div>
        <div className="mb-6">
          <label className="text-sm text-gray block mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full bg-bg border border-white/10 rounded px-4 py-2.5 text-white outline-none focus:border-brand-red"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-brand-red text-white font-heading uppercase py-3 rounded hover:bg-brand-brightred transition-colors disabled:opacity-50"
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
}
