// отвечает за отображение поискового поля и взаимодействие с ним

import { ChangeEvent, FormEvent } from "react";

type SearchFieldProps = {
  setSearchQuery: (value: string) => void,
};

export const SearchField = ({setSearchQuery}: SearchFieldProps) => {
  let searchValue = "";

  const handlerOnChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    searchValue = target.value;
  };

  const handlerSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchQuery(searchValue);
  };

  return (
    <form className="search-field" onSubmit={handlerSubmit}>
      <input type="text" onChange={handlerOnChange}/>
      <button type="submit">Найти</button>
    </form>
  );
};
