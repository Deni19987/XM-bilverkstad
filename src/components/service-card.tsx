import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

import type { Service } from '@/data/services'

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      to="/tjanster/$slug"
      params={{ slug: service.slug }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/50 transition-all duration-300 hover:border-blue-500/30 hover:bg-zinc-900"
    >
      <div className="relative h-32 w-full overflow-hidden bg-zinc-800 md:h-48">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="absolute inset-0 size-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
      </div>

      <div className="flex flex-grow flex-col p-4 md:p-8">
        <h3 className="mb-2 flex items-center gap-2 text-base font-bold text-white md:mb-3 md:text-xl">
          {service.title}
          <ArrowRight className="size-4 shrink-0 text-blue-500 opacity-0 transition-opacity group-hover:opacity-100" />
        </h3>
        <p className="mb-4 flex-grow line-clamp-2 text-sm leading-relaxed text-zinc-400 group-hover:text-zinc-300 md:line-clamp-3">
          {service.shortDescription}
        </p>
        <span className="mt-auto text-xs font-bold text-blue-500 md:text-sm">
          Läs mer &amp; boka
        </span>
      </div>
    </Link>
  )
}
