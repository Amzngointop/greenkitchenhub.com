'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { ReactNode } from 'react'

export function AccordionSection({
  title,
  children,
  defaultOpen = false,
}: {
  title: string
  children: ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border border-[#e5e5e5] dark:border-gray-800 rounded-lg mb-2 overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-3 text-left text-sm font-medium text-[#111111] dark:text-gray-100 hover:bg-[#EAF4E5] dark:hover:bg-gray-800"
        aria-expanded={open}
      >
        {title}
        <ChevronDown
          size={16}
          className={`transition-transform shrink-0 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-4 pb-4 pt-1 text-sm text-[#444444] dark:text-gray-400">
          {children}
        </div>
      )}
    </div>
  )
}
