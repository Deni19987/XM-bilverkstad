import { createFileRoute } from '@tanstack/react-router'

import { ContactSection } from '@/components/sections/contact-section'
import { site } from '@/data/site'

export const Route = createFileRoute('/kontakt')({
  head: () => ({
    meta: [
      { title: `Kontakta ${site.name} i Handen – Bilverkstad Haninge` },
      {
        name: 'description',
        content: `Har du frågor om bilservice, däckbyte eller reparationer? Ring ${site.phone}, maila ${site.email} eller besök oss på ${site.address.street} i ${site.address.city}.`,
      },
    ],
  }),
  component: ContactPage,
})

function ContactPage() {
  return (
    <>
      <div className="page-wrapper bg-canvas pb-0">
        <div className="site-container text-center">
          <h1 className="display mb-4 text-[2.1rem] leading-tight text-white md:text-4xl">
            Kontakta {site.name} i {site.address.city}
          </h1>
          <p className="mx-auto mb-16 max-w-2xl text-ink-2">
            Har du frågor om bilservice, däckbyte eller reparationer? Ring oss på{' '}
            <a href={site.phoneHref} className="text-brand hover:underline">
              {site.phone}
            </a>
            , maila{' '}
            <a href={`mailto:${site.email}`} className="text-brand hover:underline">
              {site.email}
            </a>{' '}
            eller besök oss på {site.address.street} i {site.address.city}.
          </p>
        </div>
      </div>
      <ContactSection />
    </>
  )
}
