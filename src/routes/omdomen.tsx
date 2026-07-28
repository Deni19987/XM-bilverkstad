import { createFileRoute } from '@tanstack/react-router'
import { Car, CheckCircle2, Star, Wrench } from 'lucide-react'

import { reviews } from '@/data/reviews'
import { site } from '@/data/site'

export const Route = createFileRoute('/omdomen')({
  head: () => ({
    meta: [
      { title: `Kundrecensioner – Bilverkstad Haninge | ${site.name}` },
      {
        name: 'description',
        content:
          'Läs vad bilägare i Handen och Haninge tycker om XM Bilverkstad. Verifierade omdömen från kunder som lämnat sin bil hos oss.',
      },
    ],
  }),
  component: ReviewsPage,
})

function ReviewsPage() {
  return (
    <div className="page-wrapper bg-black">
      <div className="site-container">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white">
            Kundrecensioner – Bilverkstad Haninge
          </h1>
          <p className="mx-auto max-w-2xl text-zinc-400">
            Läs vad bilägare i Handen och Haninge tycker om vår bilverkstad. Vi är stolta
            över vårt betyg på {site.rating.value} av 5 stjärnor.
          </p>

          <div className="mt-8 inline-flex flex-col items-center gap-2 rounded-2xl border border-white/5 bg-zinc-900/50 px-10 py-6">
            <div className="flex gap-1 text-yellow-400">
              {Array.from({ length: 5 }, (_, index) => (
                <Star key={index} className="size-5 fill-current" />
              ))}
            </div>
            <span className="text-3xl font-bold text-white">
              {site.rating.value} / 5.0
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <article
              key={`${review.name}-${review.date}-${index}`}
              className="group flex h-full flex-col rounded-2xl border border-white/5 bg-zinc-900/50 p-6 transition-all duration-300 hover:bg-zinc-900 md:p-8"
            >
              <div className="mb-6 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-blue-500/10 text-lg font-bold text-blue-500">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-base font-bold text-white">{review.name}</div>
                    <div className="mt-1 flex items-center gap-1 text-xs text-green-500">
                      <CheckCircle2 className="size-3" />
                      <span>Verifierad kund</span>
                    </div>
                  </div>
                </div>
              </div>

              <blockquote className="mb-6 flex-grow leading-relaxed text-zinc-300 italic">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              <div className="mt-auto flex flex-col gap-2 border-t border-white/5 pt-6 text-sm text-zinc-500">
                <div className="flex items-center gap-2">
                  <Car className="size-4 shrink-0" />
                  <span>{review.car}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wrench className="size-4 shrink-0" />
                  <span>{review.service}</span>
                </div>
                <div className="mt-1 flex items-center gap-2 text-xs opacity-70">
                  <span>{review.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
