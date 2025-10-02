import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Navigation } from '../../components/Navigation/Navigation'
import { TabsButtons } from '../../components/TabButtons'

type TabOption = "automatic" | "manual";
export const Home = () => {
  const [tokenUrl, setTokenUrl] = useState('')
  const [activeTab, setActiveTab] = useState<TabOption>("automatic")
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const handleFindToken = () => {
    if (!tokenUrl.trim()) {
      setError(true)
      return
    }
    setError(false)
    navigate(`/${activeTab}`)
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
      <Navigation step={1} />
      <div className="bg-white rounded-sm p-4 sm:p-3 md:p-8">
        <TabsButtons activeTab={activeTab} onChange={setActiveTab} />

        <div className="space-y-4 sm:space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              Enter token URL
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              TKN agents will try to find all the relevant data <br />
              and you can confirm afterwards
            </p>
          </div>

          <div>
            <input
              type="text"
              value={tokenUrl}
              onChange={(e) => setTokenUrl(e.target.value)}
              placeholder="TOKEN URL"
              className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-sm hover:border-custom-orange 
                focus:outline-none focus:border-orange-500 focus:ring-[4px] focus:ring-orange-500/20 
                text-sm sm:text-base
                ${error ? 'border-red-500 focus:ring-red-500/20' : 'border-gray-300'}`}
            />
            {error && (
              <p className="text-red-500 text-xs mt-1">Token URL is required</p>
            )}
          </div>

          <button
            onClick={handleFindToken}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white  font-medium py-[18px] px-[12px] sm:py-4 sm:px-3 rounded-sm flex items-center justify-between gap-2 transition-colors text-sm sm:text-base"
          >
            FIND TOKEN DATA
            <span className="w-8 h-8 bg-white/12 rounded-md flex items-center justify-center">
              <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
