import Smile from "../../assets/icons/smile.svg";

type SearchingProgressProps = {
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SearchingProgress = ({ setIsSearching }: SearchingProgressProps) => {
  return (
    <div className="bg-custom-yellow rounded-lg p-4 sm:p-6 mb-[4px]">
      <style>{`
        @keyframes slide {
          0% { background-position: 0 0; }
          100% { background-position: 42.43px 0; }
        }
      `}</style>

      <div className="flex flex-col items-start gap-3 mb-3">
        <div className="flex gap-[8px] items-center">
          <img src={Smile} className="sm:w-8 sm:h-8" alt="Smile" />
          <h3 className="text-2xl font-semibold sm:text-lg">Searching...</h3>
        </div>
        <span className="text-black/60 text-xs sm:text-sm">
          The agent will fill the data below, make sure everything's correct
        </span>
      </div>

      <div className="h-[48px] flex items-center justify-between bg-white/20 rounded px-3 py-2 mb-3 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div
            style={{
              backgroundImage:
                'repeating-linear-gradient(-45deg, transparent, transparent 15px, rgba(0,0,0,0.9) 15px, rgba(0,0,0,0.9) 30px)',
              animation: 'slide 2s linear infinite',
              backgroundSize: '42.43px 42.43px',
            }}
            className="absolute inset-0 opacity-20 pointer-events-none"
          />
        </div>

        <span className="text-xs sm:text-sm font-semibold truncate relative z-10">
          EXPLORING TOKENWEBSITE.COM...
        </span>

        <button
          onClick={() => setIsSearching(false)}
          className="flex gap-[8px] items-center bg-black text-white px-4 py-2 rounded-sm text-xs sm:text-sm font-medium hover:bg-custom-gray transition-colors"
        >
          <div className="w-[12px] h-[12px] bg-white rounded-[2px]" />
          STOP
        </button>
      </div>
    </div>
  );
};
