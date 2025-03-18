// показывает случайную фразу и подпись "Найдётся всё"

type RandomPhraseProps = {
  randomPhraseList: Array<string>
};
  
export const RandomPhrase = ({randomPhraseList}: RandomPhraseProps) => { 
  const randomIdPhrase = Math.floor(Math.random() * randomPhraseList.length);
  return <div key={randomIdPhrase}>Найдётся всё. Например: {randomPhraseList[randomIdPhrase]}</div>;
};
  