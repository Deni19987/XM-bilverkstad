import { Bell, ChevronRight, Flag, Info, Key, MessageSquare, Search, Settings, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Car, CheckCircle2, Check } from 'lucide-react'

/**
 * Carflow — statusuppdateringar.
 *
 * Sektionen ligger direkt under hero eftersom det är den tydligaste skillnaden
 * mot en vanlig verkstad, och samtidigt något ingen känner till innan det
 * förklarats. Punkterna följer kundens egen ordning: påminnelse, sms-länk vid
 * inlämning, godkännande av tilläggsarbete och besked när bilen är klar.
 * Telefonen visar en vy ur systemet, ritad i markup så den håller i alla
 * skärmbredder.
 */
const promises: Array<{ icon: LucideIcon; title: string; body: string }> = [
  {
    icon: Bell,
    title: 'Påminnelse om din bokade tid',
    body: 'Ett sms innan besöket, så att tiden inte hinner glömmas bort.',
  },
  {
    icon: MessageSquare,
    title: 'Sms-länk direkt vid inlämning',
    body: 'Du behöver inte ringa och fråga hur det går – statusen är alltid uppdaterad.',
  },
  {
    icon: Info,
    title: 'Godkänn tilläggsarbete med ett klick',
    body: 'Hittar vi något mer får du pris och förklaring i telefonen. Inget görs innan du sagt ja.',
  },
  {
    icon: Key,
    title: 'Besked när bilen är klar att hämta',
    body: 'Du vet exakt när det är dags – och vad som blev gjort under tiden.',
  },
]

type FeedItem = {
  icon: LucideIcon
  title: string
  body: string
  time: string
  done?: boolean
  approved?: boolean
  /** Steget som pågår just nu. Pricken pulserar för att visa det. */
  live?: boolean
}

const feed: Array<FeedItem> = [
  {
    icon: Car,
    title: 'Bil inlämnad',
    body: 'Din bil har tagits emot hos oss.',
    time: '8 sep. 2025 08:12',
  },
  {
    icon: Search,
    title: 'Felsökning påbörjad',
    body: 'Vi har påbörjat felsökning och diagnostisering av ditt fordon.',
    time: '8 sep. 2025 09:40',
  },
  {
    icon: Wrench,
    title: 'Arbete påbörjat',
    body: 'Inledande inspektion klar. Vi påbörjar nu det rekommenderade arbetet.',
    time: '8 sep. 2025 10:25',
  },
  {
    icon: CheckCircle2,
    title: 'Offert',
    body: 'Offerten är godkänd. Vi fortsätter med arbetet.',
    time: '8 sep. 2025 11:05',
    done: true,
    approved: true,
  },
  {
    icon: Settings,
    title: 'Pågående arbete',
    body: 'Arbete pågår just nu på ditt fordon.',
    time: '8 sep. 2025 13:15',
    live: true,
  },
  {
    icon: Flag,
    title: 'Jobb klart',
    body: 'Allt arbete är klart. Din bil är redo att hämtas.',
    time: '9 sep. 2025 10:40',
    done: true,
  },
]

function StatusPhone() {
  return (
    <div className="mx-auto w-full max-w-[330px] rounded-[38px] border border-hairline bg-[#080a0d] p-2.5 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)]">
      <div className="flex h-5 items-center justify-center">
        <span className="block h-1.5 w-[74px] rounded-full bg-[#20252c]" />
      </div>

      <div className="overflow-hidden rounded-[30px] bg-white text-[#101a1f]">
        <div className="px-4 pt-4 pb-3">
          <p className="text-[0.95rem] font-semibold tracking-tight">ABC 123</p>
          <p className="mt-0.5 text-[0.73rem] text-[#6e7f87]">Volvo V60</p>
        </div>

        <div className="mx-3 mb-2 grid grid-cols-2 gap-[3px] rounded-[9px] bg-[#f1f4f6] p-[3px]">
          <span className="rounded-[7px] bg-white py-1.5 text-center text-[0.75rem] font-semibold shadow-[0_1px_2px_rgba(16,24,32,0.14)]">
            Uppdateringar
          </span>
          <span className="py-1.5 text-center text-[0.75rem] font-medium text-[#6e7f87]">
            Chatt (2)
          </span>
        </div>

        <ol className="px-3 pt-0.5 pb-4">
          {feed.map((item, index) => (
            <li
              key={item.title}
              className="relative grid grid-cols-[9px_30px_1fr_10px] items-start gap-2.5 py-2.5 pl-0.5"
            >
              {index < feed.length - 1 ? (
                <span className="absolute top-6 bottom-[-8px] left-[5px] w-px bg-[#e4eaee]" />
              ) : null}

              <span className="relative mt-[7px] size-[7px]">
                {item.live ? (
                  <span className="absolute inset-0 animate-ping rounded-full bg-[#0e7f9b] opacity-70" />
                ) : null}
                <span
                  className={`absolute inset-0 rounded-full ${
                    item.done ? 'bg-[#11916f]' : 'bg-[#0e7f9b]'
                  }`}
                />
              </span>
              <span
                className={`grid size-[30px] place-items-center rounded-full ${
                  item.done ? 'bg-[#e0f3ed] text-[#11916f]' : 'bg-[#e2f1f6] text-[#0e7f9b]'
                }`}
              >
                <item.icon className="size-[15px]" strokeWidth={1.8} />
              </span>
              <span className="block">
                <span className="block text-[0.79rem] font-semibold tracking-tight">
                  {item.title}
                </span>
                <span className="mt-0.5 block text-[0.71rem] leading-snug text-[#6e7f87]">
                  {item.body}
                </span>
                <span className="mt-1 block text-[0.68rem] tabular-nums text-[#6e7f87]">
                  {item.time}
                </span>
                {item.approved ? (
                  <>
                    <span className="mt-1.5 inline-flex items-center gap-1 rounded-[5px] bg-[#e0f3ed] px-1.5 py-0.5 text-[0.66rem] font-semibold text-[#11916f]">
                      <Check className="size-2.5" strokeWidth={2.6} />
                      Godkänd
                    </span>
                    <span className="mt-1 block text-[0.7rem] font-semibold text-[#0e7f9b]">
                      Visa detaljer →
                    </span>
                  </>
                ) : null}
              </span>
              <ChevronRight className="mt-2 size-2.5 text-[#c3ced4]" strokeWidth={2} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export function CarflowSection() {
  return (
    <section className="border-y border-hairline bg-canvas-2 section-padding">
      <div className="site-container grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_330px] lg:gap-[70px]">
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
