import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowRight, BellRing, FileCheck2, MessageSquare, Smartphone } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import { PhoneFrame } from '@/components/carflow/phone-frame'
import { ChatScreen, QuoteScreen, TimelineScreen } from '@/components/carflow/portal-screens'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type ScreenKey = 'timeline' | 'quote' | 'chat'

const screens: Array<{
  key: ScreenKey
  tab: string
  icon: LucideIcon
  title: string
  body: string
  label: string
}> = [
  {
    key: 'timeline',
    tab: 'Följ arbetet',
    icon: BellRing,
    title: 'Du ser exakt var din bil är i processen',
    body: 'Bil inlämnad, felsökning påbörjad, arbete pågår, jobb klart – varje steg loggas av mekanikern och dyker upp direkt hos dig, med tidpunkt. Du får en notis varje gång något händer. Ingen mer "jag ringer och hör hur det går".',
    label: 'Mobilskärm som visar tidslinjen över allt som hänt med bilen.',
  },
  {
    key: 'quote',
    tab: 'Godkänn kostnad',
    icon: FileCheck2,
    title: 'Ingenting utförs utan ditt godkännande',
    body: 'Hittar vi något extra får du en offert med bilder på det vi hittat, specificerade rader och en tydlig totalsumma. Du trycker Godkänn eller Avvisa i mobilen. Fakturan innehåller aldrig något du inte redan sagt ja till.',
    label: 'Mobilskärm med en offert med bilder, prisrader och knapparna Godkänn och Avvisa.',
  },
  {
    key: 'chat',
    tab: 'Chatta direkt',
    icon: MessageSquare,
    title: 'Skriv direkt till verkstaden – utan att ringa',
    body: 'Har du en fråga om bilen skriver du den i chatten och får svar från oss som jobbar med den. Allt som sagts finns sparat i ärendet – inga tappade telefonsamtal, inga missförstånd om vad som beställdes.',
    label: 'Mobilskärm med chattkonversation mellan kund och verkstad.',
  },
]

const screenComponents: Record<ScreenKey, () => React.JSX.Element> = {
  timeline: TimelineScreen,
  quote: QuoteScreen,
  chat: ChatScreen,
}

export function TrackingSection() {
  const [active, setActive] = useState<ScreenKey>('timeline')
  const current = screens.find((screen) => screen.key === active) ?? screens[0]!
  const Screen = screenComponents[current.key]

  return (
    <section className="section-padding border-t border-white/5 bg-zinc-950">
      <div className="site-container">
        <div className="mb-14 max-w-3xl">
          <Badge variant="muted" className="mb-6 max-w-full text-left whitespace-normal">
            <Smartphone className="size-4" />
            Digital verkstad – utan appar att ladda ner
          </Badge>

          <h2 className="mb-6 text-3xl leading-tight font-bold text-white md:text-5xl">
            Följ din bil i realtid – från inlämning till klar
          </h2>

          <p className="text-lg leading-relaxed font-light text-zinc-400 md:text-xl">
            När du lämnar in bilen hos oss får du ett SMS med en personlig länk. Där ser du
            allt som händer med bilen medan det händer, godkänner eventuella tillägg med ett
            tryck och chattar direkt med mekanikern. Du loggar in med ditt telefonnummer –
            inget konto, inget lösenord.
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <div
              role="tablist"
              aria-label="Vad du kan göra i kundportalen"
              className="mb-8 flex flex-wrap gap-2"
            >
              {screens.map((screen) => (
                <button
                  key={screen.key}
                  type="button"
                  role="tab"
                  aria-selected={active === screen.key}
                  onClick={() => setActive(screen.key)}
                  className={cn(
                    'flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                    active === screen.key
                      ? 'border-blue-500 bg-blue-600 text-white'
                      : 'border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200',
                  )}
                >
                  <screen.icon className="size-4" />
                  {screen.tab}
                </button>
              ))}
            </div>

            <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
              {current.title}
            </h3>
            <p className="mb-8 text-base leading-relaxed text-zinc-400 md:text-lg">
              {current.body}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/boka">Boka tid – och följ jobbet live</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/sa-fungerar-det">
                  Så fungerar det
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <PhoneFrame label={current.label}>
              <Screen />
            </PhoneFrame>
          </div>
        </div>
      </div>
    </section>
  )
}
