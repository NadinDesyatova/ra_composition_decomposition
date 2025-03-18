// отвечает за отображение курса одной валюты

type CurrencyRateItemProps = {
  name: string,
  value: number
};
  
export const CurrencyRateItem = ({ name, value }: CurrencyRateItemProps) => {
  return (
    <li className="currency-body">
      <span className="currency-name">{name}</span>
      <span className="currency-value">{value}</span>
    </li>
  );
};
