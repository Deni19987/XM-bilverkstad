import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

import type { Service } from '@/data/services'
import { site } from '@/data/site'

const priceFormatter = new Intl.NumberFormat('sv-SE')

/**
 * Tjänsterna som en prislista med hårfina rader i stället för bildkort.
 * Priset är den vanligaste anledningen till att någon ringer i stället för att
 * boka, så det står till höger på varje rad med siffror i kolumn.
 */
export function ServicesSection({
  items,
  className = 'section-padding bg-canvas',
  heading = 'Vad det kostar hos oss',
}: {
  items: Array<Service>
  className?: string
  heading?: string
}) {
  return (
    <section className={className}>
      <div className="site-container">
        <div className="flex flex-wrap items-end justify-between gap-8 border-b border-hairline-strong pb-6">
          <div>
            <p className="eyebrow">Tjänster &amp; riktpriser</p>
            <h2 className="display mt-3.5 text-3xl leading-none text-white md:text-[2.6rem]">
              {heading}
            </h2>
          </div>
          <p className="max-w-[34ch] pb-1 text-[0.92rem] text-ink-3">
            Priserna gäller de vanligaste bilarna. Du får alltid ett fast pris innan
            arbetet börjar.
          </p>
        </div>

        <ol>
          {items.map((service, index) => (
            <li key={service.slug} className="border-b border-hairline">
              <Link
                to="/tjanster/$slug"
                params={{ slug: service.slug }}
                className="group grid grid-cols-[36px_1fr] items-center gap-x-5 gap-y-2 px-1 py-5 transition-colors hover:bg-panel sm:grid-cols-[52px_1fr_168px]"
              >
                <span className="numeric text-[0.76rem] text-ink-3">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="block">
                  <span className="flex items-center gap-2 text-[1.12rem] font-semibold tracking-tight text-white transition-colors group-hover:text-brand">
                    {service.title}
                    <ArrowRight className="size-4 shrink-0 text-brand opacity-0 transition-opacity group-hover:opacity-100" />
                  </span>
                  <span className="mt-1 block text-[0.87rem] text-ink-3">
                    {service.shortDescription}
                  </span>
                </span>
                <span className="numeric col-start-2 text-[1.02rem] whitespace-nowrap text-ink sm:col-start-3 sm:text-right">
                  <span className="block text-[0.68rem] tracking-[0.1em] text-ink-3 uppercase">
                    Från
                  </span>
                  {priceFormatter.format(service.price)} kr
                </span>
              </Link>
            </li>
          ))}
        </ol>

        <p className="mt-7 text-[0.88rem] text-ink-3">
          Behöver du något annat? Ring{' '}
          <a href={site.phoneHref} className="text-brand hover:underline">
            {site.phone}
          </a>{' '}
          så säger vi vad det kostar.
        </p>
      </div>
    </section>
  )
}
