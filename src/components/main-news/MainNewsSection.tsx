// компонет для отображения списка главных новостей, фильтров и курсов валют

import { useState } from "react";
import { MainNewsFilters } from "./MainNewsFilters";
import { MainNewsList } from "./MainNewsList";
import { CurrencyRates } from "./CurrencyRates";

export const MainNewsSection = () => {
  const [selectFilter, setSelectedFilter] = useState<HTMLElement>();

  const filters = ["Новости", "Жизнь", "Рекомендуем"];

  const news = [
    {text: "В Испании археологи нашли останки неизвестного им вида древнего человека", picture: {type: "face", color:"#2c7a17"}, link: "..."},
    {text: "Ученые обнаружили 128 новых лун, вращающихся вокруг Сатурна", picture: {type: "dark_mode", color:"#135860"}, link: "..."},
    {text: "TikTok запускает новый инструмент, который поможет пользователям-подросткам соблюдать режим дня", picture: {type: "generating_tokens", color:"#60134d"}, link: "..."},
    {text: "Disney разрабатывает сериал про кролика Освальда — предшественника Микки-Мауса", picture: {type: "cruelty_free", color:"#373336"}, link: "..."},
    {text: "Исследование: ChatGPT реагирует на негативные эмоции, плохие новости и психотерапию", picture: {type: "psychology", color:"#605d13"}, link: "..."},
    {text: "Умер создатель шоколадной пасты Nutella Франческо Ривелла", picture: {type: "church", color:"#9b4d23"}, link: "..."}
  ];
  
  const currencyRandomValue = (initial: number) => Number((Math.random() * 2 + initial).toFixed(2));

  const currencyItems = [
    {name: "USD ", value: currencyRandomValue(85)}, 
    {name: "EUR ", value: currencyRandomValue(95)}
  ];

  return (
    <div className="main-news_section">
      <MainNewsFilters
        listFilters={filters}
        changeFilter={setSelectedFilter}
        selectetedFilter={selectFilter}
      />
      <MainNewsList listNews={news} />
      <CurrencyRates items={currencyItems} />
    </div>
  );
};