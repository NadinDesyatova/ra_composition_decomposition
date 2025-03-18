// отвечает за отображение и взаимодествие всех компонентов главной страницы

import { AdvertisingBanner } from "../../components/advertising/AdvertisingBanner";
import { SideAdvertising } from "../../components/advertising/SideAdvertising";
import { MainNewsSection } from "../../components/main-news/MainNewsSection";
import { ThemesWithReadyTabs } from "../../components/ready-tabs/ThemesWithReadyTabs";
import { SearchBar } from "../../components/search-bar/SearchBar";

export const FinalPage = () => {
  return (
    <div className="search-page_content">
      <MainNewsSection />
      <SideAdvertising title="Как правильно писать" srcSideAds="...">
        <p>Смотрите и запоминайте на Яндексе</p>
      </SideAdvertising>
      <SearchBar />
      <AdvertisingBanner src="..."/>
      <ThemesWithReadyTabs />
    </div>
  );
};
