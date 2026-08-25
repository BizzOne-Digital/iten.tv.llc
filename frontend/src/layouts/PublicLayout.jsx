import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import ScrollToTop from '../components/ScrollToTop';

export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
}
