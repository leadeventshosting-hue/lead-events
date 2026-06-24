import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords }) {
  const defaultTitle = "Lead Events | Premium Event Management Company UAE";
  const defaultDescription = "Lead Events is a premier event management company in the UAE, specializing in corporate events, exhibitions, brand activations, and conferences.";
  const defaultKeywords = "Lead Events UAE, event management company UAE, corporate event planners Dubai, exhibition event company UAE, brand activation agency Dubai, conference management UAE";

  return (
    <Helmet>
      <title>{title ? `${title} | Lead Events` : defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta property="og:title" content={title ? `${title} | Lead Events` : defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}
