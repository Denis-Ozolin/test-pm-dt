import ResultItem from './ResultItem';
import css from './ResultList.module.css';

function ResultList({ summaries }) {
  return (
    <ul className={css.list}>
      {summaries.map(summary => (
        <li className={css.listItem} key={summary.id}>
          <ResultItem summary={summary} />
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
