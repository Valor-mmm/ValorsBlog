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
  const metaImage = image
    ? (image.startsWith("https")
      ? image
      : `${url ? new URL(url).origin : ""}${image}`)
    : undefined;

  return (
    <head>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords.join(", ")} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={ogType} />
      {url && <meta property="og:url" content={url} />}
      {url && <link rel="canonical" href={url} />}
      {metaImage && <meta property="og:image" content={metaImage} />}
      <meta property="og:site_name" content={siteName} />
    </head>
  );
}
