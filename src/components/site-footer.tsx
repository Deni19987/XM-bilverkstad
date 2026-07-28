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
    <footer className="border-t border-white/5 bg-black py-12 text-zinc-300">
      <div className="site-container grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">{site.name}</h3>
          <p className="text-sm text-zinc-400">{site.tagline}</p>
          <div className="flex gap-4">
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${site.name} på Facebook`}
              className="hover:text-blue-400"
            >
              <FacebookIcon className="size-5" />
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${site.name} på Instagram`}
              className="hover:text-blue-400"
            >
              <InstagramIcon className="size-5" />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-white">Tjänster</h4>
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
          <h4 className="font-semibold text-white">Kontakt</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="size-4 shrink-0 text-blue-500" />
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
              <Phone className="size-4 shrink-0 text-blue-500" />
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
              <Mail className="size-4 shrink-0 text-blue-500" />
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-white">Öppettider</h4>
          <ul className="space-y-2 text-sm">
            {site.hours.map((entry) => (
              <li key={entry.day} className="flex justify-between">
                <span>{entry.day}</span>
                <span>{entry.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="site-container mt-12 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} {site.legalName}. Alla rättigheter reserverade.
      </div>
    </footer>
  )
}
