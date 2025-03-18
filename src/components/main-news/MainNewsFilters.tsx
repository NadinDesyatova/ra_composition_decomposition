// отображает фильтры новостей и отвечает за взаимодействие с ними

import React from "react";

type MainNewsFiltersProps = {
  listFilters: Array<string>,
  changeFilter: (target: EventTarget) => void,
  selectetedFilter: HTMLElement | undefined
};

export const MainNewsFilters = ({
  listFilters,
  changeFilter,
  selectetedFilter,
}: MainNewsFiltersProps) => {
  const handlerClick = ({ target }: React.MouseEvent<HTMLElement>) => {
    changeFilter(target);
    (target as HTMLElement).classList.add("select");
    if (selectetedFilter !== undefined) {
      selectetedFilter.classList.remove("select");
    }
  };

  return (
    <ul className="main-news_filters">
      {listFilters.map((elem) => (
        <li key={listFilters.indexOf(elem)} className="filter-name" onClick={handlerClick}>
          {elem}
        </li>
      ))}
    </ul>
  );
};
