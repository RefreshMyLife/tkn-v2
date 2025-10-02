import { ArrowRight } from 'lucide-react'

import { useNavigate } from 'react-router-dom'

export const SubmitButton = () => {
    const navigate = useNavigate()
  return (
    <div className="pl-1 sm:pl-10">
      <button
        onClick={() => navigate('/staking')}
        className="w-full bg-custom-orange  hover:bg-orange-500 text-white font-medium py-3 sm:py-4 px-4 sm:px-6 rounded-sm flex items-center justify-between gap-2 transition-colors text-sm sm:text-base mt-24">
            <div className='flex flex-col items-start'>
                 CONTINUE
                <span className="text-xs opacity-80 uppercase">Make sure the data is accurate</span>
            </div>
           <div className='w-8 h-8 bg-white/12 rounded-md flex items-center justify-center'>
             <ArrowRight size={18} className="sm:w-5 sm:h-5" />
           </div>
           
          </button>
        </div>
  )
}
