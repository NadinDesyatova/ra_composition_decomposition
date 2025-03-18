// отображает фильтры новостей и отвечает за взаимодействие с ними

import React from "react";

type MainNewsFiltersProps = {
  listFilters: Array<string>,
  changeFilter: React.Dispatch<React.SetStateAction<EventTarget | undefined>>,
  selectetedFilter: EventTarget | undefined
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
      (selectetedFilter as HTMLElement).classList.remove("select");
    }
  };

  return (
    <ul className="main-news_filters">
      {listFilters.map((elem, i) => (
        <li key={i} className="filter-name" onClick={handlerClick}>
          {elem}
        </li>
      ))}
    </ul>
  );
};
