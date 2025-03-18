// показывает тему и поисковые запросы/информацию по теме

import { ReactNode } from "react";

type ReadyTabProps = {
  type: string,
  children: ReactNode
}

export const ThemeWithReadyTabs = ({type, children}: ReadyTabProps) => {
  return (
    <div className="theme">
      <h3 className="theme-title">{type}</h3>
      {children}
    </div>
  );
};
