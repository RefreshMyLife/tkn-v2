import  { useState } from 'react';
import { Navigation } from '../../components/Navigation/Navigation';
import { useNavigate } from 'react-router-dom';
import { StakingButton } from '../../components/StakingButton';



export default function Staking() {

    const navigate = useNavigate();
    const [stakeAmount, setStakeAmount] = useState(325000);
    const minStake = 1000;
    const maxStake = 675000;

    const rewardsPerDay = 322;
    const usdValue = 1.10;
    const apy = 12;
    const redemptionPeriod = 3;

    const totalUSD = (stakeAmount * 0.00995).toFixed(0);
    const sliderPercentage = ((stakeAmount - minStake) / (maxStake - minStake)) * 100;

    const handleSliderChange = (e: { target: { value: string; }; }) => {
    setStakeAmount(parseInt(e.target.value));
    };

  return (
    <div className=" flex flex-col items-center justify-center ">
          
        <div className='w-full  max-w-2xl'>
            <Navigation step={2}/>
        </div> 
      <div className="bg-white rounded-2xl  max-w-2xl w-full p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Stake and earn TKN for accuracy
          </h1>
          <p className="text-black/60 text-sm">
            Get a higher yield for submitting accurate data on important datasets
          </p>
        </div>

        {/* Amount Display */}
        <div className="bg-white border border-gray-200 rounded-sm p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="flex justify-between items-center bg-black/10 w-[32px] h-[32px] px-[3px] rounded-full">
                    <span className="text-sm font-semibold text-black">TKN</span>
                </div>
              <span className="text-2xl font-bold text-gray-900 ">
                {stakeAmount.toLocaleString()}
              </span>
            </div>
            <div className="text-black/50 font-semibold">
              ~{totalUSD} USD
            </div>
          </div>
        </div>

        {/* Slider */}
         <div className="mb-8">
          <div className="relative h-[30px] bg-gray-200 rounded-sm overflow-hidden">
            {/* Orange filled part */}
            <div 
              className="absolute left-0 top-0 h-full bg-custom-orange transition-all duration-70"
              style={{ width: `${sliderPercentage}%` }}
            />
            
            {/* Slider thumb with grid icon */}
            <div 
              className="absolute top-0 h-full flex items-center transition-all duration-70"
              style={{ left: `${sliderPercentage}%`, transform: 'translateX(-50%)' }}
            >
          
              
              <div className="w-[40px] h-[30px] bg-custom-orange relative rounded-r-lg flex items-center justify-center cursor-grab active:cursor-grabbing shadow-lg">
                <div className="grid grid-cols-3 gap-0.5">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-[5px] h-[5px] bg-white rounded-[1px]" />
                  ))}
                </div>
              <div className="absolute top-0 right-0 h-full w-1 bg-white "></div>    
             
              </div>
            </div>
            
            {/* Hidden range input */}
            <input
              type="range"
              min={minStake}
              max={maxStake}
              value={stakeAmount}
              onChange={handleSliderChange}
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
          </div>
          <div className="flex justify-between mt-3 text-sm text-black/50 font-semibold">
            <span>MIN {minStake.toLocaleString()}</span>
            <span>MAX {maxStake.toLocaleString()}</span>
          </div>
        </div>

        {/* Rewards Info */}
        <div className="space-y-4 mb-8 bg-gray-100 p-[16px] rounded-sm font-semibold text-sm">
          <div className="flex justify-between items-center">
            <span className="text-black/50 ">REWARDS</span>
            <div className="flex justify-between items-center gap-1 text-right">
              <span className="text-black font-semibold">{rewardsPerDay} TKN/D</span>
              <div className='w-[1px] h-[12px] bg-black/20'></div>
              <span className="text-gray-500"> {usdValue.toFixed(2)} USD</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-black/50">APY</span>
            <span className="text-gray-900 font-semibold">{apy}%</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-black/50">REDEMPTION PERIOD</span>
            <span className="text-gray-900 font-semibold">{redemptionPeriod} DAYS</span>
          </div>
        </div>

        {/* Stake Button */}
        <StakingButton stakeAmount={ stakeAmount}/>

       
        </div>
            <div className="w-full  max-w-2xl flex items-center  my-[16px]">
                <div className="flex-1 h-[10px] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300 to-gray-300"
                            style={{
                            backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 2px, #d1d5db 2px, #d1d5db 5px)'
                            }}
                    />
                </div>
            <span className="text-black font-bold text-sm px-2.5">OR</span>
            <div className="flex-1 h-[10px] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-gray-300 to-gray-300"
                        style={{
                        backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 2px, #d1d5db 2px, #d1d5db 5px)'
                        }}
                />
            </div>
        </div>

        {/* Submit Without Staking */}
          <button
              onClick={()=>navigate("/staking-dashboard")}
              className="w-full  max-w-2xl bg-white hover:bg-gray-50 text-black font-semibold py-5 px-6 rounded-sm  transition-colors">
          SUBMIT WITHOUT STAKING
        </button>
          
    </div>
  );
}
