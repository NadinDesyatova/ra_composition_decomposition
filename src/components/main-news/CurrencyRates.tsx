// отображает курсы валют

import { CurrencyRateItem } from "./CurrencyRateItem";

type CurrencyRatesProps = {
  items: Array<{
    name: string,
    value: number
  }>;
}

export const CurrencyRates = ({ items }: CurrencyRatesProps) => {
  return (
    <ul className="currency_list">
      {items.map((elem, i) => (
        <CurrencyRateItem name={elem.name} value={elem.value} key={i}/>
      ))}
    </ul>
  );
};