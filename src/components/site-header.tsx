import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, Phone, X } from 'lucide-react'

import { Logo } from '@/components/logo'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { navigation, site } from '@/data/site'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/95 shadow-sm backdrop-blur-md">
      <div className="site-container flex h-20 items-center justify-between">
        <Link to="/" className="flex h-full items-center py-4" aria-label={site.name}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100"
              activeProps={{ className: 'text-zinc-100' }}
            >
              {item.label}
            </Link>
          ))}

          <div className="flex items-center gap-2 border-l border-zinc-700 pl-4">
            <span className="text-sm font-medium text-zinc-100">SV</span>
            <span className="text-zinc-600">|</span>
            <span className="text-sm font-medium text-zinc-500">EN</span>
          </div>

          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="p-2 transition-opacity hover:opacity-80"
          >
            <WhatsAppIcon className="size-[22px]" />
          </a>

          <a
            href={site.phoneHref}
            className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm text-white transition hover:bg-blue-700"
          >
            <Phone className="size-4" />
            <span>{site.phone}</span>
          </a>
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="p-2"
          >
            <WhatsAppIcon className="size-6" />
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="p-2 text-zinc-300"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          'border-t border-white/5 bg-black md:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <nav className="site-container flex flex-col py-4">
          {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="border-b border-white/5 py-3 text-base font-medium text-zinc-300 last:border-b-0 hover:text-white"
              activeProps={{ className: 'text-white' }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.phoneHref}
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-3 font-medium text-white"
          >
            <Phone className="size-4" />
            {site.phone}
          </a>
        </nav>
      </div>
    </header>
  )
}
