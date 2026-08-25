import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, image }) {
  const fullTitle = title ? `${title} | iTEN.TV` : 'iTEN.TV, LLC — Powered by Passion. Powered by Stories.';
  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
    </Helmet>
  );
}
