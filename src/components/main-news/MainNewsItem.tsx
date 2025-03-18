// отображение одной новости

type MainNewsItemProps = {
  text: string,
  picture: {type: string, color: string},
  link: string
};
  
export const MainNewsItem = ({ text, picture, link }: MainNewsItemProps) => {
  return (
    <li className="news-item">
      <a className="news-body" href={link}>
        <div className="material-icons" style={{color: `${picture.color}`}}>{picture.type}</div>
        <p className="news-text">{text}</p>
      </a>
    </li>
  );
};
  