import { NavLink, Outlet } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  Users,
  Wrench,
  Image as ImageIcon,
  Mail,
  Settings,
  Video,
  LogOut,
  GalleryHorizontal,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const LINKS = [
  { to: '/admin', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/admin/blog', label: 'Blog', icon: FileText },
  { to: '/admin/team', label: 'Team', icon: Users },
  { to: '/admin/services', label: 'Services', icon: Wrench },
  { to: '/admin/media', label: 'Media', icon: ImageIcon },
  { to: '/admin/gallery', label: 'Gallery', icon: GalleryHorizontal },
  { to: '/admin/messages', label: 'Messages', icon: Mail },
  { to: '/admin/hero', label: 'Hero Settings', icon: Video },
];

export default function AdminLayout() {
  const { admin, logout } = useAuth();

  return (
    <div className="min-h-screen flex bg-bg text-white">
      <aside className="w-64 bg-elevated border-r border-white/10 flex flex-col">
        <div className="px-6 py-6 border-b border-white/10">
          <span className="font-heading font-bold text-xl">
            iTEN<span className="text-brand-red">.TV</span>
          </span>
          <p className="text-xs text-gray mt-1">Admin Panel</p>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-1">
          {LINKS.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded text-sm font-medium transition-colors ${
                  isActive ? 'bg-brand-red text-white' : 'text-gray hover:bg-card hover:text-white'
                }`
              }
            >
              <Icon size={16} />
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="px-4 py-4 border-t border-white/10">
          <p className="text-xs text-gray px-2 mb-2 truncate">{admin?.email}</p>
          <button
            onClick={logout}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray hover:text-brand-red w-full"
          >
            <LogOut size={16} /> Log Out
          </button>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto p-8">
        <Outlet />
      </main>
    </div>
  );
}
