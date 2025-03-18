// отображение списка главных новостей по выбранной категории

import { MainNewsItem } from "./MainNewsItem";

type MainNewsListProps = {
  listNews: Array<{
    text: string, 
    picture: {type: string, color: string}, 
    link: string
  }>
};

export const MainNewsList = ({listNews}: MainNewsListProps) => {
  return (
    <>
      {listNews.map((elem, i) => <MainNewsItem picture={elem.picture} text={elem.text} link={elem.link} key={i} />)}
    </>
  );
};
