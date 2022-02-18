import FilterButton from '../FilterButton';
import css from './ResultHeader.module.css';
import sprite from '../../images/svg/sprite.svg';

function SearchResult({ toggleFilter }) {
  return (
    <div className={css.result}>
      <p className={css.title}>
        Мы подобрали <span className={css.number}>451 642</span> резюме
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
          <FilterButton toggleFilter={toggleFilter} />
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
