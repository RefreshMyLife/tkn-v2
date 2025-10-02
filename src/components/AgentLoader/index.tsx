
export const AgentLoader = () => {
    return (
        <div className='sm:pl-10 w-full  mt-24'>
            <style>{`
                @keyframes slide {
                0% {
                    background-position: 0 0;
                }
                100% {
                    background-position:33.94px  0; 
                }
                }
            `}</style>
            <div className=" h-[48px] flex items-center justify-center bg-white/20 rounded px-3 py-2 mb-3 relative overflow-hidden">
            {/* Animated diagonal stripes */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div 
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: 'repeating-linear-gradient(-45deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5) 14px, rgba(0,0,0,1) 14px, rgba(0,0,0,1) 24px)',
                animation: 'slide 2s linear infinite',
                backgroundSize: '33.94px  33.94px ',
               
              }}
            />

            </div>
            
            <span className="text-xs sm:text-sm text-black/50 font-medium truncate uppercase relative z-10">
             Agent working...
            </span>

        
          </div>
        </div>
      
  )
}
