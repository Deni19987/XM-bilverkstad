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
      <div className="site-container pt-14 pb-10 md:pt-20 md:pb-12">
        {/*
          Rubriken till vänster och löftet till höger delar samma baslinje, så
          att raden fyller bredden utan att texten blir en lång remsa. Under
          dem ligger fakta på en linjerad rad, och först därefter fotot.
        */}
        <div className="grid gap-x-16 gap-y-9 lg:grid-cols-[1.12fr_0.88fr] lg:items-end">
          <div>
            <p className="eyebrow">Bilverkstad i Handen · alla märken</p>
            <h1 className="display mt-5 max-w-[15ch] text-[2.4rem] leading-[1.02] text-white sm:text-5xl lg:text-[3.7rem]">
              <span className="text-brand">Fast pris</span> innan vi lyfter bilen.
            </h1>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-[46ch] text-lg leading-relaxed text-ink-2">
              Vi servar, byter däck och felsöker på {site.address.street}. Du får priset
              innan vi börjar, och nybilsgarantin påverkas inte.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
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
          </div>
        </div>

        <dl className="mt-12 grid border-t border-hairline sm:grid-cols-3">
          {heroFacts.map((fact, index) => (
            <div
              key={fact.label}
              className={`py-4 sm:px-7 ${
                index === 0
                  ? 'sm:pl-0'
                  : 'border-t border-hairline sm:border-t-0 sm:border-l'
              } ${index === heroFacts.length - 1 ? 'sm:pr-0' : ''}`}
            >
              <dt className="numeric text-[0.7rem] tracking-[0.1em] text-ink-3 uppercase">
                {fact.label}
              </dt>
              <dd className="mt-1.5 text-[0.9rem] text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/*
        Fotot går kant till kant under texten. Det behöver ingen mörk slöja
        över sig längre, eftersom ingen text ligger ovanpå — bara en svag
        övertoning nedtill så att betygsplattan har något att vila mot.
      */}
      <div className="relative border-t border-hairline">
        <img
          src="/images/hero.webp"
          alt="Mekaniker byter hjul hos XM Bilverkstad i Handen"
          fetchPriority="high"
          className="h-[clamp(220px,36vw,440px)] w-full object-cover object-[58%_45%] brightness-[0.86] saturate-[0.8]"
        />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-canvas/85 to-transparent" />

        <div className="site-container absolute inset-x-0 bottom-0">
          <div className="inline-flex items-center gap-3.5 border border-b-0 border-hairline bg-canvas px-5 py-4">
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
