import { useEffect, useState } from 'react'
import { Navigation } from '../../components/Navigation/Navigation'
import { Progress } from '../../components/Progress';
import { SubmitButton } from '../../components/SubmitButton';
import { AgentLoader } from '../../components/AgentLoader';
import { TokenDetails } from '../../components/TokenDetails';
import { LinksSection } from '../../components/LinksSection';
import { ContractSection } from '../../components/ContractSection';

export const Automatically = () => {
  
  const [isSearchingDetails, setIsSearchingDetails] = useState(true);
  const [isSearchingLinks, setIsSearchingLinks] = useState(true);
  const [isSearchingContracts, setIsSearchingContracts] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => setIsSearchingDetails(false), 3000); 
    const t2 = setTimeout(() => setIsSearchingLinks(false), 6000);  
    const t3 = setTimeout(() => setIsSearchingContracts(false), 10000); 

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    }
  }, []);

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


  const isSearching = isSearchingDetails || isSearchingLinks || isSearchingContracts;

  return (
    <div className="font-acid min-h-screen bg-gray-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-4 pb-[8px] sm:pt-8 sm:pb-[8px]">

        <div className="relative pl-1 sm:pl-10 mb-1">
          <Navigation step={1} />
          <Progress isSearching={isSearching} setIsSearching={() => {}} />
        </div>

        {/* Section 1: Token details */}
        <TokenDetails
          isSearching={isSearchingDetails}
          formData={formData}
          setFormData={setFormData}
        />

        {/* Section 2: Links and socials */}
        <LinksSection
          isSearching={isSearchingLinks}
          links={links}
          setLinks={setLinks}
        />

        {/* Section 3: Contracts */}
        <ContractSection
          isSearching={isSearchingContracts}
          contracts={contracts}
          setContracts={setContracts}
        />

        {isSearching ? <AgentLoader /> : <SubmitButton />}
      </div>
    </div>
  )
}
