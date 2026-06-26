'use client'
import { useEffect, useState } from 'react'

export interface SidebarLink {
  id: string
  label: string
}

export function ArticleSidebar({
  links,
  heading = 'On This Page',
}: {
  links: SidebarLink[]
  heading?: string
}) {
  const [active, setActive] = useState<string>(links[0]?.id ?? '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-90px 0px -70% 0px', threshold: 0 }
    )
    links.forEach((l) => {
      const el = document.getElementById(l.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [links])

  return (
    <nav className="text-sm">
      <p className="eyebrow text-[#666666] dark:text-gray-500 mb-3">{heading}</p>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.id}>
            <a
              href={`#${l.id}`}
              className={
                active === l.id
                  ? 'block text-[#2D6B1A] border-l-2 border-[#2D6B1A] pl-2 dark:text-green-400 dark:border-green-400'
                  : 'block text-[#666666] dark:text-gray-500 pl-2 border-l-2 border-transparent hover:text-[#2D6B1A] dark:hover:text-green-300'
              }
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
