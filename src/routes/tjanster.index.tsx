import { createFileRoute } from '@tanstack/react-router'

import { ServicesSection } from '@/components/sections/services-section'
import { services } from '@/data/services'
import { site } from '@/data/site'

export const Route = createFileRoute('/tjanster/')({
  head: () => ({
    meta: [
      {
        title: `Tjänster – Bilservice, Däckbyte, Bromsbyte & Mer | ${site.name}`,
      },
      {
        name: 'description',
        content:
          'Alla tjänster hos XM Bilverkstad i Handen: hjulbyte, däckbyte, bilkontroll, felsökning, bromsservice, oljebyte, bilrekond och motoroptimering.',
      },
    ],
  }),
  component: ServicesPage,
})

function ServicesPage() {
  return (
    <ServicesSection
      items={services}
      className="page-wrapper bg-canvas"
      heading="Alla tjänster och riktpriser"
    />
  )
}
