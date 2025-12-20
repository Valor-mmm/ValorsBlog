interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  ogType?: "website" | "article";
  image?: string;
  keywords?: string[];
}

export default function SEO({
  title,
  description,
  url,
  ogType = "website",
  image,
  keywords,
}: SEOProps) {
  const siteName = "Valor's Blog";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const defaultDescription =
    "Welcome to Valor's Blog - exploring technology, development, and more.";
  const metaDescription = description || defaultDescription;

  return (
    <head>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords.join(", ")} />}

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={ogType} />
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta
        name="twitter:card"
        content={image ? "summary_large_image" : "summary"}
      />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {image && <meta name="twitter:image" content={image} />}
    </head>
  );
}
