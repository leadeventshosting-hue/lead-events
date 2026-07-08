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
  const SITE_URL    = 'https://www.leadevents.ae';
  const PHONE       = '+971501234567';
  const EMAIL       = 'info@leadevents.ae';
  const ADDRESS     = 'Boulevard Plaza, Tower 1, Business Bay, Dubai, UAE';
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

  /* ── LocalBusiness schema (always injected) ── */
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'EventVenue'],
    '@id': `${SITE_URL}/#organization`,
    name: 'Lead Events',
    alternateName: 'Lead Events UAE',
    description: metaDesc,
    url: SITE_URL,
    telephone: PHONE,
    email: EMAIL,
    logo: `${SITE_URL}/logo.png`,
    image: ogImg,
    priceRange: '$$$',
    currenciesAccepted: 'AED, USD',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '19:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '10:00', closes: '16:00' },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Boulevard Plaza, Tower 1',
      addressLocality: 'Business Bay',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.186182,
      longitude: 55.264938,
    },
    hasMap: 'https://maps.google.com/?q=Boulevard+Plaza+Tower+1+Business+Bay+Dubai',
    sameAs: [
      'https://www.instagram.com/leadevents.ae',
      'https://www.linkedin.com/company/leadevents',
      'https://www.facebook.com/leadeventsae',
    ],
    areaServed: [
      { '@type': 'City', name: 'Dubai' },
      { '@type': 'City', name: 'Abu Dhabi' },
      { '@type': 'State', name: 'Dubai' },
      { '@type': 'Country', name: 'United Arab Emirates' },
    ],
    serviceType: [
      'Corporate Event Management',
      'Wedding Planning',
      'Gala Dinner Organisation',
      'Conference Management',
      'Exhibition Management',
      'Product Launch Events',
      'Brand Activations',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '124',
      bestRating: '5',
    },
  };

  /* ── BreadcrumbList schema ── */
  const breadcrumbSchema = breadcrumbs
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
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

  /* ── WebSite schema (sitelinks search box signal) ── */
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/search?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
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

      {/* ── Geo targeting ── */}
      <meta name="geo.region"      content="AE-DU" />
      <meta name="geo.placename"   content="Dubai, United Arab Emirates" />
      <meta name="geo.position"    content="25.186182;55.264938" />
      <meta name="ICBM"            content="25.186182, 55.264938" />
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

      {/* ── Structured Data: LocalBusiness ── */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
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
