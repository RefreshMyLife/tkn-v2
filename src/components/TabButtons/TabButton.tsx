import { AutomaticIcon } from "./icons/AutomaticIcon";
import { ManualIcon } from "./icons/ManualIcon";

type TabButtonProps = {
  tab: string;
  active: boolean;
  onClick: () => void;
  label: string;
  icon: "automatic" | "manual";
};

export const TabButton = ({ active, onClick, label, icon }: TabButtonProps) => {
  const Icon = icon === "automatic" ? AutomaticIcon : ManualIcon;

  return (
    <button
      onClick={onClick}
      className={`group flex flex-col justify-between items-start gap-2 sm:gap-3 p-[12px] sm:p-3 rounded-sm transition-all ${
        active ? "border-black bg-white" : "text-gray-500"
      } hover:text-black`}
    >
      <Icon
        className={`sm:w-8 sm:h-8 transition-colors ${
          active ? "text-black" : "text-gray-400 group-hover:text-black"
        }`}
      />
      <span className="text-xs sm:text-sm font-medium text-center group-hover:text-black">
        {label}
      </span>
    </button>
  );
};
