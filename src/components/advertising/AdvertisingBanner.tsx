// показывает баннер с рекламой под поисковой строкой

type AdvertisingBannerProps = {src: string};
  
export const AdvertisingBanner = ({src}: AdvertisingBannerProps) => {
  return (
    <img className="advertising-banner" src={src} alt="" />
  );
};
  