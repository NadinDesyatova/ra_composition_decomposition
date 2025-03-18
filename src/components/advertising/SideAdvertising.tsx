// отображает боковую рекламу

import { ReactNode } from "react";

type SideAdvertisingProps = {
  title: string,
  srcSideAds: string,
  children: ReactNode
}

export const SideAdvertising = ({title, srcSideAds, children}: SideAdvertisingProps) => {
  return (
    <div className="side_advertisment-body">
      <img className="side-advertising_img" src={srcSideAds} alt="" />
      <h3>{title}</h3>
      {children}
    </div>
  );
};
