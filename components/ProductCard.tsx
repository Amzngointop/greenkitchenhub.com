import type { Product } from '@/data/products'
import { CTAButton } from './CTAButton'

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col border border-[#e5e5e5] rounded-lg p-4 bg-white dark:bg-gray-900 dark:border-gray-800">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={product.imageUrl}
        alt={product.name}
        style={{
          width: '100%',
          maxHeight: '280px',
          objectFit: 'contain',
          backgroundColor: '#f9f9f9',
          borderRadius: '8px',
          marginBottom: '16px',
          padding: '12px',
        }}
      />
      {product.badge && (
        <span className="self-start mb-2 px-2 py-0.5 rounded-full bg-[#EAF4E5] text-[#2D6B1A] text-xs uppercase tracking-wide dark:bg-gray-800 dark:text-green-400">
          {product.badge}
        </span>
      )}
      <h3 className="font-serif text-[14px] leading-snug line-clamp-2 text-[#111111] dark:text-gray-100">
        {product.name}
      </h3>
      <p className="text-[12px] text-[#666666] dark:text-gray-400 mt-1 mb-4 flex-grow">
        {product.bestFor}
      </p>
      <CTAButton href={product.affiliateUrl} external className="w-full">
        View on Amazon →
      </CTAButton>
    </div>
  )
}
