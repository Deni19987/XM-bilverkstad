/// <reference types="vite/client" />
import { HeadContent, Outlet, Scripts, createRootRouteWithContext } from '@tanstack/react-router'
import type { QueryClient } from '@tanstack/react-query'
import type { ReactNode } from 'react'

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { site } from '@/data/site'
import appCss from '@/styles/app.css?url'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  '@id': `${site.url}/#organization`,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  telephone: '+4686600888',
  email: site.email,
  description: site.tagline,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: site.rating.value,
    bestRating: '5',
    worstRating: '1',
    reviewCount: String(site.rating.count),
  },
  sameAs: [site.facebook, site.instagram],
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        title: `${site.name} – Bilverkstad i Haninge & Handen, Stockholm`,
      },
      {
        name: 'description',
        content: site.tagline,
      },
      { name: 'theme-color', content: '#000000' },
      { property: 'og:site_name', content: site.name },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'sv_SE' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(organizationSchema),
      },
    ],
  }),
  shellComponent: RootDocument,
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-grow">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="sv">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
