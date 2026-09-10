import { Star } from 'lucide-react'

import { featuredReviews } from '@/data/reviews'
import { site } from '@/data/site'

function Stars() {
  return (
    <div className="flex gap-1" aria-hidden="true">
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} className="size-3.5 fill-brand text-brand" />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="section-padding border-t border-hairline bg-canvas-2">
      <div className="site-container">
        <div className="flex flex-wrap items-end justify-between gap-8 border-b border-hairline-strong pb-6">
          <div>
            <p className="eyebrow">Google</p>
            <h2 className="display mt-3.5 text-3xl leading-none text-white md:text-[2.6rem]">
              Vad kunderna säger
            </h2>
          </div>
          <p className="pb-1 text-[0.92rem] text-ink-3">
            {site.rating.display} av 5 baserat på {site.rating.count} omdömen.
          </p>
        </div>

        <ul className="grid gap-x-11 gap-y-8 pt-11 md:grid-cols-3">
          {featuredReviews.map((review) => (
            <li
              key={`${review.name}-${review.date}`}
              className="border-t-2 border-hairline-strong pt-5"
            >
              <Stars />
              <blockquote className="mt-4 leading-relaxed text-ink-2">
                {review.text}
              </blockquote>
              <footer className="numeric mt-5 text-[0.72rem] tracking-[0.06em] text-ink-3 uppercase">
                <span className="text-ink">{review.name}</span> · {review.car}
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
