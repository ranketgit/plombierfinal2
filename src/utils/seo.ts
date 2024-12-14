export function generateSchema(location: string) {
  return {
    "@context": "http://schema.org",
    "@type": "Product",
    name: `Plombier ${location} en Urgence 24/7`,
    brand: "Plombier en Urgence",
    image: "https://express-debouchage.com/plombier-en-urgence.jpg",
    description: `Plombier ${location}. Intervention rapide 24/7 par un plombier agréé. Dépannage d'urgence, installation, réparation. ☎ 0472/80.80.80`,
    sku: "0472800009",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "9.9",
      ratingCount: "3",
      bestRating: "10",
      worstRating: "1",
    },
    offers: {
      "@type": "aggregateOffer",
      availability: "http://schema.org/InStock",
      priceCurrency: "EUR",
      lowPrice: "159",
      offerCount: "130",
      highPrice: "265",
    },
  };
}
