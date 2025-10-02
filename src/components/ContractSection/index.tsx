import React from 'react'
import { Plus } from 'lucide-react'
import { ContractItem } from './ContractItem'
import type { Contract } from './types'
import { ListMarker } from '../ListMarker'

type ContractSectionProps = {
  contracts: Contract[]
  isSearching?: boolean
  setContracts: React.Dispatch<React.SetStateAction<Contract[]>>
}

export const ContractSection = ({ contracts, setContracts, isSearching }: ContractSectionProps) => {
  const addContract = () => {
    setContracts([...contracts, { chain: '', address: '', decimals: '' }])
  }

  const removeContract = (index: number) => {
    setContracts(contracts.filter((_, i) => i !== index))
  }

  const updateContract = (index: number, field: keyof Contract, value: string) => {
    const newContracts = [...contracts]
    newContracts[index] = { ...newContracts[index], [field]: value }
    setContracts(newContracts)
  }

  return (
    <div className="relative pl-1 sm:pl-10 mb-10">
      <ListMarker number={3} />

      <div className="flex items-center justify-between border-transparent rounded-sm mb-4 bg-white px-6 pb-5 pt-4">
        <h2 className={`text-lg sm:text-xl font-semibold ${isSearching ? 'text-black/50': 'text-black'}`}>Contracts</h2>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="w-4 h-4 accent-black rounded-sm border-gray-300 hover:border-black" />
          <span className={`text-xs sm:text-sm text-black font-medium ${isSearching ? 'opacity-50': 'opacity-100'}`}>No contract</span>
        </label>
      </div>

      <div className="bg-white rounded-sm p-4 space-y-4">
        {isSearching ? (
          <div className="space-y-4 animate-pulse">
            <div className="h-10 bg-gray-200 rounded" />
            <div className="h-10 bg-gray-200 rounded" />
            <div className="h-10 bg-gray-200 rounded" />
          </div>
        ) : (
          contracts.map((contract, index) => (
            <ContractItem
              key={index}
              contract={contract}
              index={index}
              removeContract={removeContract}
              updateContract={updateContract}
            />
          ))
        )}
      </div>

      {!isSearching && (
        <button
          onClick={addContract}
          className="w-full bg-white rounded-sm mt-4 flex items-center justify-center gap-2 text-sm font-medium text-black hover:text-gray-900 py-2 transition-colors"
        >
          <div className="flex gap-2 py-2.5 px-10 border border-transparent rounded-sm hover:border-black transition-all duration-300">
            <Plus size={16} />
            ADD CONTRACT
          </div>
        </button>
      )}
    </div>
  )
}
