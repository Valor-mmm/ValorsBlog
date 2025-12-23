interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  ogType?: "website" | "article";
  image?: string;
  keywords?: string[];
  publishedAt?: Date;
  updatedAt?: Date;
  author?: string;
}

export default function SEO({
  title,
  description,
  url,
  ogType = "website",
  image,
  keywords,
  publishedAt,
  updatedAt,
  author = "Valor",
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

  const jsonLd = ogType === "article"
    ? {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": title || siteName,
      "description": metaDescription,
      "author": {
        "@type": "Person",
        "name": author,
        "url": url ? new URL(url).origin : undefined,
      },
      "datePublished": publishedAt?.toISOString(),
      "dateModified": updatedAt?.toISOString() || publishedAt?.toISOString(),
      "image": metaImage,
      "url": url,
      "keywords": keywords?.join(", "),
    }
    : {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": siteName,
      "url": url ? new URL(url).origin : undefined,
      "description": defaultDescription,
      "author": {
        "@type": "Person",
        "name": author,
      },
    };

  return (
    <head>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords.join(", ")} />}
      <meta name="author" content={author} />

      {/* LLM / GEO specific meta tags */}
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      {publishedAt && (
        <meta
          name="article:published_time"
          content={publishedAt.toISOString()}
        />
      )}
      {updatedAt && (
        <meta name="article:modified_time" content={updatedAt.toISOString()} />
      )}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={ogType} />
      {url && <meta property="og:url" content={url} />}
      {url && <link rel="canonical" href={url} />}
      {metaImage && <meta property="og:image" content={metaImage} />}
      <meta property="og:site_name" content={siteName} />

      {/* JSON-LD Structured Data for GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </head>
  );
}
