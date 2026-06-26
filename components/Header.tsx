'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import { articles } from '@/data/articles'

const navLinks = [
  { label: 'THE GUIDES', href: '/field-notes' },
  { label: 'ECO GLOSSARY', href: '/eco-glossary' },
  { label: 'OUR METHOD', href: '/our-method' },
  { label: 'REACH US', href: '/reach-us' },
]

export function Header() {
  const [swapOpen, setSwapOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const swapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (swapRef.current && !swapRef.current.contains(e.target as Node)) {
        setSwapOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-dashed border-[#d4d4d4] dark:bg-gray-950 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 gap-4">
          <div className="flex items-center gap-5">
            <ThemeToggle />
            <Link href="/" className="leading-none" aria-label="GreenKitchenHub home">
              <span className="block font-serif text-xl text-[#2D6B1A] dark:text-green-400">
                GreenKitchen
              </span>
              <span className="block text-xs font-bold tracking-wide text-[#2D6B1A] dark:text-green-400">
                Hub
              </span>
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 ml-auto eyebrow text-[#666666] dark:text-gray-400">
            <div className="relative" ref={swapRef}>
              <button
                onClick={() => setSwapOpen((o) => !o)}
                className="flex items-center gap-1 hover:text-[#2D6B1A] dark:hover:text-green-300"
                aria-expanded={swapOpen}
              >
                THE SWAP
                <ChevronDown
                  size={14}
                  className={`transition-transform ${swapOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {swapOpen && (
                <div className="absolute left-0 mt-2 w-72 bg-white border border-[#e5e5e5] rounded-lg shadow-lg py-2 dark:bg-gray-900 dark:border-gray-800">
                  {articles.map((a) => (
                    <Link
                      key={a.slug}
                      href={`/best/${a.slug}`}
                      onClick={() => setSwapOpen(false)}
                      className="block px-4 py-2 text-xs text-[#444444] hover:bg-[#EAF4E5] hover:text-[#2D6B1A] dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-green-300 normal-case tracking-normal"
                    >
                      {a.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:text-[#2D6B1A] dark:hover:text-green-300"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-[#2D6B1A] dark:text-green-400"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-dashed border-[#d4d4d4] dark:border-gray-800 px-4 py-4 space-y-2 bg-white dark:bg-gray-950">
          <p className="eyebrow text-[#666666] dark:text-gray-500 pt-2">The Swap</p>
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/best/${a.slug}`}
              onClick={() => setMobileOpen(false)}
              className="block pl-3 py-1 text-sm text-[#444444] dark:text-gray-300"
            >
              {a.title}
            </Link>
          ))}
          <div className="border-t border-dashed border-[#d4d4d4] dark:border-gray-800 pt-2 space-y-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block py-1 eyebrow text-[#666666] dark:text-gray-400"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="pt-3 border-t border-dashed border-[#d4d4d4] dark:border-gray-800">
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  )
}
