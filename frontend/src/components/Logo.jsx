import { Link } from 'react-router-dom';

export default function Logo({ className = '' }) {
  return (
    <Link to="/" className={`inline-flex items-center ${className}`}>
      <img src="/logo.png" alt="iTEN.TV" className="h-14 md:h-16 w-auto object-contain" />
    </Link>
  );
}
