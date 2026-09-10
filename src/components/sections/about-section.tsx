import { Link } from '@tanstack/react-router'
import { Check } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { site } from '@/data/site'

const highlights = [
  'Certifierade mekaniker',
  'OBD-II diagnos på plats',
  '2 års garanti på arbetet',
  'Nybilsgarantin gäller',
]

export function AboutSection({ showCta = true }: { showCta?: boolean }) {
  return (
    <section className="section-padding border-t border-hairline bg-canvas-2">
      <div className="site-container grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <Link
          to="/om-oss"
          className="group relative block aspect-4/5 overflow-hidden border border-hairline transition-colors duration-300 hover:border-brand/40"
        >
          <img
            src="/images/om-oss.webp"
            alt={`Bilnycklar lämnas över utanför ${site.name} på ${site.address.street} i ${site.address.city}`}
            loading="lazy"
            className="absolute inset-0 size-full object-cover brightness-[0.92] saturate-[0.8] transition-[transform,filter] duration-700 ease-out group-hover:scale-105 group-hover:brightness-100 group-hover:saturate-100"
          />
          <span className="numeric absolute bottom-0 left-0 border-t border-r border-hairline bg-canvas-2 px-4 py-2.5 text-[0.7rem] tracking-[0.08em] text-ink-2 uppercase transition-colors duration-300 group-hover:text-brand">
            {site.address.street}, {site.address.city}
          </span>
        </Link>

        <div>
          <p className="eyebrow">Om verkstaden</p>

          <h2 className="display mt-4 text-3xl leading-[1.04] text-white md:text-[2.6rem]">
            Oberoende verkstad sedan starten
          </h2>

          <p className="mt-5 max-w-[52ch] text-[1.02rem] leading-relaxed text-ink-2">
            XM Bilverkstad är en oberoende verkstad i {site.address.city} som servar alla
            bilmärken. Vi jobbar med samma diagnosverktyg som märkesverkstäderna, men
            sätter priset själva.
          </p>
          <p className="mt-3.5 max-w-[52ch] text-[1.02rem] leading-relaxed text-ink-2">
            Kunderna kommer från hela södra Stockholm – Handen, Jordbro, Västerhaninge och
            Tyresö. Många har varit hos oss i flera bilar i rad.
          </p>

          <ul className="mt-8 grid gap-px border border-hairline bg-hairline sm:grid-cols-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 bg-canvas-2 px-4 py-3.5 text-[0.9rem] text-ink-2"
              >
                <Check className="size-3.5 shrink-0 text-brand" strokeWidth={2.6} />
                {item}
              </li>
            ))}
          </ul>

          {showCta ? (
            <Button asChild variant="outline" size="lg" className="mt-8">
              <Link to="/om-oss">Läs mer om oss</Link>
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  )
}
