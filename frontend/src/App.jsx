import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import AdminLayout from './layouts/AdminLayout';
import ProtectedRoute from './admin/ProtectedRoute';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const WatchShows = lazy(() => import('./pages/WatchShows'));
const Bands = lazy(() => import('./pages/Bands'));
const Racing = lazy(() => import('./pages/Racing'));
const Team = lazy(() => import('./pages/Team'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const Contact = lazy(() => import('./pages/Contact'));

const Login = lazy(() => import('./admin/Login'));
const Dashboard = lazy(() => import('./admin/Dashboard'));
const BlogList = lazy(() => import('./admin/BlogList'));
const BlogEditor = lazy(() => import('./admin/BlogEditor'));
const TeamList = lazy(() => import('./admin/TeamList'));
const TeamEditor = lazy(() => import('./admin/TeamEditor'));
const ServicesList = lazy(() => import('./admin/ServicesList'));
const ServicesEditor = lazy(() => import('./admin/ServicesEditor'));
const HeroSettings = lazy(() => import('./admin/HeroSettings'));
const Media = lazy(() => import('./admin/Media'));
const Messages = lazy(() => import('./admin/Messages'));
const GalleryList = lazy(() => import('./admin/GalleryList'));
const GalleryEditor = lazy(() => import('./admin/GalleryEditor'));

const Loader = () => (
  <div className="min-h-screen flex items-center justify-center bg-bg text-gray">Loading...</div>
);

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/watch" element={<WatchShows />} />
          <Route path="/bands" element={<Bands />} />
          <Route path="/racing" element={<Racing />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route path="/admin/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="blog" element={<BlogList />} />
          <Route path="blog/new" element={<BlogEditor />} />
          <Route path="blog/:id" element={<BlogEditor />} />
          <Route path="team" element={<TeamList />} />
          <Route path="team/new" element={<TeamEditor />} />
          <Route path="team/:id" element={<TeamEditor />} />
          <Route path="services" element={<ServicesList />} />
          <Route path="services/new" element={<ServicesEditor />} />
          <Route path="services/:id" element={<ServicesEditor />} />
          <Route path="hero" element={<HeroSettings />} />
          <Route path="media" element={<Media />} />
          <Route path="messages" element={<Messages />} />
          <Route path="gallery" element={<GalleryList />} />
          <Route path="gallery/new" element={<GalleryEditor />} />
          <Route path="gallery/:id" element={<GalleryEditor />} />
        </Route>

        <Route
          path="*"
          element={
            <div className="min-h-screen flex flex-col items-center justify-center bg-bg text-white gap-2">
              <h1 className="text-4xl font-heading">404</h1>
              <p className="text-gray">Page not found</p>
            </div>
          }
        />
      </Routes>
    </Suspense>
  );
}
