// отвечает за отображение фильтров над поисковой строкой и взаимодействие с ними

import React from "react";

type SearchFiltersProps = {
  setSelectFiler: (target: EventTarget) => void,
  selectFiler: HTMLElement | undefined,
  filtersList: Array<string>
};

export const SearchFilters = ({
  setSelectFiler,
  selectFiler,
  filtersList,
}: SearchFiltersProps) => {
  const handlerClick = ({ target }: React.MouseEvent<HTMLElement>) => {
    console.log(target, typeof setSelectFiler);
    setSelectFiler(target);
    (target as HTMLElement).classList.add("select");
    if (selectFiler !== undefined) {
      selectFiler.classList.remove("select");
    }
  };

  return (
    <ul className="search-filters_list">
      {filtersList.map((elem) => (
        <li className="search-filter_list-item" onClick={handlerClick} key={filtersList.indexOf(elem)}>
          {elem}
        </li>
      ))}
    </ul>
  );
};
