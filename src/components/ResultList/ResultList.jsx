import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { filteredPhotoOn } from '../../helpers/filterCardList';
import ResultItem from './ResultItem';
import css from './ResultList.module.css';

function ResultList() {
  const summaries = useSelector(state => state.summaries.summaries);
  const photoOn = useSelector(state => state.summaries.photo);

  const filteredList = photoOn ? filteredPhotoOn(summaries) : summaries;

  useEffect(() => {
    if (!filteredList.length) {
      return;
    }
  }, [filteredList]);

  return (
    <ul className={css.list}>
      {filteredList.map(summary => (
        <li className={css.listItem} key={summary.id}>
          <ResultItem summary={summary} />
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
