import { Loader2 } from 'lucide-react';

export const SearchingIndicator = () => (
  <div className='flex items-center gap-2 text-black/50 uppercase font-semibold'>
    <Loader2 className="w-[12px] h-[12px] text-gray-700 animate-spin" />
    <span>Searching</span>
  </div>
);
