import { ServiceCard } from '@/components/service-card'
import type { Service } from '@/data/services'
import { site } from '@/data/site'

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

        <div className="grid grid-cols-2 gap-4 pt-11 md:gap-6 lg:grid-cols-3">
          {items.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <p className="mt-10 text-[0.88rem] text-ink-3">
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
