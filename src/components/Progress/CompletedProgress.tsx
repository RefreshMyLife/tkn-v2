import Smile from "../../assets/icons/smile.svg";
import ArrowLoop from "../../assets/icons/arrow-loop.svg";

type CompletedProgressProps = {
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CompletedProgress = ({ setIsSearching }: CompletedProgressProps) => {
  return (
    <div className="bg-custom-green rounded-sm p-4 sm:p-6 mb-[4px]">
      <div className="flex flex-col items-start gap-3 mb-3">
        <div className="flex gap-[8px] items-center">
          <img src={Smile} className="sm:w-8 sm:h-8" alt="Smile" />
          <h3 className="text-2xl font-semibold sm:text-lg">Does everything look right?</h3>
        </div>
        <span className="text-black/60 text-xs sm:text-sm">
          The agent finished scraping https://tokenwebsite.com — check the data and see if there are any inconsistencies
        </span>
      </div>

      <div className="flex items-center justify-between rounded relative overflow-hidden">
        <button
          onClick={() => setIsSearching(true)}
          className="flex gap-[8px] items-center text-black rounded-sm text-xs sm:text-sm font-medium "
        >
          <img src={ArrowLoop} alt="" />
          <span className="uppercase font-medium">Try again</span>
        </button>
      </div>
    </div>
  );
};
