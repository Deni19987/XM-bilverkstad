import { ServiceCard } from '@/components/service-card'
import type { Service } from '@/data/services'
import { site } from '@/data/site'

export function ServicesSection({
  items,
  className = 'section-padding bg-black',
}: {
  items: Array<Service>
  className?: string
}) {
  return (
    <section className={className}>
      <div className="site-container">
        <div className="mb-16 text-center">
          <span className="mb-2 block text-sm font-bold tracking-wider text-blue-500 uppercase">
            Bilservice &amp; Reparationer i Haninge
          </span>
          <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
            Komplett bilverkstad i Handen
          </h2>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed font-light text-zinc-400">
            Från däckbyte och oljebyte till bromsbyte och felsökning – allt under ett tak
            på {site.address.street}.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-8 lg:grid-cols-3">
          {items.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <p className="mt-12 text-center text-zinc-400">
          Behöver du en annan typ av tjänst? Ring oss på{' '}
          <a href={site.phoneHref} className="font-semibold text-blue-500 hover:underline">
            {site.phone}
          </a>
          .
        </p>
      </div>
    </section>
  )
}
