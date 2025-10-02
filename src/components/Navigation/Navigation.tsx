import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

type NavigationProps = {
  step: string | number
}

export const Navigation = ({ step }: NavigationProps) => {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-between mb-4 sm:mb-6">
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-1.5 sm:gap-2 text-gray-700 hover:text-gray-900"
      >
        <span className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
          <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
        </span>
        <span className="text-sm sm:text-base font-medium">ADD TOKEN DATA</span>
      </button>
      <div className="flex items-center align-center gap-2 ">
        <span className="text-xs sm:text-sm font-medium">STEP {step}</span>
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-black"></div>
          {step == 2 ? (
              <div className="w-2 h-2 bg-black"></div>  
          ) : (
              <div className="w-2 h-2 bg-gray-400"></div>
          )}
        </div>
      </div>
    </div>
  )
}
