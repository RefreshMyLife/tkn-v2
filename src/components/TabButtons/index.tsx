import { TabButton } from "./TabButton";

export type TabOption = "automatic" | "manual";

type TabsButtonsProps = {
  activeTab: TabOption;
  onChange: (tab: TabOption) => void;
};

export const TabsButtons = ({ activeTab, onChange }: TabsButtonsProps) => {
  return (
    <div className="grid grid-cols-1 border-4 border-gray-100 bg-gray-100 sm:grid-cols-2 gap-3 rounded-sm sm:gap-4 mb-4 sm:mb-6">
      <TabButton
        tab="automatic"
        active={activeTab === "automatic"}
        onClick={() => onChange("automatic")}
        label="AUTOMATICALLY WITH AGENT"
        icon="automatic"
      />
      <TabButton
        tab="manual"
        active={activeTab === "manual"}
        onClick={() => onChange("manual")}
        label="ENTER DATA MANUALLY"
        icon="manual"
      />
    </div>
  );
};
