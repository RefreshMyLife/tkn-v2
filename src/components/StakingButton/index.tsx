import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { WalletSignModal } from '../WalletSignModal'
import { WalletSuccessModal } from '../WalletSuccessModal'

type StakingButtonProps = {
  stakeAmount: number
  apy?: number
  rewards?: string
  redemptionPeriod?: string
}

export const StakingButton = ({ 
  stakeAmount, 
  apy = 12,
  rewards = '~322 TKN/D',
  redemptionPeriod = '3 DAYS',
}: StakingButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const [, setTxHash] = useState<string>('')

  const handleStakeClick = async () => {
    setIsModalOpen(true)

    try {
      if (typeof window.ethereum !== 'undefined') {
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0xaa36a7' }], // Sepolia chainId
          })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (switchError: any) {
          if (switchError.code === 4902) {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [{
                chainId: '0xaa36a7',
                chainName: 'Sepolia Testnet',
                nativeCurrency: {
                  name: 'Sepolia ETH',
                  symbol: 'ETH',
                  decimals: 18
                },
                rpcUrls: ['https://sepolia.infura.io/v3/'],
                blockExplorerUrls: ['https://sepolia.etherscan.io']
              }]
            })
          }
        }

        const accounts = await window.ethereum.request({ 
          method: 'eth_requestAccounts' 
        })
        
        const connectedAddress = accounts[0]

        if (!connectedAddress) {
          console.warn('No wallet connected')
          return
        }

       
        const transactionParameters = {
          to: '0x0000000000000000000000000000000000000000',
          from: connectedAddress,
          value: '0x0', 
        }

        const txHash = await window.ethereum.request({
          method: 'eth_sendTransaction',
          params: [transactionParameters],
        })

        console.log('Transaction Hash:', txHash)
        console.log('Staking:', {
          amount: stakeAmount,
          token: 'TKN',
          apy: apy,
          timestamp: Date.now()
        })

        setTxHash(txHash)
        setIsModalOpen(false)
        setIsSuccessModalOpen(true)
        
      } else {
        console.warn('Web3 provider not found')
      }
    } catch (error) {
      console.error('Transaction error:', error)
    }
  }

  return (
    <div>
      <button
        onClick={handleStakeClick}
        className="w-full bg-custom-orange hover:bg-orange-500 text-white font-semibold py-[18px] px-[12px] rounded-sm transition-colors flex items-center justify-between mb-6 group"
      >
        <span className="font-medium text-sm">STAKE {stakeAmount.toLocaleString()} TKN</span>
        <div className="w-8 h-8 bg-white/12 rounded-md flex items-center justify-center group-hover:translate-x-1 transition-transform">
          <ArrowRight className="w-6 h-6" />
        </div>
      </button>

      {isModalOpen && (
        <WalletSignModal stakeAmount={stakeAmount } apy={apy} rewards={rewards} redemptionPeriod={redemptionPeriod} setIsModalOpen={setIsModalOpen} />
      )}

      {isSuccessModalOpen && (
        <WalletSuccessModal stakeAmount={ stakeAmount} apy={apy} rewards={rewards} redemptionPeriod={redemptionPeriod} />
      )}
    </div>
  )
}