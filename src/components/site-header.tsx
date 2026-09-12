import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'

import { Logo } from '@/components/logo'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { navigation, site } from '@/data/site'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-canvas/92 backdrop-blur-md">
      <div className="site-container flex h-20 items-center gap-8">
        <Link to="/" className="flex items-center" aria-label={site.name}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative py-1 text-[0.87rem] text-ink-2 transition-colors duration-200 after:absolute after:inset-x-0 after:-bottom-px after:h-px after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 hover:text-ink hover:after:scale-x-100"
              activeProps={{ className: 'text-ink after:scale-x-100' }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-5 lg:flex">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-ink-2 transition-opacity hover:opacity-80"
          >
            <WhatsAppIcon className="size-5" />
          </a>
          <a
            href={site.phoneHref}
            className="numeric text-[0.85rem] whitespace-nowrap text-ink-2 transition-colors hover:text-ink"
          >
            {site.phone}
          </a>
          <Link
            to="/boka"
            className="rounded-sm bg-brand px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-brand-ink transition-colors hover:bg-brand-hover"
          >
            Boka tid
          </Link>
        </div>

        <div className="ml-auto flex items-center gap-3 lg:hidden">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="p-2 text-ink-2"
          >
            <WhatsAppIcon className="size-5" />
          </a>
          <button
            type="button"
            aria-label="Meny"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="p-2 text-ink-2"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          'border-t border-hairline bg-canvas lg:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <nav className="site-container flex flex-col py-2">
          {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="border-b border-hairline py-3.5 text-[0.95rem] text-ink-2 hover:text-ink"
              activeProps={{ className: 'text-ink' }}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 py-5">
            <Link
              to="/boka"
              onClick={() => setOpen(false)}
              className="rounded-sm bg-brand px-5 py-3 text-center text-sm font-semibold text-brand-ink"
            >
              Boka tid
            </Link>
            <a
              href={site.phoneHref}
              className="numeric rounded-sm border border-hairline-strong px-5 py-3 text-center text-sm text-ink"
            >
              {site.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
