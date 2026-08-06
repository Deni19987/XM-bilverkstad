import { useState } from 'react'
import { Link, createFileRoute } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  ArrowLeft,
  ArrowRight,
  BellRing,
  CalendarDays,
  Car,
  CheckCircle2,
  User,
  Wrench,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { bookingServices, slugToBookingService, timeSlots } from '@/data/booking'
import { site } from '@/data/site'
import { cn, formatPrice } from '@/lib/utils'

const searchSchema = z.object({
  service: z.string().optional(),
})

export const Route = createFileRoute('/boka')({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: `Boka Tid – Bilverkstad Handen, Haninge | ${site.name}` },
      {
        name: 'description',
        content:
          'Boka din bilservice, däckbyte eller reparation online hos XM Bilverkstad i Handen. Det tar bara några minuter.',
      },
    ],
  }),
  component: BookingPage,
})

const serviceValues = bookingServices.map((service) => service.value)

const bookingSchema = z.object({
  service: z
    .string()
    .refine((value) => serviceValues.includes(value as (typeof serviceValues)[number]), {
      message: 'Välj en tjänst för att gå vidare.',
    }),
  registration: z
    .string()
    .trim()
    .min(6, 'Ange ett giltigt registreringsnummer, till exempel ABC123.')
    .max(10, 'Registreringsnumret är för långt.'),
  carModel: z.string().trim().min(2, 'Ange bilmärke och modell.'),
  date: z.string().min(1, 'Välj ett datum.'),
  time: z.string().min(1, 'Välj en tid.'),
  name: z.string().trim().min(2, 'Ange ditt namn.'),
  phone: z.string().trim().min(6, 'Ange ett telefonnummer vi kan nå dig på.'),
  email: z.email('Ange en giltig e-postadress.'),
  message: z.string().trim().max(1000).optional(),
})

type BookingValues = z.infer<typeof bookingSchema>

const stepFields: Array<Array<keyof BookingValues>> = [
  ['service'],
  ['registration', 'carModel'],
  ['date', 'time'],
  ['name', 'phone', 'email', 'message'],
]

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return <p className="mt-2 text-sm text-red-400">{message}</p>
}

