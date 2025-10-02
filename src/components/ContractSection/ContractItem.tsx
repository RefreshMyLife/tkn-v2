import { X } from 'lucide-react'
import type { Contract } from './types'
import { ChainSelect } from './ChainSelect'
import { TextInputWithLabel } from './TextInputWithLabel'
import { DecimalsButtonGroup } from './DecimalsButtonGroup'

type ContractItemProps = {
  contract: Contract
  index: number
  removeContract: (index: number) => void
  updateContract: (index: number, field: keyof Contract, value: string) => void
}

export const ContractItem = ({ contract, index, removeContract, updateContract }: ContractItemProps) => {
  return (
    <div className="space-y-4 p-2 sm:p-4 rounded-sm relative ">
      <div className="flex items-center gap-2">
        <ChainSelect
          value={contract.chain}
          onChange={(value) => updateContract(index, 'chain', value)}
        />
        <button
          onClick={() => removeContract(index)}
          className="w-6 h-6 flex items-center justify-center text-black/50 bg-black/5 rounded-sm hover:text-gray-600 transition-colors"
        >
          <X size={18} />
        </button>
      </div>

      <TextInputWithLabel
        value={contract.address}
        onChange={(value) => updateContract(index, 'address', value)}
        label="ADDRESS"
      />

      <div className="flex items-center gap-2">
        <TextInputWithLabel
          value={contract.decimals}
          onChange={(value) => updateContract(index, 'decimals', value)}
          label="DECIMALS"
        />
        <DecimalsButtonGroup
          selectedValue={contract.decimals}
          onSelect={(value) => updateContract(index, 'decimals', value)}
        />
      </div>
    </div>
  )
}
