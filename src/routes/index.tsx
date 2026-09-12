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
  {
    label: 'Betyg',
    value: `${site.rating.display} av 5 · ${site.rating.count} omdömen`,
  },
]

function Hero() {
  return (
    <section className="relative isolate flex min-h-[560px] flex-col justify-end overflow-hidden border-b border-hairline lg:min-h-[640px]">
      {/*
        Fotot ligger bakom texten, inte bredvid den. Slöjan över det byter
        riktning med skärmen: på en telefon faller texten över hela bredden,
        så den mörknar nerifrån och upp. Från stora skärmar står texten till
        vänster och slöjan går i sidled, vilket lämnar mekanikern och hjulet
        fria till höger.
      */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero.webp"
          alt="Mekaniker byter hjul hos XM Bilverkstad i Handen"
          fetchPriority="high"
          className="size-full object-cover object-[66%_45%] brightness-[0.68] saturate-[0.66] lg:object-[62%_45%] lg:brightness-[0.82] lg:saturate-[0.72]"
        />
        {/* Håller fotot i grafitpaletten i stället för att låta det spreta. */}
        <div className="absolute inset-0 bg-canvas/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas from-18% via-canvas/90 to-canvas/55 lg:hidden" />
        <div className="absolute inset-0 hidden lg:block lg:bg-gradient-to-r lg:from-canvas lg:from-38% lg:via-canvas/70 lg:via-64% lg:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 hidden h-1/3 bg-gradient-to-t from-canvas to-transparent lg:block" />
      </div>

      <div className="site-container pt-24 pb-10 md:pt-28 lg:pt-36 lg:pb-12">
        <p className="eyebrow">Bilverkstad i Handen · alla märken</p>

        <h1 className="display mt-5 max-w-[15ch] text-[2.4rem] leading-[1.02] text-white sm:text-5xl lg:text-[3.7rem]">
          <span className="text-brand">Fast pris</span> innan vi lyfter bilen.
        </h1>

        <p className="mt-7 max-w-[46ch] text-lg leading-relaxed text-ink-2">
          Vi servar, byter däck och felsöker på {site.address.street}. Du får priset innan
          vi börjar, och nybilsgarantin påverkas inte.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
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

      {/* Faktaraden ligger som en linjerad list längst ner, ovanpå fotot. */}
      <div className="site-container">
        <dl className="grid border-t border-white/15 sm:grid-cols-3">
          {heroFacts.map((fact, index) => (
            <div
              key={fact.label}
              className={`py-4 sm:px-7 ${
                index === 0
                  ? 'sm:pl-0'
                  : 'border-t border-white/15 sm:border-t-0 sm:border-l'
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
