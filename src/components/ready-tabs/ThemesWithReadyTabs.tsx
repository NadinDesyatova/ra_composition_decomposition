// отвечает за отображение нескольких тем с поисковыми запросами/информацией по каждой теме

import { ThemeWithReadyTabs } from "./ThemeWithReadyTabs";

export const ThemesWithReadyTabs = () => {
  const content = [
    {
      type: "Погода",
      children: (
        <>
          <p>Утром +6</p>
          <p>Вечером +3</p>
        </>
      ),
    },
    {
      type: "Посещаемое",
      children: (
        <>
          <p>Кристофер Нолан - от худщего к лучшему</p>
          <p>Тимоти Шаламе - рок-звезда</p>
        </>
      ),
    },
    {
      type: "Путешествия",
      children: (
        <>
          <p>Города</p>
        </>
      ),
    },
    {
      type: "События",
      children: (
        <>
          <ul>
            <li key={0}>Пн, 18:00 Небесный замок Лапута</li>
            <li key={1}>Вт, 17:00 Сад изящных слов</li>
            <li key={2}>Ср, 16:00 Унесенные призраками</li>
          </ul>
        </>
      ),
    },
    {
      type: "Интересное",
      children: (
        <>
          <p>Кто вы из "Гарри Поттера"?</p>
          <p>Соевые палочки: что это такое, из чего на самом деле состоят и почему их массово скупают школьники</p>
        </>
      ),
    },
  ];

  return (
    <div className="themes_section">
      {content.map((elem, i) => (
        <ThemeWithReadyTabs type={elem.type} key={i}>{elem.children}</ThemeWithReadyTabs>
      ))}
    </div>
  );
};
