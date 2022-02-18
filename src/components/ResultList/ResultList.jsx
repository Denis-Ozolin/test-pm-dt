import ResultItem from './ResultItem';
import css from './ResultList.module.css';

function ResultList() {
  const results = ['Mike', 'John', 'Bill'];
  return (
    <ul className={css.list}>
      {results.map(result => (
        <li key={result}>
          <ResultItem result={result} />
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
