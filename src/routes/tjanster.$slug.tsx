import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { ArrowRight, Check, MapPin, Phone } from 'lucide-react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { getService } from '@/data/services'
import { site } from '@/data/site'
import { formatPrice } from '@/lib/utils'

export const Route = createFileRoute('/tjanster/$slug')({
  loader: ({ params }) => {
    const service = getService(params.slug)
    if (!service) throw notFound()
    return service
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} i Handen | ${site.name}` },
          { name: 'description', content: loaderData.description },
          { property: 'og:title', content: `${loaderData.title} i Handen` },
          { property: 'og:description', content: loaderData.description },
          { property: 'og:image', content: `${site.url}${loaderData.image}` },
        ]
      : [],
    scripts: loaderData
      ? [
          {
            type: 'application/ld+json',
            children: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: loaderData.title,
              description: loaderData.description,
              url: `${site.url}/tjanster/${loaderData.slug}`,
              image: `${site.url}${loaderData.image}`,
              provider: { '@id': `${site.url}/#organization` },
              offers: {
                '@type': 'Offer',
                price: loaderData.price,
                priceCurrency: 'SEK',
                availability: 'https://schema.org/InStock',
              },
            }),
          },
          {
            type: 'application/ld+json',
            children: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: loaderData.faq.map((entry) => ({
                '@type': 'Question',
                name: entry.q,
                acceptedAnswer: { '@type': 'Answer', text: entry.a },
              })),
            }),
          },
        ]
      : [],
  }),
  component: ServiceDetailPage,
})

function ServiceDetailPage() {
  const service = Route.useLoaderData()

  return (
    <div className="page-wrapper bg-zinc-950">
      <div className="site-container">
        <section className="relative mx-auto mb-8 flex min-h-[500px] max-w-[1400px] items-center overflow-hidden rounded-3xl bg-zinc-900 text-white">
          <div className="absolute inset-0 z-0">
            <img
              src={service.image}
              alt={service.title}
              fetchPriority="high"
              className="absolute inset-0 size-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-900/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-2xl p-8 md:p-12 lg:p-16">
            <p className="mb-4 text-sm font-bold tracking-wider text-blue-400 uppercase">
              {service.tagline}
            </p>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">{service.title}</h1>
            <p className="mb-8 text-lg leading-relaxed text-zinc-300">
              {service.description}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button asChild size="lg">
                <Link to="/boka" search={{ service: service.slug }}>
                  Boka Tid Nu
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={site.phoneHref}>
                  <Phone className="size-4" />
                  Ring Oss {site.phone}
                </a>
              </Button>
            </div>
          </div>
        </section>

        <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <div className="rounded-2xl border border-white/5 bg-zinc-900/50 p-8">
              <h2 className="mb-3 text-xl font-bold text-white">Tecken på slitage</h2>
              <p className="leading-relaxed text-zinc-400">{service.wearSigns}</p>
            </div>

            <div className="rounded-2xl border border-white/5 bg-zinc-900/50 p-8">
              <h2 className="mb-3 text-xl font-bold text-white">
                Varför är detta viktigt?
              </h2>
              <p className="leading-relaxed text-zinc-400">{service.why}</p>
            </div>

            <div className="rounded-2xl border border-white/5 bg-zinc-900/50 p-8">
              <h2 className="mb-6 text-xl font-bold text-white">Så går det till</h2>
              <ol className="space-y-5">
                {service.steps.map((step, index) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="pt-1 text-zinc-300">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl border border-white/5 bg-zinc-900/50 p-8">
              <h2 className="mb-2 text-xl font-bold text-white">Vanliga frågor</h2>
              <Accordion type="single" collapsible>
                {service.faq.map((entry) => (
                  <AccordionItem key={entry.q} value={entry.q}>
                    <AccordionTrigger>{entry.q}</AccordionTrigger>
                    <AccordionContent>{entry.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="rounded-2xl border border-blue-500/20 bg-zinc-900 p-8">
              <span className="text-sm text-zinc-400">Pris från</span>
              <div className="mb-6 text-4xl font-bold text-white">
                {formatPrice(service.price)} kr
              </div>

              <ul className="mb-8 space-y-3">
                {service.badges.map((badge) => (
                  <li key={badge} className="flex items-center gap-3 text-zinc-300">
                    <Check className="size-4 shrink-0 text-blue-500" />
                    {badge}
                  </li>
                ))}
              </ul>

              <Button asChild size="lg" className="w-full">
                <Link to="/boka" search={{ service: service.slug }}>
                  Välj Paket
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>

            <div className="rounded-2xl border border-white/5 bg-zinc-900/50 p-8">
              <h2 className="mb-4 text-lg font-bold text-white">
                Din bilverkstad i Handen, Haninge
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-zinc-400">
                Vi finns på {site.address.street} i {site.address.city} – enkelt att hitta
                med gratis parkering. Öppet mån-fre 08-17.
              </p>
              <div className="mb-6 flex items-start gap-3 text-zinc-300">
                <MapPin className="mt-0.5 size-4 shrink-0 text-blue-500" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.postalCode} {site.address.city}
                </span>
              </div>
              <Button asChild variant="outline" className="w-full">
                <a href={site.maps} target="_blank" rel="noopener noreferrer">
                  Öppna i Google Maps
                </a>
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
