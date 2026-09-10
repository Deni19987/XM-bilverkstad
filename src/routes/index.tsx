import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Phone } from 'lucide-react'

import { AboutSection } from '@/components/sections/about-section'
import { CarflowSection } from '@/components/sections/carflow-section'
import { ContactSection } from '@/components/sections/contact-section'
import { Features } from '@/components/sections/features'
import { RecoReviews } from '@/components/sections/reco-reviews'
import { ServicesSection } from '@/components/sections/services-section'
import { Button } from '@/components/ui/button'
import { featuredServices } from '@/data/services'
import { site } from '@/data/site'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: `${site.name} – Bilverkstad i Haninge & Handen, Stockholm` },
      {
        name: 'description',
        content:
          'Certifierade bilmekaniker med fasta priser. Bilservice, däckbyte, däckhotell, bromsbyte och oljebyte för alla bilmärken i Handen, Haninge.',
      },
    ],
  }),
  component: HomePage,
})

const heroFacts = [
  { label: 'Adress', value: `${site.address.street}, ${site.address.city}` },
  { label: 'Öppet', value: 'Mån–fre 08–17' },
  { label: 'Betyg', value: `${site.rating.display} av 5` },
]

function Hero() {
  return (
    <section className="border-b border-hairline">
      <div className="mx-auto grid w-full max-w-[1320px] items-stretch lg:grid-cols-[1.02fr_0.98fr]">
        <div className="flex flex-col justify-center px-5 py-16 sm:px-6 lg:py-22 lg:pr-15 lg:pl-8">
          <p className="eyebrow">Bilverkstad i Handen · alla märken</p>

          <h1 className="display mt-5 max-w-[13ch] text-[2.3rem] leading-[1.02] text-white sm:text-5xl lg:text-[3.5rem]">
            <span className="text-brand">Fast pris</span> innan vi lyfter bilen.
          </h1>

          <p className="mt-8 max-w-[44ch] text-lg leading-relaxed text-ink-2">
            Vi servar, byter däck och felsöker på {site.address.street}. Du får priset
            innan vi börjar, och nybilsgarantin påverkas inte.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" className="group">
              <Link to="/boka">
                Boka tid
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/tjanster">Se alla priser</Link>
            </Button>
          </div>

          <dl className="mt-11 flex flex-wrap border-t border-hairline">
            {heroFacts.map((fact) => (
              <div
                key={fact.label}
                className="mr-6 border-r border-hairline pt-4 pr-6 last:mr-0 last:border-r-0 last:pr-0"
              >
                <dt className="numeric text-[0.7rem] tracking-[0.1em] text-ink-3 uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-[0.9rem] text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="group relative min-h-[340px] overflow-hidden border-hairline lg:min-h-[560px] lg:border-l">
          <img
            src="/images/hero.webp"
            alt="Mekaniker byter hjul hos XM Bilverkstad i Handen"
            fetchPriority="high"
            className="absolute inset-0 size-full object-cover object-[58%_50%] brightness-[0.82] saturate-[0.72] transition-transform duration-[1200ms] ease-out group-hover:scale-103"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-canvas via-canvas/45 to-transparent" />

          <div className="absolute bottom-0 left-0 flex items-center gap-3.5 border-t border-r border-hairline bg-canvas px-5 py-4">
            <span className="font-display text-2xl leading-none font-extrabold text-brand">
              {site.rating.count}
            </span>
            <p className="text-[0.78rem] leading-snug text-ink-2">
              <span className="block font-semibold text-ink">omdömen</span>
              {site.rating.display} i snitt på Google
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ClosingCta() {
  return (
    <section className="border-t border-hairline bg-canvas-2">
      <div className="site-container flex flex-wrap items-center justify-between gap-8 py-14">
        <h2 className="display max-w-[20ch] text-2xl leading-tight text-white md:text-[2.1rem]">
          Boka en tid – vi säger priset direkt
        </h2>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" className="group">
            <Link to="/boka">
              Boka tid
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={site.phoneHref}>
              <Phone className="size-4" />
              {site.phone}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

function HomePage() {
  return (
    <>
      <Hero />
      <RecoReviews />
      <Features />
      <ServicesSection items={featuredServices} />
      <CarflowSection />
      <AboutSection />
      <ClosingCta />
      <ContactSection />
    </>
  )
}
