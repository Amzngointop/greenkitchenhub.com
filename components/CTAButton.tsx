import Link from 'next/link'
import type { ReactNode } from 'react'

interface CTAButtonProps {
  href: string
  children: ReactNode
  external?: boolean
  className?: string
}

export function CTAButton({ href, children, external, className = '' }: CTAButtonProps) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className={`btn-3d ${className}`}
      >
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={`btn-3d ${className}`}>
      {children}
    </Link>
  )
}
