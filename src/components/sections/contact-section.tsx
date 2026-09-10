import { Clock, MapPin, Phone } from 'lucide-react'

import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { Button } from '@/components/ui/button'
import { site } from '@/data/site'

const mapEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(
  'Anläggarvägen 20, 136 44 Handen, Sverige',
)}&z=15&output=embed`

export function ContactSection() {
  return (
    <section className="flex flex-col border-t border-hairline py-0 lg:min-h-[520px] lg:flex-row">
      <div className="flex w-full flex-col justify-center bg-canvas-2 p-8 text-white md:p-12 lg:w-1/2 lg:p-16">
        <p className="eyebrow">Hitta hit</p>
        <h2 className="display mt-3.5 mb-8 text-3xl leading-tight text-white">
          Besök vår bilverkstad i Handen
        </h2>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <MapPin className="mt-1 size-5 shrink-0 text-brand" />
            <div>
              <h3 className="text-lg font-semibold">Adress</h3>
              <a
                href={site.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-ink-2 transition-colors hover:text-white"
              >
                {site.address.street}
                <br />
                {site.address.postalCode} {site.address.city}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="mt-1 size-5 shrink-0 text-brand" />
            <div>
              <h3 className="text-lg font-semibold">Ring oss</h3>
              <a
                href={site.phoneHref}
                className="text-ink-2 transition-colors hover:text-white"
              >
                {site.phone}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <WhatsAppIcon className="mt-1 size-6 shrink-0" />
            <div>
              <h3 className="text-lg font-semibold">WhatsApp</h3>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-2 transition-colors hover:text-white"
              >
                {site.phone}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Clock className="mt-1 size-5 shrink-0 text-brand" />
            <div>
              <h3 className="text-lg font-semibold">Öppettider bilverkstad</h3>
              <p className="numeric text-ink-2">
                Mån-Fre: 08:00 - 17:00
                <br />
                Lör: Stängt
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Button asChild size="lg" variant="outline">
            <a href={site.maps} target="_blank" rel="noopener noreferrer">
              Hitta till bilverkstaden (Google Maps)
            </a>
          </Button>
        </div>
      </div>

      <div className="relative h-[350px] w-full border-t border-hairline bg-panel lg:h-auto lg:w-1/2 lg:border-t-0 lg:border-l">
        <iframe
          title="Karta till XM Bilverkstad, Anläggarvägen 20 i Handen"
          src={mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="absolute inset-0 size-full border-0"
        />
      </div>
    </section>
  )
}
