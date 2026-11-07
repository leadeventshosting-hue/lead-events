import { Helmet } from 'react-helmet-async';

/**
 * SEO Component — Lead Events UAE
 *
 * Props:
 *  title        — page title (appended with " | Lead Events UAE")
 *  description  — meta description (150-160 chars recommended)
 *  keywords     — comma-separated keyword string
 *  canonical    — canonical URL for the page
 *  ogImage      — Open Graph image URL
 *  schema       — additional JSON-LD schema object (merged alongside defaults)
 *  breadcrumbs  — array of { name, url } for BreadcrumbList schema
 *  noIndex      — set true to noindex the page
 */
export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  schema,
  breadcrumbs,
  noIndex = false,
}) {
  const SITE_NAME   = 'Lead Events';
  const SITE_URL    = 'https://www.leadevents.com';
  const PHONE       = '+971509689671';
  const EMAIL       = 'info@leadevents.com';
  const DEFAULT_IMG = `${SITE_URL}/og-cover.jpg`;

  const fullTitle = title
    ? `${title} | Lead Events UAE — Premium Event Management Dubai`
    : 'Lead Events UAE | #1 Event Management Company in Dubai & UAE';

  const metaDesc =
    description ||
    'Lead Events is Dubai\'s premier event management company specialising in corporate events, weddings, product launches, gala dinners, exhibitions & conferences across the UAE. Contact us today.';

  const metaKeywords =
    keywords ||
    'event management company Dubai, event planner UAE, corporate event company Dubai, wedding event planner Dubai, gala dinner Dubai, conference management UAE, exhibition company UAE, product launch Dubai, Lead Events UAE';

  const pageCanonical = canonical || SITE_URL;
  const ogImg         = ogImage   || DEFAULT_IMG;

  /* ── Canonical Organization schema ── */
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Lead Events',
    alternateName: 'Lead Events UAE',
    description: metaDesc,
    url: SITE_URL,
    telephone: PHONE,
    email: EMAIL,
    logo: `${SITE_URL}/logo.png`,
    image: ogImg,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Street 12 - Warehouse 4',
      addressLocality: 'Umm Ramool',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
    sameAs: [
      'https://www.instagram.com/leadevents_dubai/?hl=en',
      'https://www.linkedin.com/company/leadevents',
    ],
    areaServed: [
      { '@type': 'City', name: 'Dubai' },
      { '@type': 'City', name: 'Abu Dhabi' },
      { '@type': 'Country', name: 'United Arab Emirates' },
    ],
    knowsAbout: [
      'Corporate Event Management',
      'Wedding Planning',
      'Gala Dinner Organisation',
      'Conference Management',
      'Exhibition Management',
      'Product Launch Events',
      'Brand Activations',
    ],
  };

  /* ── BreadcrumbList schema ── */
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        '@id': `${pageCanonical}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          ...breadcrumbs.map((b, i) => ({
            '@type': 'ListItem',
            position: i + 2,
            name: b.name,
            item: b.url,
          })),
        ],
      }
    : null;

  /* ── WebSite schema ── */
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
  };

  return (
    <Helmet>
      {/* ── Core ── */}
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      <meta name="keywords"    content={metaKeywords} />
      {noIndex
        ? <meta name="robots" content="noindex, nofollow" />
        : <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      }
      <link rel="canonical" href={pageCanonical} />

      <meta name="language"        content="English" />
      <meta name="revisit-after"   content="7 days" />
      <meta name="author"          content="Lead Events UAE" />

      {/* ── Open Graph ── */}
      <meta property="og:type"        content="website" />
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:url"         content={pageCanonical} />
      <meta property="og:site_name"   content={SITE_NAME} />
      <meta property="og:image"       content={ogImg} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt"   content="Lead Events — Premier Event Management Company in Dubai, UAE" />
      <meta property="og:locale"      content="en_AE" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image"       content={ogImg} />
      <meta name="twitter:site"        content="@leadeventsae" />

      {/* ── Mobile / PWA ── */}
      <meta name="viewport"           content="width=device-width, initial-scale=1" />
      <meta name="theme-color"        content="#ED1C24" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* ── Structured Data: Organization ── */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* ── Structured Data: WebSite ── */}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>

      {/* ── Structured Data: Breadcrumbs (if provided) ── */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}

      {/* ── Structured Data: Page-specific (if provided) ── */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
