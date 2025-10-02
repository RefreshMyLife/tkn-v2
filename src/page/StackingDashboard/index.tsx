import { StakingHistory } from '../../components/StakingHistory';
import LogoUSDC from '../../assets/icons/usdc-logo.svg'

export default function StakingDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Main Stats Card */}
        <div className="bg-white rounded-sm p-4 sm:p-6 mb-6">
          {/* Stats Grid - Адаптивная сетка */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-4 md:mb-0">
            <div>
              <div className="text-xs sm:text-sm text-black/50 mb-1">TOTAL STAKED</div>
              <div className="text-lg sm:text-2xl font-semibold break-words">375,000 TKN</div>
            </div>
            <div>
              <div className="text-xs sm:text-sm text-black/50 mb-1">TOTAL REWARDS</div>
              <div className="text-lg sm:text-2xl font-semibold">0 TKN</div>
            </div>
            <div>
              <div className="text-xs sm:text-sm text-black/50 mb-1">AVERAGE APR</div>
              <div className="text-lg sm:text-2xl font-semibold">12%</div>
            </div>
            {/* Кнопка на отдельной строке на мобильных */}
            <div className="col-span-2 sm:col-span-2 md:col-span-1 flex justify-center md:justify-end items-start md:items-center">
              <button className="w-full sm:w-auto bg-white border border-gray-200 text-black font-semibold px-6 py-2 rounded-sm hover:bg-gray-50 transition-colors ">
                WITHDRAW
              </button>
            </div>
          </div>
          
          {/* Divider */}
          <div className="w-full h-[2px] bg-black/8 mt-6 sm:mt-7 mb-4 sm:mb-6"></div>      
          
          {/* Staked Section */}
          <div className="text-xs sm:text-sm text-black/50 font-semibold mb-2">STAKED FOR</div>
          <div className="bg-black/5 rounded-sm w-full sm:max-w-xs p-4 sm:p-6">
            <div className="flex flex-col items-center">
              <div className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] flex items-center justify-center mb-3 sm:mb-4">
                <img src={LogoUSDC} alt="coin logo" className="w-full h-full" />
              </div>
              <div className="text-sm font-medium mb-1">USDC</div>
              <div className="text-xs sm:text-sm text-black/50 mb-3 sm:mb-4">USD Coin</div>
              <div className="h-[1px] w-full bg-black/8 mb-3 sm:mb-4"></div>
              <div className="text-lg sm:text-xl font-bold break-words text-center">375,000 TKN</div>
            </div>
          </div>
        </div>

        {/* History Section */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-1">History</h2>
        <div className="space-y-1">
          <StakingHistory title="Staked 375,000 TKN" date='10 Sep 2025, 12:27 AM' />
          <StakingHistory title="Received 3,4 TKN rewards" date='10 Sep 2025, 12:27 AM' />
          <StakingHistory title="Submitted data for 🪙 USDC" date='10 Sep 2025, 12:27 AM' />
        </div>
      </div>
    </div>
  );
}