// отвечает за отображение фильтров над поисковой строкой и взаимодействие с ними

import React from "react";

type SearchFiltersProps = {
  setSelectFilter: (React.Dispatch<React.SetStateAction<EventTarget | undefined>>),
  selectFilter: EventTarget | undefined,
  filtersList: Array<string>
};

export const SearchFilters = ({
  setSelectFilter,
  selectFilter,
  filtersList,
}: SearchFiltersProps) => {
  const handlerClick = ({ target }: React.MouseEvent<HTMLElement>) => {
    setSelectFilter(target);
    (target as HTMLElement).classList.add("select");
    if (selectFilter !== undefined) {
      (selectFilter as HTMLElement).classList.remove("select");
    }
  };

  return (
    <ul className="search-filters_list">
      {filtersList.map((elem, i) => (
        <li className="search-filter_list-item" onClick={handlerClick} key={i}>
          {elem}
        </li>
      ))}
    </ul>
  );
};
