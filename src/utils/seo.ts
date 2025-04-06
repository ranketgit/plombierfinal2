export function generateSchema(
  title: string,
  description: string,
  ratingCount: number = 37,
) {
  return {
    "@context": "http://schema.org",
    name: `${title}`,
    brand: "Plombier en Urgence",
    image: "https://express-debouchage.com/plombier-en-urgence.jpg",
    description: `${description}`,
    sku: "0472800009",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "9.9",
      ratingCount: `${ratingCount}`,
      bestRating: "10",
      worstRating: "1",
    },
    offers: {
      "@type": "aggregateOffer",
      availability: "http://schema.org/InStock",
      priceCurrency: "EUR",
      lowPrice: "159",
      offerCount: "130",
      highPrice: "318",
    },
  };
}
