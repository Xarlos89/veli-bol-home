// The page's JSON-LD graph, assembled from the same arrays the sections render
// so the two can't drift apart. Rendered into the prerendered HTML by
// src/seo/StructuredData.jsx.
import { SITE_URL, business, pricing, seo } from './business.js'
import { faqs } from '../sections/FAQ.jsx'
import { tiers } from '../sections/PrivateTour.jsx'
import { reviews } from '../sections/Reviews.jsx'

const id = (fragment) => `${SITE_URL}/#${fragment}`

// '€150' -> '150'
const amount = (price) => price.replace(/[^\d.]/g, '')

const priceNumbers = tiers.map((t) => Number(amount(t.price)))

// The guest testimonials exactly as the Reviews section shows them — Search
// Console flags a Product with no `review`, and Google requires that any review
// in the markup also be visible on the page. Each card renders five filled
// stars, so ratingValue is 5.
const productReviews = reviews.map(({ name, text }) => ({
  '@type': 'Review',
  author: { '@type': 'Person', name },
  reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' },
  reviewBody: text,
}))

const organization = {
  '@type': ['TravelAgency', 'LocalBusiness'],
  '@id': id('business'),
  name: business.name,
  alternateName: business.alternateName,
  url: `${SITE_URL}/`,
  image: seo.ogImage,
  logo: `${SITE_URL}/apple-touch-icon.png`,
  description:
    'Family-run half-day boat excursions from Bol on Brač island, Croatia. Hidden Adriatic bays off the island of Hvar, two swimming stops, snorkeling and paddleboards, and a slow lunch aboard a handcrafted wooden motosailer.',
  slogan: 'A quiet half-day on the Adriatic.',
  telephone: business.telephone,
  email: business.email,
  priceRange: '€€',
  currenciesAccepted: pricing.currency,
  foundingDate: business.foundingDate,
  hasMap: business.mapUrl,
  address: {
    '@type': 'PostalAddress',
    streetAddress: business.address.street,
    addressLocality: business.address.locality,
    addressRegion: business.address.region,
    addressCountry: business.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: business.geo.lat,
    longitude: business.geo.lng,
  },
  areaServed: [
    { '@type': 'Place', name: 'Bol, Brač, Croatia' },
    { '@type': 'Place', name: 'Brač island, Croatia' },
    { '@type': 'Place', name: 'Hvar island, Croatia' },
    { '@type': 'Place', name: 'Split-Dalmatia County, Croatia' },
  ],
  sameAs: business.sameAs,
  makesOffer: [{ '@id': id('excursion') }, { '@id': id('private') }],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: business.rating.value,
    reviewCount: business.rating.count,
  },
}

const excursion = {
  '@type': 'Product',
  '@id': id('excursion'),
  name: 'Half-Day Boat Excursion from Bol to Hvar',
  description:
    'A quiet half-day on the Adriatic — across the channel from Bol to the island of Hvar for two swimming stops in hidden bays, with snorkeling equipment, stand-up paddleboards and a slide, plus an optional slow lunch aboard a family-run wooden motosailer. Departs Bol at 10:00 and returns around 16:00.',
  image: seo.ogImage,
  brand: { '@id': id('business') },
  category: 'Boat tour',
  offers: {
    '@type': 'Offer',
    price: pricing.adult,
    priceCurrency: pricing.currency,
    priceValidUntil: pricing.priceValidUntil,
    availability: 'https://schema.org/InStock',
    url: `${SITE_URL}/#book`,
    seller: { '@id': id('business') },
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: business.rating.value,
    reviewCount: business.rating.count,
    bestRating: '5',
    worstRating: '1',
  },
  review: productReviews,
}

// The excursion described as a trip as well as a product — this is the shape
// Google uses to understand what the tour actually is and where it goes.
const trip = {
  '@type': 'TouristTrip',
  '@id': id('trip'),
  name: 'Half-day boat trip from Bol to the bays of Hvar',
  description:
    'Six hours from Bol harbour: about an hour under way and five hours at anchor, split across two different bays across the channel on Hvar. A different bay every day.',
  provider: { '@id': id('business') },
  touristType: ['Families', 'Couples', 'Swimmers and snorkelers'],
  itinerary: {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Place',
          name: 'Bol, Brač',
          address: {
            '@type': 'PostalAddress',
            streetAddress: business.address.street,
            addressLocality: 'Bol',
            addressCountry: 'HR',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: { '@type': 'Place', name: 'Hidden bays on the island of Hvar, Croatia' },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: { '@type': 'Place', name: 'Bol, Brač' },
      },
    ],
  },
  offers: { '@id': id('excursion') },
}

// Typed as a Service, not a Product. Search Console flags any Product without a
// rating, and the charter has no reviews of its own — the 38 Google reviews are
// of the business as a whole, and reusing them here would be claiming a rating
// for something nobody has rated. Service carries the same price range without
// asking for one.
const privateCharter = {
  '@type': 'Service',
  '@id': id('private'),
  name: 'Private Sunset Boat Charter from Bol',
  description:
    'The whole boat to yourselves for a sunset charter out of Bol, booked by the hour — one to three hours, with wine, food on board and a swim stop depending on the length.',
  image: `${SITE_URL}/images/aerial-bol-sunset.webp`,
  provider: { '@id': id('business') },
  serviceType: 'Private boat charter',
  areaServed: { '@type': 'Place', name: 'Bol, Brač, Croatia' },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: pricing.currency,
    lowPrice: String(Math.min(...priceNumbers)),
    highPrice: String(Math.max(...priceNumbers)),
    offerCount: String(tiers.length),
    availability: 'https://schema.org/InStock',
    url: `${SITE_URL}/#private`,
    seller: { '@id': id('business') },
    offers: tiers.map((tier) => ({
      '@type': 'Offer',
      name: `Private sunset charter — ${tier.duration}`,
      description: `${tier.duration} private charter. Includes: ${tier.includes}.`,
      price: amount(tier.price),
      priceCurrency: pricing.currency,
      priceValidUntil: pricing.priceValidUntil,
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/#private`,
    })),
  },
}

const faqPage = {
  '@type': 'FAQPage',
  '@id': id('faq'),
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

const website = {
  '@type': 'WebSite',
  '@id': id('website'),
  url: `${SITE_URL}/`,
  name: business.name,
  alternateName: business.alternateName,
  inLanguage: 'en',
  publisher: { '@id': id('business') },
}

const webPage = {
  '@type': 'WebPage',
  '@id': id('webpage'),
  url: `${SITE_URL}/`,
  name: seo.title,
  description: seo.description,
  isPartOf: { '@id': id('website') },
  about: { '@id': id('business') },
  primaryImageOfPage: { '@id': id('heroimage') },
  mainEntity: { '@id': id('excursion') },
  inLanguage: 'en',
}

const heroImage = {
  '@type': 'ImageObject',
  '@id': id('heroimage'),
  url: seo.heroImage,
  contentUrl: seo.heroImage,
  width: 2000,
  height: 1059,
  caption:
    'The Veli Bol excursion boat anchored in a hidden Adriatic bay near Bol on Brač, Croatia',
}

export const graph = {
  '@context': 'https://schema.org',
  '@graph': [
    website,
    webPage,
    heroImage,
    organization,
    excursion,
    trip,
    privateCharter,
    faqPage,
  ],
}
