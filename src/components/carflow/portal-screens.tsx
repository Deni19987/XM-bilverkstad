import {
  AlertCircle,
  Camera,
  Car,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Cog,
  Flag,
  ImageIcon,
  KeyRound,
  Search,
  Send,
  Wrench,
  XCircle,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import { demoChat, demoQuote, demoTimeline, demoVehicle } from '@/data/carflow'
import type { CarflowTone, CarflowUpdate } from '@/data/carflow'
import { formatPrice } from '@/lib/utils'
import { cn } from '@/lib/utils'

/*
 * Recreations of the three screens the customer uses in the CarFlow portal.
 * They are rendered as real markup rather than screenshots so they stay sharp
 * on every display, respond to the container width, and can be updated in one
 * place when the portal changes.
 */

const icons: Record<CarflowUpdate['icon'], LucideIcon> = {
  clipboard: ClipboardList,
  car: Car,
  search: Search,
  wrench: Wrench,
  alert: AlertCircle,
  check: CheckCircle2,
  cog: Cog,
  flag: Flag,
  key: KeyRound,
}

// Tone colours mirror the portal: blue for progress, amber for "needs you",
// emerald for done.
const toneDot: Record<CarflowTone, string> = {
  info: 'bg-blue-500',
  warning: 'bg-amber-500',
  success: 'bg-emerald-500',
}

const toneChip: Record<CarflowTone, string> = {
  info: 'bg-blue-50 text-blue-600',
  warning: 'bg-amber-50 text-amber-600',
  success: 'bg-emerald-50 text-emerald-600',
}

function PortalHeader({ subtitle }: { subtitle?: string }) {
  return (
    <div className="border-b border-zinc-200 bg-white px-4 py-3">
      <p className="text-sm font-semibold text-zinc-900">{demoVehicle.registration}</p>
      <p className="text-[11px] text-zinc-500">
        {subtitle ?? `${demoVehicle.make} ${demoVehicle.model} ${demoVehicle.year}`}
      </p>
    </div>
  )
}

function PortalTabs({ active }: { active: 'status' | 'chat' }) {
  return (
    <div className="grid grid-cols-2 gap-1 rounded-lg bg-zinc-100 p-1 text-xs font-medium">
      <span
        className={cn(
          'rounded-md py-1.5 text-center',
          active === 'status' ? 'bg-white text-zinc-900 shadow-sm' : 'text-zinc-500',
        )}
      >
        Uppdateringar
      </span>
      <span
        className={cn(
          'rounded-md py-1.5 text-center',
          active === 'chat' ? 'bg-white text-zinc-900 shadow-sm' : 'text-zinc-500',
        )}
      >
        Chatt ({demoChat.length})
      </span>
    </div>
  )
}

/** Screen 1 — the live timeline of everything that has happened to the car. */
export function TimelineScreen() {
  return (
    <div className="flex h-full flex-col bg-zinc-50">
      <PortalHeader />

      <div className="px-3 pt-3">
        <PortalTabs active="status" />
      </div>

      <div className="flex-1 overflow-hidden px-3 pt-3">
        {demoTimeline.map((update, index) => {
          const Icon = icons[update.icon]
          const isLast = index === demoTimeline.length - 1

          return (
            <div key={update.status} className="relative flex gap-3">
              <div className="relative flex flex-col items-center pt-3">
                <span className={cn('size-2 rounded-full', toneDot[update.tone])} />
                {!isLast ? <span className="mt-1 w-px flex-1 bg-zinc-200" /> : null}
              </div>

              <div className="min-w-0 flex-1 pb-1">
                <div className="flex items-start gap-2.5 py-1">
                  <span
                    className={cn(
                      'flex size-7 shrink-0 items-center justify-center rounded-full',
                      toneChip[update.tone],
                    )}
                  >
                    <Icon className="size-3.5" />
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <p className="truncate text-[13px] font-semibold text-zinc-900">
                        {update.label}
                      </p>
                      <span className="shrink-0 text-[10px] text-zinc-400">
                        {update.time}
                      </span>
                    </div>
                    <p className="mt-0.5 line-clamp-2 text-[11px] leading-snug text-zinc-500">
                      {update.description}
                    </p>

                    {update.badge === 'action' ? (
                      <span className="mt-1.5 inline-flex rounded-full border border-amber-500 px-2 py-0.5 text-[10px] font-medium text-amber-700">
                        Åtgärd krävs
                      </span>
                    ) : null}
                    {update.badge === 'approved' ? (
                      <span className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
                        <CheckCircle2 className="size-2.5" /> Godkänd
                      </span>
                    ) : null}
                  </div>

                  <ChevronRight className="mt-1 size-3.5 shrink-0 text-zinc-300" />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/** Screen 2 — a quote with photos that the customer approves or rejects. */
export function QuoteScreen() {
  const subtotal = demoQuote.lines.reduce((sum, line) => sum + line.price, 0)

  return (
    <div className="flex h-full flex-col bg-zinc-50">
      <PortalHeader subtitle="Offert · väntar på ditt svar" />

      <div className="flex-1 space-y-2 overflow-hidden p-3">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-3">
          <div className="flex items-center gap-2">
            <AlertCircle className="size-4 shrink-0 text-amber-600" />
            <p className="text-[13px] font-semibold text-amber-900">
              Vi inväntar ditt godkännande
            </p>
          </div>
          <p className="mt-1.5 text-[11px] leading-snug text-amber-800">
            {demoQuote.description}
          </p>
        </div>

        <div>
          <div className="mb-1.5 flex items-center gap-1.5 text-[10px] font-medium text-zinc-500">
            <ImageIcon className="size-3" />
            Bilder och videor ({demoQuote.media})
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {Array.from({ length: demoQuote.media }, (_, index) => (
              <div
                key={index}
                className="flex h-12 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-100"
              >
                <Camera className="size-3.5 text-zinc-400" />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-3">
          <table className="w-full text-[11px]">
            <tbody>
              {demoQuote.lines.map((line) => (
                <tr key={line.label} className="border-b border-zinc-100 last:border-0">
                  <td className="py-1 pr-2 text-zinc-700">{line.label}</td>
                  <td className="py-1 text-right tabular-nums text-zinc-900">
                    {formatPrice(line.price)} kr
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-2 space-y-1 border-t border-zinc-200 pt-2 text-[11px]">
            <div className="flex justify-between text-zinc-500">
              <span>Tidigare godkänt</span>
              <span className="tabular-nums">
                {formatPrice(demoQuote.priorApproved)} kr
              </span>
            </div>
            <div className="flex justify-between text-zinc-700">
              <span>Tilläggsoffert</span>
              <span className="tabular-nums font-medium">+ {formatPrice(subtotal)} kr</span>
            </div>
            <div className="flex justify-between border-t border-zinc-200 pt-1.5 text-[13px] font-semibold text-zinc-900">
              <span>Ny totalsumma</span>
              <span className="tabular-nums">
                {formatPrice(demoQuote.priorApproved + subtotal)} kr
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <span className="flex items-center justify-center gap-1.5 rounded-lg bg-zinc-900 py-2.5 text-[12px] font-medium text-white">
            <CheckCircle2 className="size-3.5" /> Godkänn
          </span>
          <span className="flex items-center justify-center gap-1.5 rounded-lg border border-zinc-300 py-2.5 text-[12px] font-medium text-zinc-700">
            <XCircle className="size-3.5" /> Avvisa
          </span>
        </div>
      </div>
    </div>
  )
}

/** Screen 3 — direct chat with the mechanic working on the car. */
export function ChatScreen() {
  return (
    <div className="flex h-full flex-col bg-zinc-50">
      <PortalHeader />

      <div className="px-3 pt-3">
        <PortalTabs active="chat" />
      </div>

      <div className="flex-1 space-y-2.5 overflow-hidden p-3">
        {demoChat.map((message) => (
          <div
            key={message.body}
            className={cn(
              'flex',
              message.from === 'customer' ? 'justify-end' : 'justify-start',
            )}
          >
            <div
              className={cn(
                'max-w-[80%] rounded-2xl px-3 py-2 text-[11px] leading-snug',
                message.from === 'customer'
                  ? 'rounded-br-sm bg-blue-600 text-white'
                  : 'rounded-bl-sm bg-white text-zinc-800 shadow-sm',
              )}
            >
              <p>{message.body}</p>
              <p
                className={cn(
                  'mt-1 text-[9px]',
                  message.from === 'customer' ? 'text-blue-100' : 'text-zinc-400',
                )}
              >
                {message.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 border-t border-zinc-200 bg-white p-2.5">
        <span className="flex-1 rounded-lg border border-zinc-200 px-3 py-2 text-[11px] text-zinc-400">
          Meddela verkstaden...
        </span>
        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-blue-600">
          <Send className="size-3.5 text-white" />
        </span>
      </div>
    </div>
  )
}
