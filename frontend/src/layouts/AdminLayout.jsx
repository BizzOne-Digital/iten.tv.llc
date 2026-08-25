import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  Users,
  Wrench,
  Image as ImageIcon,
  Mail,
  Video,
  LogOut,
  GalleryHorizontal,
  Menu,
  X,
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
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <div className="min-h-screen flex bg-bg text-white">
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/70 z-40 lg:hidden"
        />
      )}

      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 shrink-0 bg-elevated border-r border-white/10 flex flex-col transform transition-transform duration-300 lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="px-6 py-6 border-b border-white/10 flex items-center justify-between">
          <div>
            <span className="font-heading font-bold text-xl">
              iTEN<span className="text-brand-red">.TV</span>
            </span>
            <p className="text-xs text-gray mt-1">Admin Panel</p>
          </div>
          <button onClick={() => setOpen(false)} className="text-gray hover:text-white lg:hidden">
            <X size={22} />
          </button>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
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

      <div className="flex-1 flex flex-col min-w-0">
        <header className="lg:hidden flex items-center justify-between px-4 py-4 border-b border-white/10 bg-elevated">
          <span className="font-heading font-bold text-lg">
            iTEN<span className="text-brand-red">.TV</span>
          </span>
          <button onClick={() => setOpen(true)} className="text-white">
            <Menu size={24} />
          </button>
        </header>
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
