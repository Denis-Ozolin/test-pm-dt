import { useSelector } from 'react-redux';
import FilterButton from '../FilterButton';
import css from './ResultHeader.module.css';
import sprite from '../../images/svg/sprite.svg';

function SearchResult() {
  const amountOfSummaries = useSelector(state => state.summaries.totalSummaries);

  return (
    <div className={css.result}>
      <p className={css.title}>
        Мы подобрали <span className={css.number}>{amountOfSummaries}</span> резюме
      </p>
      <hr className={css.line} />
      <div className={css.container}>
        <p className={css.description}>Резюме продавец консультант во Всей Украине</p>
        <div className={css.options}>
          <div className={css.select}>
            <span className={css.time}>За все время</span>
            <svg width="24" height="24">
              <use href={`${sprite}#arrow-down-blue`}></use>
            </svg>
          </div>
          <FilterButton />
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
