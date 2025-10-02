import { useNavigate } from 'react-router-dom'
import Check from '../../assets/icons/check.svg'
import { ArrowRight } from 'lucide-react'
type WalletSuccessModalProps = {
    stakeAmount: number
    apy?: number
    rewards?: string
    redemptionPeriod?: string
}
export const WalletSuccessModal = ({ stakeAmount, apy, rewards, redemptionPeriod }: WalletSuccessModalProps) => {
    const navigate = useNavigate()
  return (
    <div className="fixed inset-0 bg-black/5 backdrop-blur-sm flex items-end pb-4 gap-4 justify-center z-50">
        <div className="bg-custom-black/90 rounded-sm p-6 max-w-2xl w-full mx-4 relative">
            <div className="flex gap-2 items-center mb-4 ">
                <img src={Check} alt="check" />
                <div className="flex flex-col text-white ">
                    <h2 className="text-2xl ">
                    Staking successful
                    </h2>
                </div>
            </div>

            <div className="space-y-1">
                <div className="bg-white/8  rounded-sm p-4 font-medium">
                    <div className="text-white text-sm uppercase mb-2">
                        Submitting 1 token
                    </div>
                    <div className="text-white/50">USDC</div>
                </div>

                <div className='bg-white/8  rounded-sm p-4'>
                    <div className="text-white text-sm uppercase mb-">
                        Staking
                    </div>

                    <div className="space-y-2 ">
                        <div className="flex justify-between text-sm">
                            <span className="text-white/50 font-medium">TOTAL</span>
                            <span className="text-white font-medium">
                                {(stakeAmount * 1000).toLocaleString()} TKN
                            </span>
                        </div>
                        
                        <div className="flex justify-between text-sm">
                            <span className="text-white/50 font-medium">APY</span>
                            <span className="text-white font-medium">{apy}%</span>
                        </div>
                        
                        <div className="flex  justify-between text-sm">
                            <span className="text-white/50 font-medium">REWARDS</span>
                            <div className="flex gap-2 items-center">
                                <span className="text-white font-medium">{rewards}</span>
                                <div className='w-[1px] h-[12px] bg-white/20'></div>
                                <span className="text-white/50">110 USD</span>
                            </div>
                            
                        </div>
                        
                        <div className="flex justify-between text-sm">
                            <span className="text-white/50 font-medium">REDEMPTION PERIOD</span>
                            <span className="text-white font-medium">{redemptionPeriod}</span>
                        </div>
                    </div>
                </div>
            </div>
              
            <div>
                <button
                    onClick={() => {navigate('/staking-dashboard')}}
                    className="w-full mt-4 bg-custom-orange hover:bg-orange-500 text-white font-semibold py-[18px] px-[12px] rounded-sm transition-colors flex items-center justify-between mb-6 group"
                    >
                    <span className="font-medium text-sm">FINISH</span>
                    <div className="w-8 h-8 bg-white/12 rounded-md flex items-center justify-center group-hover:translate-x-1 transition-transform">
                        <ArrowRight className="w-6 h-6" />
                    </div>
                </button>
            
            </div>
        </div>
    </div>
  )
}
