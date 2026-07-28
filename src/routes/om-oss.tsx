import { createFileRoute } from '@tanstack/react-router'

import { AboutSection } from '@/components/sections/about-section'
import { Testimonials } from '@/components/sections/testimonials'
import { site } from '@/data/site'

export const Route = createFileRoute('/om-oss')({
  head: () => ({
    meta: [
      { title: `Om ${site.name} – Bilmekaniker i Haninge & Handen` },
      {
        name: 'description',
        content:
          'Lär känna XM Bilverkstad i Handen – en oberoende bilverkstad med certifierade mekaniker, moderna diagnosverktyg och 2 års garanti på utfört arbete.',
      },
    ],
  }),
  component: AboutPage,
})

const reasons = [
  {
    title: 'Lokal bilverkstad:',
    body: 'Vi finns i hjärtat av Handen och servar kunder från Haninge, Tyresö, Jordbro och södra Stockholm.',
  },
  {
    title: 'Certifierad kompetens:',
    body: 'Vårt team består av erfarna bilmekaniker med specialistkunskaper inom alla bilmärken.',
  },
  {
    title: 'Fasta priser:',
    body: 'Vi ger alltid ett fast pris innan arbetet påbörjas – inga dolda avgifter.',
  },
]

function AboutPage() {
  return (
    <>
      <AboutSection showCta={false} />

      <section className="section-padding bg-black">
        <div className="site-container max-w-4xl">
          <h1 className="mb-8 text-3xl font-bold text-white md:text-4xl">
            Om {site.name} – Bilmekaniker i Haninge
          </h1>

          <div className="space-y-6 text-lg leading-relaxed text-zinc-400">
            <p>
              XM Bilverkstad grundades med visionen att erbjuda bilägare i Handen,
              Haninge och södra Stockholm ett prisvärt och pålitligt alternativ till
              märkesverkstäderna. Vi såg behovet av en oberoende bilverkstad som
              kombinerar modern diagnosteknik med personligt bemötande – utan att
              kompromissa med kvaliteten.
            </p>
            <p>
              Sedan starten har vi byggt ett starkt förtroende hos bilägare i Haninge
              kommun. Vi investerar kontinuerligt i utbildning och utrustning för att
              serva även de nyaste bilmodellerna, inklusive el- och hybridbilar. Alla
              arbeten utförs av certifierade mekaniker och vi erbjuder 2 års garanti.
            </p>
          </div>

          <h2 className="mt-12 mb-6 text-2xl font-bold text-white">
            Varför välja {site.name} i Haninge?
          </h2>

          <ul className="space-y-4">
            {reasons.map((reason) => (
              <li
                key={reason.title}
                className="rounded-2xl border border-white/5 bg-zinc-900/50 p-6"
              >
                <span className="font-bold text-white">{reason.title}</span>{' '}
                <span className="text-zinc-400">{reason.body}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Testimonials />
    </>
  )
}
