// компонент, отвечающий за всю поисковую часть

import { useState } from "react";
import { RandomPhrase } from "./RandomPhrase";
import { SearchField } from "./SearchField";
import { SearchFilters } from "./SearchFilters";

export const SearchBar = () => {
  const [selectFiler, setSelectFiler] = useState<HTMLElement | undefined>();

  const [searchQuery, setSearchQuery] = useState<string>();
  console.log(searchQuery);

  const filtersList = ["Видео", "Картинки", "Новости", "Карты", "Маркет", "Переводчик", "Эфир", "ещё"];

  const randomPhraseList = [
    "Сколько весят втроем лягушка, ягненок и пони?",
    "Теория эволюции — это не только Дарвин",
    "Как выбрать спелый арбуз"
  ];

  return (
    <div className="search-bar_section">
      <SearchFilters setSelectFiler={setSelectFiler} selectFiler={selectFiler} filtersList={filtersList} />
      <SearchField setSearchQuery={setSearchQuery} />
      <RandomPhrase randomPhraseList={randomPhraseList} />
    </div>
  );
};
