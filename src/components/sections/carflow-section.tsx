import {
  BellRing,
  Car,
  CircleCheck,
  Cog,
  FileText,
  KeyRound,
  MessageSquareText,
  Search,
  ThumbsUp,
  Wrench,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import { LogoMark } from '@/components/logo'

/**
 * Carflow — statusuppdateringar.
 *
 * Sektionen ligger efter prislistan: när besökaren väl vet vad ett jobb
 * kostar är nästa fråga hur man följer det. Punkterna följer kundens egen
 * ordning, och telefonen visar kundvyn som den faktiskt ser ut.
 */
const promises: Array<{ icon: LucideIcon; title: string; body: string }> = [
  {
    icon: BellRing,
    title: 'Påminnelse om din bokade tid',
    body: 'Ett sms innan besöket, så att tiden inte hinner glömmas bort.',
  },
  {
    icon: MessageSquareText,
    title: 'Sms-länk direkt vid inlämning',
    body: 'Du behöver inte ringa och fråga hur det går – statusen är alltid uppdaterad.',
  },
  {
    icon: ThumbsUp,
    title: 'Godkänn tilläggsarbete med ett klick',
    body: 'Hittar vi något mer får du pris och förklaring i telefonen. Inget görs innan du sagt ja.',
  },
  {
    icon: KeyRound,
    title: 'Besked när bilen är klar att hämta',
    body: 'Du vet exakt när det är dags – och vad som blev gjort under tiden.',
  },
]

/**
 * Kundvyn är en ljus app inuti en mörk sektion, så färgerna i telefonen är
 * satta som råa värden i stället för sajtens tokens. Turkosen är den mörkare
 * varianten som håller kontrasten mot vitt; gult är en semantisk varning och
 * ska förbli gult oavsett vilken accentfärg sajten har.
 */
type Tone = 'done' | 'attention' | 'upcoming'

const tones: Record<Tone, { icon: string; title: string; body: string }> = {
  done: {
    icon: 'bg-[#e3f2f6] text-[#0e7f9b] ring-[#c5e6ef]',
    title: 'text-[#14181b]',
    body: 'text-[#6b7278]',
  },
  attention: {
    icon: 'bg-[#fef6e7] text-[#b7791f] ring-[#f6dfae]',
    title: 'text-[#14181b]',
    body: 'text-[#6b7278]',
  },
  upcoming: {
    icon: 'bg-[#f6f7f8] text-[#b9bec3] ring-[#e9ebed]',
    title: 'text-[#8b9197]',
    body: 'text-[#8b9197]',
  },
}

type FeedItem = {
  icon: LucideIcon
  tone: Tone
  title: string
  body: string
  meta: string
  badge?: string
}

const feed: Array<FeedItem> = [
  {
    icon: Car,
    tone: 'done',
    title: 'Bil inlämnad',
    body: 'Din bil har tagits emot hos oss.',
    meta: 'Idag 17:51',
  },
  {
    icon: Search,
    tone: 'done',
    title: 'Felsökning påbörjad',
    body: 'Vi har påbörjat felsökning och diagnostisering av ditt fordon.',
    meta: 'Idag 19:19',
  },
  {
    icon: Wrench,
    tone: 'done',
    title: 'Arbete påbörjat',
    body: 'Inledande inspektion klar. Vi påbörjar nu det rekommenderade arbetet.',
    meta: 'Idag 20:04',
  },
  {
    icon: FileText,
    tone: 'attention',
    title: 'Offert',
    badge: 'Åtgärd krävs',
    body: 'Vi hittade något mer som behöver åtgärdas. Se pris och förklaring nedan.',
    meta: 'Idag 20:44',
  },
  {
    icon: Cog,
    tone: 'upcoming',
    title: 'Pågående arbete',
    body: 'Startar så fort du svarat på offerten.',
    meta: 'Kommande steg',
  },
  {
    icon: CircleCheck,
    tone: 'upcoming',
    title: 'Klar att hämta',
    body: 'Du får ett sms direkt när bilen är redo att hämtas.',
    meta: 'Kommande steg',
  },
]

function StatusPhone() {
  return (
    <figure className="m-0 justify-self-center">
      <div className="relative w-[288px] rounded-[2.75rem] bg-[#0a0c0e] p-2.5 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)] ring-1 ring-white/10">
        <div className="relative overflow-hidden rounded-[2.25rem] bg-white">
          <span className="absolute top-0 left-1/2 z-10 h-5 w-24 -translate-x-1/2 rounded-b-[16px] bg-[#0a0c0e]" />

          <div className="h-[532px] overflow-hidden">
            <div className="flex h-full flex-col bg-[#f6f7f8]">
              <div className="bg-white px-4 pt-7 pb-3">
                <p className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-[#8b9197] uppercase">
                  <LogoMark className="h-4 w-4 text-[#0e7f9b]" />
                  XM Bilverkstad
                </p>
                <p className="font-display mt-2 text-lg font-extrabold tracking-tight text-[#14181b] uppercase">
                  ABC 123
                </p>
                <p className="text-[11px] text-[#6b7278]">Volvo V60</p>
              </div>

              <div className="flex gap-1 border-b border-[#e9ebed] bg-white px-3 pb-2">
                <span className="rounded-full bg-[#14181b] px-3 py-1 text-[11px] font-semibold text-white">
                  Uppdateringar
                </span>
                <span className="rounded-full px-3 py-1 text-[11px] font-semibold text-[#8b9197]">
                  Chatt (2)
                </span>
              </div>

              <div className="relative flex-1 overflow-hidden px-4 pt-4">
                <ol>
                  {feed.map((item, index) => {
                    const tone = tones[item.tone]
                    const isLast = index === feed.length - 1

                    return (
                      <li key={item.title} className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <span
                            className={`flex size-8 shrink-0 items-center justify-center rounded-full ring-1 ${tone.icon}`}
                          >
                            <item.icon className="size-[15px]" strokeWidth={2.2} />
                          </span>
                          {isLast ? null : item.tone === 'upcoming' ? (
                            <span className="my-1 w-px flex-1 border-l border-dashed border-[#d9dde0]" />
                          ) : (
                            <span className="my-1 w-px flex-1 bg-[#d9dde0]" />
                          )}
                        </div>

                        <div className={`min-w-0 flex-1 ${isLast ? 'pb-0' : 'pb-4'}`}>
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                            <h3
                              className={`font-display text-[13px] font-bold ${tone.title}`}
                            >
                              {item.title}
                            </h3>
                            {item.badge ? (
                              <span className="rounded-full bg-[#fdecc8] px-2 py-0.5 text-[10px] font-semibold text-[#92600f]">
                                {item.badge}
                              </span>
                            ) : null}
                          </div>
                          <p className={`mt-0.5 text-[11px] leading-snug ${tone.body}`}>
                            {item.body}
                          </p>
                          <p className="mt-1 text-[10px] font-medium text-[#8b9197]">
                            {item.meta}
                          </p>
                        </div>
                      </li>
                    )
                  })}
                </ol>

                {/* Listan tonar ut mot underkanten så att det syns att den fortsätter. */}
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#f6f7f8] to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <figcaption className="mt-4 text-center text-xs text-ink-3">
        Så här ser sms-länken ut när du öppnar den
      </figcaption>
    </figure>
  )
}

export function CarflowSection() {
  return (
    <section className="section-padding border-y border-hairline bg-canvas-2">
      <div className="site-container grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_288px] lg:gap-[70px]">
        <div>
          <p className="eyebrow">Nyhet – Carflow</p>
          <h2 className="display mt-5 max-w-[14ch] text-4xl leading-[1.02] text-white md:text-5xl">
            Följ bilen i mobilen
          </h2>
          <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-ink-2">
            Vi påminner dig om din bokade tid, och när du lämnat in bilen får du ett sms
            med en länk till din egen sida. Där följer du varje steg vi gör och får en
            notis när något händer. Ingen app att ladda ner.
          </p>

          <ul className="mt-9 grid gap-6">
            {promises.map((item) => (
              <li key={item.title} className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-sm border border-brand/25 bg-brand/10 text-brand">
                  <item.icon className="size-5" strokeWidth={1.7} />
                </span>
                <div>
                  <h3 className="font-semibold tracking-tight text-white">{item.title}</h3>
                  <p className="mt-1 max-w-[44ch] text-[0.94rem] leading-relaxed text-ink-2">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <StatusPhone />
      </div>
    </section>
  )
}
