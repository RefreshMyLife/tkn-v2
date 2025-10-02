

type TextInputWithLabelProps = {
  value: string
  onChange: (value: string) => void
  label: string
}

export const TextInputWithLabel = ({ value, onChange, label }: TextInputWithLabelProps) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder=" "
        className="peer w-full px-3 pt-5 pb-2 border border-black/10 rounded-sm text-sm sm:text-base focus:outline-none focus:border-orange-500 focus:ring-[4px] focus:ring-orange-500/20 hover:border-custom-orange"
      />
      <label className="absolute left-3 text-gray-500 text-[12px] transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-0.5 peer-focus:left-2 peer-focus:text-[12px]">
        {label}
      </label>
    </div>
  )
}
