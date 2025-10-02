import { Plus } from 'lucide-react'
import React from 'react'
import { ListMarker } from '../ListMarker';
import { LinkItem } from './LinkItem';
import { SearchingIndicator } from '../SearchingIndicator';

type LinksSectionProps = {
  links: string[];
  isSearching: boolean;
  setLinks: React.Dispatch<React.SetStateAction<string[]>>;
};

export const LinksSection = ({ links, setLinks, isSearching }: LinksSectionProps) => {
  const addLink = () => setLinks([...links, '']);

  const updateLink = (index: number, value: string) => {
    const newLinks = [...links];
    newLinks[index] = value;
    setLinks(newLinks);
  };
    console.log(isSearching)
  const removeLink = (index: number) => setLinks(links.filter((_, i) => i !== index));

  return (
    <div className="relative pl-1 sm:pl-10 mb-1">
      <div className="hidden sm:block absolute left-0 top-0 bottom-0 border-l-[2px] border-black/12 border-dashed"></div>
      <ListMarker number={2} />

      <div className="bg-white rounded-sm p-4 sm:p-6">
        <div className="flex items-center justify-between gap-3 mb-4 sm:mb-6">
          <h2 className={`text-lg sm:text-xl font-semibold ${isSearching ? 'text-black/50' : 'text-black'}`}>Links and socials</h2>
            {isSearching && <SearchingIndicator />}
        </div>

        {isSearching ? (
       
          <div className="space-y-3 animate-pulse">
            <div className="h-10 w-full bg-gray-200 rounded" />
           
          </div>
        ) : (
          <>
            <div className="space-y-3">
              {links.map((link, index) => (
                <LinkItem
                  key={index}
                  value={link}
                  onChange={(value) => updateLink(index, value)}
                  onRemove={() => removeLink(index)}
                />
              ))}
            </div>

            <button
              onClick={addLink}
              className="mt-4 flex items-center gap-2 border rounded-sm text-black border-black/8 text-sm font-medium
                         hover:text-gray-900 transition-colors py-1.5 px-3"
            >
              <Plus size={16} />
              ADD LINK
            </button>
          </>
        )}
      </div>
    </div>
  );
};
