import React from 'react';
import { ListMarker } from '../ListMarker';
import { TokenLogoUpload } from '../TokenLogoUpload';
import { TokenFormField } from './TokenFormField';
import { SearchingIndicator } from '../SearchingIndicator';
import { TokenSkeletons } from './TokenSkeletons';

type FormData = {
  name: string;
  ticker: string;
  description: string;
  cid: string;
};

type TokenDetailsProps = {
  isSearching: boolean;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

export const TokenDetails = ({ isSearching, formData, setFormData }: TokenDetailsProps) => {
  return (
    <div className="relative pl-1 sm:pl-10 mb-1">
      <div className="hidden sm:block absolute left-0 top-0 bottom-0 border-l-[2px] border-black/12 border-dashed"></div>

      <ListMarker number={1} />

      <div className="bg-white rounded-sm p-4 sm:p-6">
        <div className="flex items-center justify-between gap-3 mb-4 sm:mb-6">
          <h2 className={`text-lg sm:text-xl font-semibold ${isSearching ? 'text-black/50': 'text-black'}`}>Token details</h2>
          {isSearching && <SearchingIndicator />}
        </div>

        {isSearching ? (
          
          <TokenSkeletons/>
        ) : (
          <>
            <TokenLogoUpload formData={formData} setFormData={setFormData} />

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <TokenFormField
                  value={formData.name}
                  onChange={(v) => setFormData({ ...formData, name: v })}
                  placeholder="NAME"
                />
                <TokenFormField
                  value={formData.ticker}
                  onChange={(v) => setFormData({ ...formData, ticker: v })}
                  placeholder="TICKER"
                />
              </div>

              <TokenFormField
                value={formData.description}
                onChange={(v) => setFormData({ ...formData, description: v })}
                placeholder="DESCRIPTION"
                type="textarea"
                rows={5}
              />

              <TokenFormField
                value={formData.cid}
                onChange={(v) => setFormData({ ...formData, cid: v })}
                placeholder="CID (OPTIONAL)"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
