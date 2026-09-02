import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Users, Wrench, Mail } from 'lucide-react';
import api from '../services/api';

export default function Dashboard() {
  const [stats, setStats] = useState({ posts: 0, team: 0, services: 0, messages: 0 });
  const [recentMessages, setRecentMessages] = useState([]);

  useEffect(() => {
    Promise.all([
      api.get('/blog', { params: { all: true, limit: 1 } }),
      api.get('/team'),
      api.get('/services'),
      api.get('/contact'),
    ])
      .then(([posts, team, services, messages]) => {
        setStats({
          posts: posts.data.total || 0,
          team: team.data.length || 0,
          services: services.data.length || 0,
          messages: messages.data.length || 0,
        });
        setRecentMessages((messages.data || []).slice(0, 5));
      })
      .catch(() => {});
  }, []);

  const cards = [
    { label: 'Blog Posts', value: stats.posts, icon: FileText, to: '/admin/blog' },
    { label: 'Team Members', value: stats.team, icon: Users, to: '/admin/team' },
    { label: 'Services', value: stats.services, icon: Wrench, to: '/admin/services' },
    { label: 'Messages', value: stats.messages, icon: Mail, to: '/admin/messages' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-heading uppercase text-white mb-8">Dashboard</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {cards.map(({ label, value, icon: Icon, to }) => (
          <Link key={label} to={to} className="bg-card border border-white/10 rounded-lg p-6 hover:border-brand-red/50">
            <Icon size={22} className="text-brand-red mb-3" />
            <div className="text-3xl font-heading font-bold text-white">{value}</div>
            <div className="text-gray text-sm">{label}</div>
          </Link>
        ))}
      </div>

      <div className="bg-card border border-white/10 rounded-lg p-6">
        <h2 className="font-heading uppercase text-white mb-4">Recent Messages</h2>
        {recentMessages.length === 0 && <p className="text-gray text-sm">No messages yet.</p>}
        <div className="space-y-3">
          {recentMessages.map((m) => (
            <div key={m._id} className="flex justify-between items-center border-b border-white/5 pb-3">
              <div>
                <p className="text-white text-sm">{m.name} <span className="text-gray">- {m.email}</span></p>
                <p className="text-gray text-xs line-clamp-1">{m.message}</p>
              </div>
              <span className="text-xs px-2 py-1 rounded bg-brand-red/10 text-brand-red">{m.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
