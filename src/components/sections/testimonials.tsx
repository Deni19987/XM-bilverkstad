import { Star } from 'lucide-react'

import { featuredReviews } from '@/data/reviews'

function Stars() {
  return (
    <div className="mb-4 flex gap-1 text-yellow-400">
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} className="size-4 fill-current" />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="section-padding bg-zinc-950">
      <div className="site-container">
        <h2 className="mb-16 text-center text-3xl font-bold text-white md:text-4xl">
          Omdömen från våra kunder i Haninge
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {featuredReviews.map((review) => (
            <div
              key={`${review.name}-${review.date}`}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8"
            >
              <Stars />
              <p className="mb-6 text-zinc-300 italic">&ldquo;{review.text}&rdquo;</p>
              <div className="flex flex-col">
                <span className="font-bold">{review.name}</span>
                <span className="text-xs text-zinc-500">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-zinc-500">
            5.0 av 5 stjärnor baserat på kundrecensioner.
          </p>
        </div>
      </div>
    </section>
  )
}
