import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

import type { Service } from '@/data/services'

const priceFormatter = new Intl.NumberFormat('sv-SE')

/**
 * Ett klickbart kort per tjänst. Bilden skalas långsamt upp när muspekaren
 * ligger kvar, vilket är den enda rörelsen på kortet — ramen, rubriken och
 * pilen byter bara färg, så att kortet inte hoppar när man sveper över rutnätet.
 */
export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      to="/tjanster/$slug"
      params={{ slug: service.slug }}
      className="group flex h-full flex-col overflow-hidden border border-hairline bg-canvas-2 transition-colors duration-300 hover:border-brand/40"
    >
      <div className="relative h-36 w-full overflow-hidden bg-panel md:h-52">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="absolute inset-0 size-full object-cover brightness-90 saturate-[0.78] transition-[transform,filter] duration-700 ease-out group-hover:scale-107 group-hover:brightness-100 group-hover:saturate-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas-2 via-canvas-2/25 to-transparent" />
      </div>

      <div className="flex flex-grow flex-col p-4 md:p-6">
        <h3 className="flex items-start gap-2 text-base leading-snug font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-brand md:text-lg">
          <span className="flex-grow">{service.title}</span>
          <ArrowRight className="mt-0.5 size-4 shrink-0 -translate-x-1 text-brand opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
        </h3>

        <p className="mt-2 line-clamp-2 flex-grow text-sm leading-relaxed text-ink-3 transition-colors duration-300 group-hover:text-ink-2 md:line-clamp-3">
          {service.shortDescription}
        </p>

        <p className="numeric mt-4 border-t border-hairline pt-3 text-[0.95rem] text-ink transition-colors duration-300 group-hover:border-brand/30">
          <span className="mr-1.5 text-[0.68rem] tracking-[0.1em] text-ink-3 uppercase">
            Från
          </span>
          {priceFormatter.format(service.price)} kr
        </p>
      </div>
    </Link>
  )
}
