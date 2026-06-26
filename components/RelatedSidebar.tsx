import Link from 'next/link'

export interface RelatedItem {
  href: string
  label: string
}

export function RelatedSidebar({
  heading,
  items,
  footerLink,
}: {
  heading: string
  items: RelatedItem[]
  footerLink?: { href: string; label: string }
}) {
  return (
    <div className="text-sm">
      <p className="eyebrow text-[#666666] dark:text-gray-500 mb-3">{heading}</p>
      <ul className="space-y-3">
        {items.map((it) => (
          <li key={it.href}>
            <Link
              href={it.href}
              className="text-[#444444] hover:text-[#2D6B1A] dark:text-gray-400 dark:hover:text-green-300"
            >
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
      {footerLink && (
        <Link
          href={footerLink.href}
          className="inline-block mt-4 eyebrow text-[#2D6B1A] dark:text-green-400 hover:underline"
        >
          {footerLink.label}
        </Link>
      )}
    </div>
  )
}
