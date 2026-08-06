import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, BellRing } from 'lucide-react'

import { AboutSection } from '@/components/sections/about-section'
import { ContactSection } from '@/components/sections/contact-section'
import { Features } from '@/components/sections/features'
import { ServicesSection } from '@/components/sections/services-section'
import { Testimonials } from '@/components/sections/testimonials'
import { TrackingSection } from '@/components/sections/tracking-section'
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

function Hero() {
  return (
    <section className="relative flex h-[85vh] min-h-[600px] items-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.webp"
          alt="XM Bilverkstad Haninge"
          fetchPriority="high"
          className="absolute inset-0 size-full object-cover opacity-60"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/90 to-transparent sm:w-[70%]" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      <div className="site-container relative z-20">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 backdrop-blur-md">
          <span className="flex size-2 animate-pulse rounded-full bg-blue-500" />
          <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">
            Öppet för bokningar
          </span>
        </div>

        <h1 className="mb-6 text-4xl leading-[1.1] font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
          Din bilverkstad i Haninge &amp; Handen
        </h1>

        <p className="mb-10 max-w-lg text-base leading-relaxed font-light text-zinc-400 md:text-xl">
          Certifierade bilmekaniker med fasta priser. Bilservice, däckbyte, däckhotell,
          bromsbyte och oljebyte för alla bilmärken. {site.address.street},{' '}
          {site.address.city}.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link to="/boka">Boka Tid Online</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <Link to="/tjanster">Våra Tjänster</Link>
          </Button>
        </div>

        <Link
          to="/sa-fungerar-det"
          className="group mt-8 inline-flex items-center gap-3 text-sm text-zinc-400 transition-colors hover:text-zinc-200"
        >
          <BellRing className="size-4 shrink-0 text-blue-500" />
          <span>
            Nyhet: följ jobbet i mobilen och godkänn kostnaden innan vi börjar
          </span>
          <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  )
}

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <TrackingSection />
      <AboutSection />
      <ServicesSection items={featuredServices} />
      <Testimonials />
      <ContactSection />
    </>
  )
}
