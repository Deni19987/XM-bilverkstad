import { Link, createFileRoute } from '@tanstack/react-router'
import {
  BellRing,
  FileCheck2,
  FileText,
  MessageSquare,
  Phone,
  ShieldCheck,
  Smartphone,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import { PhoneFrame } from '@/components/carflow/phone-frame'
import { ChatScreen, QuoteScreen, TimelineScreen } from '@/components/carflow/portal-screens'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { carflowSteps } from '@/data/carflow'
import { site } from '@/data/site'

const faq = [
  {
    q: 'Måste jag ladda ner en app?',
    a: 'Nej. Du får ett SMS med en länk som öppnas direkt i mobilens webbläsare. Du loggar in med samma telefonnummer som är registrerat på ärendet – inget konto och inget lösenord.',
  },
  {
    q: 'Vad kostar det?',
    a: 'Ingenting. Uppföljningen ingår i alla jobb vi utför, oavsett om du lämnar in bilen för ett däckbyte eller en större reparation.',
  },
  {
    q: 'Vad händer om ni hittar något extra?',
    a: 'Då får du en offert i mobilen med bilder på det vi hittat, specificerade rader och en tydlig totalsumma. Vi utför ingenting förrän du tryckt Godkänn. Avvisar du offerten gör vi bara det du redan beställt.',
  },
  {
    q: 'Kan jag se vad som gjordes i efterhand?',
    a: 'Ja. Hela ärendet sparas – alla statusuppdateringar, bilder, offerter och meddelanden. Det blir en dokumenterad servicehistorik på din bil som du kan visa vid försäljning eller besiktning.',
  },
  {
    q: 'Jag vill hellre ringa. Går det?',
    a: `Självklart. Du når oss alltid på ${site.phone} under öppettiderna. Uppföljningen i mobilen är ett tillägg för dig som hellre slipper ringa – inte en ersättning för att prata med oss.`,
  },
]

const benefits: Array<{ icon: LucideIcon; title: string; body: string }> = [
  {
    icon: BellRing,
    title: 'Notis vid varje steg',
    body: 'Du får en avisering när bilen tas emot, när felsökningen startar, när arbetet pågår och när bilen är klar att hämta.',
  },
  {
    icon: FileCheck2,
    title: 'Du godkänner kostnaden',
    body: 'Tilläggsarbete kräver alltid ditt godkännande i mobilen. Fakturan innehåller aldrig något du inte sagt ja till.',
  },
  {
    icon: MessageSquare,
    title: 'Chatt med verkstaden',
    body: 'Ställ frågor direkt i ärendet och få svar av oss som jobbar med bilen. Allt sparas – inga missförstånd.',
  },
  {
    icon: FileText,
    title: 'Dokumentation som stannar kvar',
    body: 'Bilder på slitage, offerter och utfört arbete samlas i ärendet och blir en servicehistorik på din bil.',
  },
]

export const Route = createFileRoute('/sa-fungerar-det')({
  head: () => ({
    meta: [
      { title: `Så fungerar det – följ din bil i realtid | ${site.name}` },
      {
        name: 'description',
        content:
          'Hos XM Bilverkstad följer du bilen i mobilen från inlämning till klar. Notis vid varje steg, offert med bilder som du godkänner, och chatt direkt med verkstaden.',
      },
      { property: 'og:title', content: `Följ din bil i realtid – ${site.name}` },
      {
        property: 'og:description',
        content:
          'Notis vid varje steg, offert med bilder som du godkänner i mobilen, och chatt direkt med mekanikern.',
      },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faq.map((entry) => ({
            '@type': 'Question',
            name: entry.q,
            acceptedAnswer: { '@type': 'Answer', text: entry.a },
          })),
        }),
      },
    ],
  }),
  component: HowItWorksPage,
})

