import type { FAQItem } from '@/data/articles'
import { AccordionSection } from './AccordionSection'

export function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <div className="my-8">
      <h2 className="font-serif text-2xl mb-5 text-[#111111] dark:text-gray-100">
        Frequently Asked Questions
      </h2>
      {items.map((item, i) => (
        <AccordionSection key={i} title={item.q}>
          <p>{item.a}</p>
        </AccordionSection>
      ))}
    </div>
  )
}
