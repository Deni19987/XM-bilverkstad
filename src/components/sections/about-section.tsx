import { Link } from '@tanstack/react-router'
import { Check, ShieldCheck } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const highlights = [
  'Certifierade bilmekaniker',
  'Moderna OBD-diagnosverktyg',
  '2 års garanti på arbete',
  'Nybilsgaranti gäller',
]

export function AboutSection({ showCta = true }: { showCta?: boolean }) {
  return (
    <section className="section-padding border-t border-white/5 bg-zinc-950">
      <div className="site-container">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="group relative isolate">
            <div className="absolute -inset-2 rotate-2 rounded-3xl bg-gradient-to-r from-blue-900/30 to-zinc-800/30 transition-transform duration-500 group-hover:rotate-1 sm:-inset-4" />
            <div className="relative h-[500px] w-full overflow-hidden rounded-2xl shadow-2xl shadow-black">
              <img
                src="/images/om-oss.webp"
                alt="Bilnycklar lämnas över utanför XM Bilverkstad i Handen, Haninge"
                loading="lazy"
                className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          <div>
            <Badge
              variant="muted"
              className="mb-6 max-w-full text-left whitespace-normal"
            >
              <ShieldCheck className="size-4" />
              Bilverkstad Haninge – Förtroende &amp; Kvalitet
            </Badge>

            <h2 className="mb-6 text-4xl leading-tight font-bold text-white md:text-5xl">
              Din bilmekaniker i Handen
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-zinc-400">
              XM Bilverkstad på Anläggarvägen 20 i Handen är en modern, oberoende
              bilverkstad som servar alla bilmärken. Vi erbjuder bilservice, däckbyte,
              bromsbyte, oljebyte och felsökning – allt med garanti och fasta priser.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-zinc-400">
              Våra certifierade bilmekaniker i Haninge servar kunder från hela södra
              Stockholm, inklusive Handen, Jordbro, Västerhaninge och Tyresö. Hos oss är
              du alltid i trygga händer.
            </p>

            <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="rounded-full border border-blue-500/30 bg-blue-900/20 p-1.5">
                    <Check className="size-4 text-blue-400" />
                  </div>
                  <span className="font-medium text-zinc-300">{item}</span>
                </div>
              ))}
            </div>

            {showCta ? (
              <Button asChild variant="light" size="lg">
                <Link to="/om-oss">Läs mer om oss</Link>
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
