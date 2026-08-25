import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  icon: Icon,
  className = '',
}) {
  const base =
    'inline-flex items-center gap-2 px-6 py-3 font-heading font-semibold uppercase tracking-wide text-sm transition-all duration-300';
  const variants = {
    primary: 'bg-brand-red text-white hover:bg-brand-brightred hover:shadow-[0_0_20px_rgba(255,22,22,0.5)]',
    outline: 'border border-white/30 text-white hover:border-brand-red hover:text-brand-red',
    ghost: 'text-white hover:text-brand-red',
  };
  const cls = `${base} ${variants[variant] || variants.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
        {Icon && <Icon size={18} />}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} target="_blank" rel="noreferrer">
        {children}
        {Icon && <Icon size={18} />}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
      {Icon && <Icon size={18} />}
    </button>
  );
}
