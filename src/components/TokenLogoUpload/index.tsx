
import React from 'react'

type FormData = {
  name: string;
  ticker: string;
  description: string;
  cid: string;
};

type TokenLogoUploadProps = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};
export const TokenLogoUpload = ({formData, setFormData}:TokenLogoUploadProps) => {
  return (
    <div className="mb-4 sm:mb-6 relative overflow-hidden ">
        <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-black/5 -translate-x-1/2 z-3"></div>
        <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-black/5 -translate-y-1/2 z-3"></div>
        <div className="absolute left-1/2 top-1/2 w-full h-[2px] bg-black/5 -translate-x-1/2 -translate-y-1/2 rotate-45 z-1 overflow-clip"></div>
        <div className="absolute left-1/2 top-1/2 w-full h-[2px] bg-black/5 -translate-x-1/2 -translate-y-1/2 rotate-135 z-1 overflow-clip"></div>
        <div className="absolute left-1/2 top-1/2 w-3/4 h-[150%] rounded-full border-2 border-black/5 -translate-x-1/2 -translate-y-1/2 z-1 overflow-clip"></div>
        <label className="group relative w-full bg-gray-50 rounded-sm p-6 sm:p-8 flex flex-col items-center justify-center border-2 border-dashed border-gray-300  hover:border-black cursor-pointer transition-all duration-300">
        {formData.cid ? (
          <div className='flex flex-col justify-center items-center gap-3 m-4.5'>
            <span className='text-sm  text-black  font-semibold z-4'>LOGO</span>
            <img
                  src={formData.cid}
                  alt="token-logo"
                  className="w-[64px] h-[64px] rounded-full "
              />
          </div>
          
            ) : (
            <div className='flex flex-col justify-center items-center gap-3 m-4.5'>
              <span className='font-medium text-sm  text-black/50 z-4'>LOGO</span>
              <div className="relative w-[64px] h-[64px] bg-white rounded-sm p-6 sm:p-8 flex items-center justify-center 
                self-center border-2 border-dashed border-gray-300 group-hover:border-black transition-all duration-300 z-2 "> 
                  <div className="absolute left-1/2 top-1/2 w-3/4 h-3/4 border-2 border-black/5 -translate-x-1/2 -translate-y-1/2 z-2 rounded-full"></div>
              </div>
            </div>
           
          
        )}    
            <div className='bg-white px-3 py-1.5 hover:outline-1 group-hover:outline-black rounded-sm transition-all z-4'>
              <span className="text-xs sm:text-sm font-medium text-black hover:text-gray-900">
                {formData.cid ? "CHANGE LOGO" : "UPLOAD"}
              </span>
            </div>
            
            
            <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                    const preview = URL.createObjectURL(file);
                    setFormData({ ...formData, cid: preview });
                    }
                }}
            />
        </label>
    </div>
  )
}
