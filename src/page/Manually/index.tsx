import  { useState } from 'react';
import { Navigation } from '../../components/Navigation/Navigation';
import { TabsButtons } from '../../components/TabButtons';
import { SubmitButton } from '../../components/SubmitButton';
import { TokenDetails } from '../../components/TokenDetails';
import { LinksSection } from '../../components/LinksSection';
import { ContractSection } from '../../components/ContractSection';

export default function TokenManualEntryPage() {
    const [activeTab, setActiveTab] = useState<'automatic' | 'manual'>('manual');
    const [links, setLinks] = useState([
        'https://example.com',
        'https://x.com/earch?q=BUSDC',
        'https://github.com/exerehq'
    ]);
    const [contracts, setContracts] = useState([
    { chain: 'Ethereum', address: '0x3f43d99c9b49b19c353d6f7f0f8b90043e35fb60f9ey', decimals: '6' }
    ]);

    const [formData, setFormData] = useState({
        name: 'USD COIN',
        ticker: 'USDC',
        description: 'USDC is a fully collateralized US dollar stablecoin. USDC is the bridge between dollars and trading on cryptocurrency exchanges. The technology behind CENTRE makes it possible to exchange value between people, businesses and financial institutions just like email between mail services and texts between SMS providers. We believe by removing artificial economic borders, we can create a more inclusive global economy.',
        cid: '',
    });

  
  return (
    <div className="font-acid min-h-screen bg-gray-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
    
        <div className="relative pl-8 sm:pl-10 mb-1">
          <Navigation step={1}/>
                  
          <div className="bg-white px-6 pt-6 pb-1 rounded-sm shadow-sm">
            <TabsButtons activeTab={activeTab} onChange={setActiveTab} />
          </div>
       
        </div>

        {/* Section 1: Token details */}
        <TokenDetails isSearching={false} formData={formData} setFormData={setFormData} />

        {/* Section 2: Links and socials */}
        <LinksSection links={links} setLinks={setLinks}/>

        {/* Section 3: Contracts */}
        <ContractSection contracts={contracts} setContracts={setContracts} />
        <SubmitButton/>
      </div>
    </div>
  );
}