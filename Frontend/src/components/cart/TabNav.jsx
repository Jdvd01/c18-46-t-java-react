// Componets
import { Tab } from "./Tab";
//utils
import capitalizeWord from "../../utils/cart/tabs/capitalizeWord";

export const TabNav = ({ currentTab, tabs, addStyles = "" }) => {
  return (
    <div className={`flex ${addStyles}`}>
      {tabs.map((tab, idx) => (
        <Tab
          key={tab}
          isCurrent={tabs.at(currentTab) === tabs.at(idx)}
          text={capitalizeWord(tabs.at(idx))}
          number={idx + 1}
          isPrevTab={currentTab > idx || currentTab === tabs.length - 1}
        />
      ))}
    </div>
  );
};
