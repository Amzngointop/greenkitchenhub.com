'use client'
import { useState } from 'react'

const options = [
  { key: 'paperTowels', label: 'Uses paper towels daily', plastic: 0, savings: 180 },
  { key: 'plasticWrap', label: 'Uses plastic wrap / Ziploc bags', plastic: 1400, savings: 95 },
  { key: 'plasticBags', label: 'Uses plastic grocery bags', plastic: 3200, savings: 60 },
  { key: 'plasticUtensils', label: 'Uses plastic utensils / cutting boards', plastic: 2100, savings: 140 },
  { key: 'plasticContainers', label: 'Uses plastic food containers', plastic: 2600, savings: 145 },
]

interface Result {
  plastic: number
  trees: number
  savings: number
  score: number
}

export function WasteCalculator() {
  const [checked, setChecked] = useState<Record<string, boolean>>({})
  const [result, setResult] = useState<Result | null>(null)

  const toggle = (key: string) =>
    setChecked((c) => ({ ...c, [key]: !c[key] }))

  const calculate = () => {
    const selected = options.filter((o) => checked[o.key])
    const plastic = selected.reduce((s, o) => s + o.plastic, 0)
    const savings = selected.reduce((s, o) => s + o.savings, 0)
    const trees = Math.round((plastic / 1000) * 1.7 * 10) / 10
    const score = Math.max(0, 100 - selected.length * 18)
    setResult({ plastic, trees, savings, score })
  }

  return (
    <div className="rounded-xl p-6 sm:p-8 text-white bg-[#0D1B2A] dark:bg-gray-900 dark:border dark:border-gray-700">
      <p className="text-sm mb-5 text-gray-300">
        Check what applies to your kitchen today, then see the impact of switching to reusables.
      </p>
      <div className="space-y-3 mb-6">
        {options.map((o) => (
          <label key={o.key} className="flex items-center gap-3 cursor-pointer text-sm">
            <input
              type="checkbox"
              checked={!!checked[o.key]}
              onChange={() => toggle(o.key)}
              className="w-4 h-4 accent-green-500"
            />
            {o.label}
          </label>
        ))}
      </div>
      <button onClick={calculate} className="btn-3d">
        Calculate My Impact
      </button>

      <div
        style={{
          maxHeight: result ? '500px' : '0px',
          opacity: result ? 1 : 0,
          overflow: 'hidden',
          transition: 'all 600ms ease-out',
        }}
      >
        {result && (
          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            <div className="bg-white/5 rounded-lg p-4">
              <p className="font-serif text-2xl text-green-400">
                {result.plastic.toLocaleString()}g
              </p>
              <p className="text-xs text-gray-300 mt-1">plastic waste per year</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <p className="font-serif text-2xl text-green-400">{result.trees}</p>
              <p className="text-xs text-gray-300 mt-1">tree equivalent saved</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <p className="font-serif text-2xl text-green-400">
                ${result.savings.toLocaleString()}
              </p>
              <p className="text-xs text-gray-300 mt-1">
                potential yearly savings switching to reusables
              </p>
            </div>
            <div className="sm:col-span-3">
              <p className="text-xs text-gray-300 mb-1">
                Your current eco score: {result.score}/100
              </p>
              <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-green-500 rounded-full"
                  style={{ width: `${result.score}%`, transition: 'width 600ms ease-out' }}
                />
              </div>
              <p className="text-xs text-gray-400 mt-2 italic">
                The more swaps you make, the higher your score climbs.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
