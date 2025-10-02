
type DecimalsButtonGroupProps = {
  selectedValue: string
  onSelect: (value: string) => void
}

export const DecimalsButtonGroup = ({ selectedValue, onSelect }: DecimalsButtonGroupProps) => {
  const options = ['0', '6', '8', '9', '18']
  return (
    <div className="flex gap-2 flex-1">
      {options.map((num) => (
        <button
          key={num}
          onClick={() => onSelect(num)}
          className={`px-3 py-[14px] rounded-sm border-transparent text-sm font-medium transition-colors ${selectedValue === num ? 'bg-black/10' : 'bg-black/4'}`}
        >
          {num}
        </button>
      ))}
    </div>
  )
}
