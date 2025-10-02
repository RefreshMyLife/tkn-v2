import { X } from 'lucide-react'
import React from 'react'


type WalletSignModalProps = {
    stakeAmount: number
    apy?: number
    rewards?: string
    redemptionPeriod?: string
    setIsModalOpen:  React.Dispatch<React.SetStateAction<boolean>>;
}
export const WalletSignModal = ({stakeAmount,apy,rewards,redemptionPeriod,setIsModalOpen}:WalletSignModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/5 backdrop-blur-sm flex items-end pb-4 gap-4 justify-center z-50">
        <div className="bg-custom-black/88 rounded-sm p-6 max-w-2xl w-full mx-4 relative">
            <div className="flex justify-between items-start ">

                <div className="flex flex-col text-white  gap-2">
                    <h2 className="text-2xl ">
                    Sign the transaction in your wallet
                    </h2>
                    <p className=" text-sm mb-4">
                    Open the app with 0xd9...a70a connected<br />
                    and confirm the transaction
                    </p>
                </div>
                <button
                    onClick={() => setIsModalOpen(false)}
                    className="w-[32px] h-[32px] bg-white/8 flex justify-center items-center text-gray-400 hover:text-white transition-colors"
                >
                <X className="w-5 h-5" />
                </button>
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
        </div>
    </div>
  )
}
