export default function SectionHeading({ eyebrow, title, highlight, description, align = 'left' }) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`max-w-2xl mb-10 ${alignCls}`}>
      {eyebrow && (
        <span className="text-brand-red font-heading text-sm tracking-[0.2em] uppercase mb-2 block">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase">
        {title} {highlight && <span className="text-brand-red">{highlight}</span>}
      </h2>
      {description && <p className="text-gray mt-4">{description}</p>}
    </div>
  );
}