function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-wrapper border-b border-white/5 bg-black pb-0">
        <div className="site-container">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <Badge
                variant="muted"
                className="mb-6 max-w-full text-left whitespace-normal"
              >
                <Smartphone className="size-4" />
                Ingår i alla jobb – utan extra kostnad
              </Badge>

              <h1 className="mb-6 text-4xl leading-[1.1] font-bold text-white md:text-6xl">
                Du slipper undra hur det går med bilen
              </h1>

              <p className="mb-8 text-lg leading-relaxed font-light text-zinc-400 md:text-xl">
                Hos XM Bilverkstad följer du hela jobbet i mobilen. Du får en notis vid varje
                steg, ser bilder på det vi hittar, godkänner eventuella tillägg med ett tryck
                och chattar direkt med mekanikern som har din bil.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link to="/boka">Boka tid online</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={site.phoneHref}>
                    <Phone className="size-4" />
                    {site.phone}
                  </a>
                </Button>
              </div>
            </div>

            <div className="pb-16">
              <PhoneFrame label="Mobilskärm som visar tidslinjen över allt som hänt med bilen.">
                <TimelineScreen />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-zinc-950">
        <div className="site-container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-white/5 bg-zinc-900/50 p-8"
              >
                <div className="mb-6 inline-flex rounded-xl bg-blue-500/10 p-4 text-blue-400">
                  <benefit.icon className="size-7" />
                </div>
                <h2 className="mb-3 text-xl font-bold text-white">{benefit.title}</h2>
                <p className="leading-relaxed text-zinc-400">{benefit.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding border-t border-white/5 bg-black">
        <div className="site-container">
          <div className="mb-16 max-w-2xl">
            <span className="mb-2 block text-sm font-bold tracking-wider text-blue-500 uppercase">
              Steg för steg
            </span>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Så går det till när du lämnar in bilen
            </h2>
          </div>

          <ol className="mx-auto max-w-3xl space-y-4">
            {carflowSteps.map((step, index) => (
              <li
                key={step.title}
                className="flex gap-5 rounded-2xl border border-white/5 bg-zinc-900/50 p-6 md:p-8"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-white">{step.title}</h3>
                  <p className="leading-relaxed text-zinc-400">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Quote approval */}
      <section className="section-padding border-t border-white/5 bg-zinc-950">
        <div className="site-container">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <PhoneFrame label="Mobilskärm med en offert med bilder, prisrader och knapparna Godkänn och Avvisa.">
                <QuoteScreen />
              </PhoneFrame>
            </div>

            <div>
              <div className="mb-6 inline-flex rounded-xl bg-blue-500/10 p-4 text-blue-400">
                <ShieldCheck className="size-7" />
              </div>
              <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                Inga överraskningar på fakturan
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-zinc-400">
                Det vanligaste bekymret med en verkstad är att notan blir högre än man trodde.
                Hos oss kan det inte hända. Hittar vi något utöver det du beställt får du en
                offert i mobilen – med bilder på slitaget, varje rad prissatt och en tydlig
                ny totalsumma.
              </p>
              <ul className="space-y-4">
                {[
                  'Bilder på det vi hittat, tagna av mekanikern på plats',
                  'Specificerade rader – delar och arbete var för sig',
                  'Tidigare godkänt belopp och ny totalsumma i klartext',
                  'Arbetet startar först när du tryckt Godkänn',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-zinc-300">
                    <FileCheck2 className="mt-0.5 size-5 shrink-0 text-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Chat */}
      <section className="section-padding border-t border-white/5 bg-black">
        <div className="site-container">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1">
              <div className="mb-6 inline-flex rounded-xl bg-blue-500/10 p-4 text-blue-400">
                <MessageSquare className="size-7" />
              </div>
              <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                All kommunikation på ett ställe
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-zinc-400">
                Frågor om bilen skriver du direkt i ärendet, när det passar dig – på kvällen,
                från jobbet, mellan möten. Du får svar från oss som faktiskt håller i bilen,
                och allt som sagts finns kvar i ärendet.
              </p>
              <p className="leading-relaxed text-zinc-400">
                Det betyder att ingen behöver komma ihåg vad som sades i telefon. Beställde du
                ett extra hjulbyte står det i chatten. Sa vi att bilen är klar klockan tre står
                det i chatten. För dig är det trygghet – för oss är det dokumentation.
              </p>
            </div>

            <div className="order-1 lg:order-2">
              <PhoneFrame label="Mobilskärm med chattkonversation mellan kund och verkstad.">
                <ChatScreen />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding border-t border-white/5 bg-zinc-950">
        <div className="site-container max-w-3xl">
          <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">Vanliga frågor</h2>
          <Accordion type="single" collapsible>
            {faq.map((entry) => (
              <AccordionItem key={entry.q} value={entry.q}>
                <AccordionTrigger>{entry.q}</AccordionTrigger>
                <AccordionContent>{entry.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-white/5 bg-black">
        <div className="site-container max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Testa det på nästa service
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-zinc-400">
            Boka en tid hos oss i {site.address.city} så får du länken till ditt ärende när du
            lämnar in bilen. Ingen extra kostnad, ingen app – bara koll på vad som händer.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/boka">Boka tid online</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/tjanster">Se våra tjänster</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
