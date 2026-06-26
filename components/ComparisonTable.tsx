import type { Product } from '@/data/products'

export function ComparisonTable({ products }: { products: Product[] }) {
  return (
    <div className="overflow-x-auto my-8 border border-[#e5e5e5] dark:border-gray-800 rounded-lg">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-[#EAF4E5] dark:bg-gray-800 text-left">
            <th className="p-3 eyebrow text-[#444444] dark:text-gray-300">Product</th>
            <th className="p-3 eyebrow text-[#444444] dark:text-gray-300">Best For</th>
            <th className="p-3 eyebrow text-[#444444] dark:text-gray-300">Key Feature</th>
            <th className="p-3 eyebrow text-[#444444] dark:text-gray-300">Top Con</th>
            <th className="p-3 eyebrow text-[#444444] dark:text-gray-300">Link</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr
              key={p.id}
              className="border-t border-dashed border-[#d4d4d4] dark:border-gray-800 align-top"
            >
              <td className="p-3 font-medium text-[#111111] dark:text-gray-100">{p.name}</td>
              <td className="p-3 text-[#444444] dark:text-gray-400">{p.bestFor}</td>
              <td className="p-3 text-[#444444] dark:text-gray-400">{p.pros[0]}</td>
              <td className="p-3 text-[#444444] dark:text-gray-400">{p.cons[0]}</td>
              <td className="p-3">
                <a
                  href={p.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="text-[#2D6B1A] dark:text-green-400 hover:underline whitespace-nowrap"
                >
                  View →
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
