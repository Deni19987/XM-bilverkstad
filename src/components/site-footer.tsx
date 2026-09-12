import { Link } from '@tanstack/react-router'
import { Mail, MapPin, Phone } from 'lucide-react'

import { FacebookIcon, InstagramIcon } from '@/components/social-icons'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { site } from '@/data/site'

const footerServices = [
  { label: 'Hjulbyte', slug: 'hjulbyte-handen' },
  { label: 'Bilkontroll', slug: 'bilkontroll-handen' },
  { label: 'Felsökning', slug: 'felsokning-handen' },
  { label: 'Bromsservice', slug: 'bromsservice-handen' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-canvas-2 py-14 text-ink-2">
      <div className="site-container grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="space-y-4">
          <h3 className="display text-lg text-white">{site.name}</h3>
          <p className="text-sm text-ink-2">{site.tagline}</p>
          <div className="flex gap-4">
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${site.name} på Facebook`}
              className="text-ink-2 transition-colors hover:text-brand"
            >
              <FacebookIcon className="size-5" />
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${site.name} på Instagram`}
              className="text-ink-2 transition-colors hover:text-brand"
            >
              <InstagramIcon className="size-5" />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="numeric text-[0.7rem] tracking-[0.14em] text-ink-3 uppercase">Tjänster</h4>
          <ul className="space-y-2 text-sm">
            {footerServices.map((service) => (
              <li key={service.slug}>
                <Link
                  to="/tjanster/$slug"
                  params={{ slug: service.slug }}
                  className="hover:text-white"
                >
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="numeric text-[0.7rem] tracking-[0.14em] text-ink-3 uppercase">Kontakt</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="size-4 shrink-0 text-brand" />
              <a
                href={site.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                {site.address.street},
                <br />
                {site.address.postalCode} {site.address.city}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="size-4 shrink-0 text-brand" />
              <a href={site.phoneHref} className="hover:text-white">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <WhatsAppIcon className="size-4 shrink-0" />
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                WhatsApp
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="size-4 shrink-0 text-brand" />
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="numeric text-[0.7rem] tracking-[0.14em] text-ink-3 uppercase">Öppettider</h4>
          <ul className="space-y-2 text-sm">
            {site.hours.map((entry) => (
              <li key={entry.day} className="numeric flex justify-between">
                <span>{entry.day}</span>
                <span>{entry.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="site-container numeric mt-12 border-t border-hairline pt-8 text-center text-[0.72rem] tracking-[0.06em] text-ink-3 uppercase">
        © {new Date().getFullYear()} {site.legalName}. Alla rättigheter reserverade.
      </div>
    </footer>
  )
}
