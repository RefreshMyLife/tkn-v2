import { useState } from 'react'

type ChainSelectProps = {
  value: string
  onChange: (value: string) => void
}

const chains = [
  { value: 'optimism', label: 'Optimism' },
  { value: 'ethereum', label: 'Ethereum' },
  { value: 'base', label: 'Base' },
  { value: 'polygon', label: 'Polygon' }
]

export const ChainSelect = ({ value, onChange }: ChainSelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  
  const selectedChain = chains.find(chain => chain.value === value)

  return (
    <div className="relative flex-1 group">
      <label className={`absolute left-2 text-[12px] transition-all ${
        value || isFocused ? 'top-0 px-1 text-black/50' : 'top-5 text-black/50'
      }`}>
        CHAIN
      </label>
      
      <div 
        className="peer w-full px-3 pt-5 pb-2 pr-10 border border-black/10 rounded-sm hover:border-orange-500 focus-within:outline-none focus-within:border-orange-500 focus-within:ring-[4px] focus-within:ring-orange-500/20 text-sm sm:text-base bg-white cursor-pointer transition-colors"
        onClick={() => {
          setIsOpen(!isOpen)
          setIsFocused(true)
        }}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            setIsOpen(false)
            setIsFocused(false)
          }
        }}
        onFocus={() => setIsFocused(true)}
        tabIndex={0}
      >
        <div className={selectedChain ? 'text-black' : 'text-transparent'}>
          {selectedChain ? selectedChain.label : 'placeholder'}
        </div>
      </div>

      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none transition-colors group-hover:text-orange-500">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="currentColor"
          className={`transition-all transform ${isOpen || isFocused ? 'rotate-180 text-orange-500' : 'rotate-0 text-black'}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.54076 0C9.35249 -3.45373e-08 9.79592 0.921589 9.27626 1.52861L5.7355 5.66466C5.35273 6.11178 4.64727 6.11178 4.2645 5.66466L0.723736 1.52861C0.204082 0.921589 0.647512 3.35864e-07 1.45924 3.01325e-07L8.54076 0Z" />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-black/10 rounded-sm shadow-lg z-20 overflow-hidden">
          {chains.map((chain) => (
            <div
              key={chain.value}
              className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-sm sm:text-base transition-colors"
              onMouseDown={(e) => {
                e.preventDefault()
                onChange(chain.value)
                setIsOpen(false)
                setIsFocused(false)
              }}
            >
              {chain.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}