import { X } from 'lucide-react'


type LinkItemProps = {
  value: string;
  onChange: (value: string) => void;
  onRemove: () => void;
};

export const LinkItem = ({ value, onChange, onRemove }: LinkItemProps) => {
  return (
    <div className="flex gap-2 items-center">
      <input
        type="text"
        placeholder="URL"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 px-3 py-2.5 border border-black/10 rounded-sm hover:border-custom-orange 
                   focus:outline-none focus:border-orange-500 focus:ring-[4px] focus:ring-orange-500/20 
                   text-sm sm:text-base"
      />
      <button
        onClick={onRemove}
        className="w-6 h-6 flex items-center justify-center text-black/50 bg-black/4 rounded-sm hover:text-gray-600 transition-colors"
      >
        <X className="w-4 h-4" size={20} strokeWidth={2} />
      </button>
    </div>
  );
};