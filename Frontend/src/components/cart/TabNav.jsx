// Componets
import { Tab } from "./Tab";
//utils
import capitalizeWord from "../../utils/cart/tabs/capitalizeWord";

export const TabNav = ({ currentTab, tabs }) => {

  return (
    <div className="flex">
      {tabs.map((tab, idx) => (
        <Tab
          key={tab}
          isCurrent={tabs.at(currentTab) === tabs.at(idx)}
          text={capitalizeWord(tabs.at(idx))}
          number={idx + 1}
        />
      ))}
    </div>
  );
};