function BookingPage() {
  const search = Route.useSearch()
  const preselected = search.service ? slugToBookingService[search.service] : undefined

  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState<BookingValues | null>(null)

  const form = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    // Validate as the user edits: an error that only clears on blur disappears on
    // the "Nästa steg" mousedown, shifting the layout so the click never lands.
    mode: 'onChange',
    defaultValues: {
      service: preselected ?? '',
      registration: '',
      carModel: '',
      date: '',
      time: '',
      name: '',
      phone: '',
      email: '',
      message: '',
    },
  })

  const selectedService = form.watch('service')
  const selectedTime = form.watch('time')

  async function nextStep() {
    const fields = stepFields[step]
    if (!fields) return
    const valid = await form.trigger(fields)
    if (valid) setStep((current) => Math.min(current + 1, stepFields.length - 1))
  }

  function onSubmit(values: BookingValues) {
    setSubmitted(values)
  }

  if (submitted) {
    const service = bookingServices.find((entry) => entry.value === submitted.service)

    return (
      <div className="page-wrapper bg-black">
        <div className="site-container max-w-2xl">
          <div className="rounded-3xl border border-blue-500/20 bg-zinc-900 p-8 text-center md:p-12">
            <CheckCircle2 className="mx-auto mb-6 size-16 text-blue-500" />
            <h1 className="mb-4 text-3xl font-bold text-white">Tack för din bokning!</h1>
            <p className="mb-8 text-zinc-400">
              Vi har tagit emot din förfrågan om <strong>{service?.label}</strong> den{' '}
              {submitted.date} kl. {submitted.time}. Vi hör av oss på {submitted.phone}{' '}
              för att bekräfta tiden. Vid akuta ärenden, ring oss på {site.phone}.
            </p>

            <div className="mb-8 rounded-2xl border border-white/5 bg-zinc-950/60 p-6 text-left">
              <div className="mb-3 flex items-center gap-3">
                <BellRing className="size-5 shrink-0 text-blue-500" />
                <h2 className="font-bold text-white">Sedan följer du jobbet i mobilen</h2>
              </div>
              <p className="text-sm leading-relaxed text-zinc-400">
                När du lämnar in bilen skickar vi ett SMS till {submitted.phone} med en
                personlig länk till ditt ärende. Där ser du varje steg i realtid, godkänner
                eventuellt tilläggsarbete med bilder och pris, och chattar direkt med
                mekanikern.{' '}
                <Link to="/sa-fungerar-det" className="text-blue-500 hover:underline">
                  Så fungerar det
                </Link>
                .
              </p>
            </div>

            <Button
              size="lg"
              onClick={() => {
                setSubmitted(null)
                setStep(0)
                form.reset()
              }}
            >
              Gör en ny bokning
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="page-wrapper bg-black text-zinc-100">
      <div className="site-container">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">Boka Tid – Bilverkstad Handen</h1>
          <p className="mx-auto max-w-2xl text-zinc-400">
            Boka din bilservice, däckbyte eller reparation online. Det tar bara några
            minuter. Vid akuta problem, ring oss direkt på{' '}
            <a href={site.phoneHref} className="text-blue-500 hover:underline">
              {site.phone}
            </a>
            .
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-xl">
            <div className="border-b border-zinc-700 bg-zinc-800 p-6">
              <div className="relative mx-auto flex max-w-2xl items-center justify-between">
                <div className="absolute top-1/2 left-0 -z-10 h-1 w-full bg-zinc-700" />
                {[1, 2, 3, 4].map((number, index) => (
                  <div
                    key={number}
                    className={cn(
                      'flex size-10 items-center justify-center rounded-full border-4 border-zinc-900 text-sm font-bold transition-colors',
                      index <= step
                        ? 'bg-blue-600 text-white'
                        : 'bg-zinc-600 text-zinc-400',
                    )}
                  >
                    {number}
                  </div>
                ))}
              </div>
            </div>

            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="min-h-[400px] p-8 md:p-12"
            >
              {step === 0 ? (
                <div className="mx-auto max-w-2xl space-y-6">
                  <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
                    <span className="rounded-lg bg-blue-900 p-2 text-blue-300">
                      <Wrench className="size-5" />
                    </span>
                    Välj Tjänst
                  </h2>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {bookingServices.map((service) => (
                      <label
                        key={service.value}
                        className={cn(
                          'flex cursor-pointer items-start gap-3 rounded-xl border-2 p-4 transition-all',
                          selectedService === service.value
                            ? 'border-blue-600 bg-blue-950/30'
                            : 'border-zinc-700 hover:border-zinc-500',
                        )}
                      >
                        <input
                          type="radio"
                          value={service.value}
                          className="mt-0.5 size-5 shrink-0 accent-blue-600"
                          {...form.register('service')}
                        />
                        <div className="min-w-0">
                          <span className="block font-medium">{service.label}</span>
                          <span className="mt-0.5 block text-sm text-zinc-400">
                            Från {formatPrice(service.from)} kr
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>
                  <FieldError message={form.formState.errors.service?.message} />
                </div>
              ) : null}

              {step === 1 ? (
                <div className="mx-auto max-w-2xl space-y-6">
                  <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
                    <span className="rounded-lg bg-blue-900 p-2 text-blue-300">
                      <Car className="size-5" />
                    </span>
                    Din Bil
                  </h2>

                  <div className="space-y-2">
                    <Label htmlFor="registration">Registreringsnummer</Label>
                    <Input
                      id="registration"
                      placeholder="ABC123"
                      autoComplete="off"
                      aria-invalid={Boolean(form.formState.errors.registration)}
                      {...form.register('registration')}
                    />
                    <FieldError message={form.formState.errors.registration?.message} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="carModel">Bilmärke och modell</Label>
                    <Input
                      id="carModel"
                      placeholder="Volvo V60 (2018)"
                      aria-invalid={Boolean(form.formState.errors.carModel)}
                      {...form.register('carModel')}
                    />
                    <FieldError message={form.formState.errors.carModel?.message} />
                  </div>
                </div>
              ) : null}

              {step === 2 ? (
                <div className="mx-auto max-w-2xl space-y-6">
                  <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
                    <span className="rounded-lg bg-blue-900 p-2 text-blue-300">
                      <CalendarDays className="size-5" />
                    </span>
                    Välj Datum &amp; Tid
                  </h2>

                  <div className="space-y-2">
                    <Label htmlFor="date">Önskat datum</Label>
                    <Input
                      id="date"
                      type="date"
                      min={new Date().toISOString().slice(0, 10)}
                      aria-invalid={Boolean(form.formState.errors.date)}
                      {...form.register('date')}
                    />
                    <FieldError message={form.formState.errors.date?.message} />
                  </div>

                  <fieldset className="space-y-3">
                    <legend className="mb-3 text-sm font-medium text-zinc-200">
                      Önskad tid
                    </legend>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {timeSlots.map((slot) => (
                        <label
                          key={slot}
                          className={cn(
                            'cursor-pointer rounded-xl border-2 py-3 text-center font-medium transition-all',
                            selectedTime === slot
                              ? 'border-blue-600 bg-blue-950/30 text-white'
                              : 'border-zinc-700 text-zinc-300 hover:border-zinc-500',
                          )}
                        >
                          <input
                            type="radio"
                            value={slot}
                            className="sr-only"
                            {...form.register('time')}
                          />
                          {slot}
                        </label>
                      ))}
                    </div>
                    <FieldError message={form.formState.errors.time?.message} />
                  </fieldset>

                  <p className="text-sm text-zinc-500">
                    Öppettider: mån-fre 08:00 - 17:00. Vi bekräftar din tid via telefon.
                  </p>
                </div>
              ) : null}

              {step === 3 ? (
                <div className="mx-auto max-w-2xl space-y-6">
                  <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
                    <span className="rounded-lg bg-blue-900 p-2 text-blue-300">
                      <User className="size-5" />
                    </span>
                    Dina Uppgifter
                  </h2>

                  <div className="space-y-2">
                    <Label htmlFor="name">Namn</Label>
                    <Input
                      id="name"
                      autoComplete="name"
                      aria-invalid={Boolean(form.formState.errors.name)}
                      {...form.register('name')}
                    />
                    <FieldError message={form.formState.errors.name?.message} />
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon</Label>
                      <Input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        aria-invalid={Boolean(form.formState.errors.phone)}
                        {...form.register('phone')}
                      />
                      <FieldError message={form.formState.errors.phone?.message} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">E-post</Label>
                      <Input
                        id="email"
                        type="email"
                        autoComplete="email"
                        aria-invalid={Boolean(form.formState.errors.email)}
                        {...form.register('email')}
                      />
                      <FieldError message={form.formState.errors.email?.message} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Meddelande (valfritt)</Label>
                    <Textarea
                      id="message"
                      placeholder="Beskriv gärna problemet eller om något extra ska kontrolleras."
                      {...form.register('message')}
                    />
                  </div>
                </div>
              ) : null}

              <div className="mx-auto mt-10 flex max-w-2xl items-center justify-between gap-4">
                {step > 0 ? (
                  <Button
                    type="button"
                    variant="secondary"
                    size="lg"
                    onClick={() => setStep((current) => Math.max(current - 1, 0))}
                  >
                    <ArrowLeft className="size-4" />
                    Tillbaka
                  </Button>
                ) : (
                  <span />
                )}

                {step < stepFields.length - 1 ? (
                  <Button type="button" size="lg" onClick={nextStep}>
                    Nästa steg
                    <ArrowRight className="size-4" />
                  </Button>
                ) : (
                  <Button type="submit" size="lg" disabled={form.formState.isSubmitting}>
                    Skicka bokning
                    <ArrowRight className="size-4" />
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
