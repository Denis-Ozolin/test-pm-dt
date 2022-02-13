import css from './SearchResult.module.css';
import sprite from '../../images/svg/sprite.svg';

function SearchResult() {
  return (
    <div className={css.result}>
      <p className={css.title}>
        Мы подобрали <span className={css.number}>451 642</span> резюме
      </p>
      <hr className={css.line} />
      <p className={css.description}>Резюме продавец консультант во Всей Украине</p>
      <div className={css.options}>
        <div className={css.select}>
          <span className={css.title}>За все время</span>
          <svg width="24" height="24">
            <use href={`${sprite}#arrow-down-blue`}></use>
          </svg>
        </div>
        <div className={css.setting}>
          <svg width="48" height="48">
            <use href={`${sprite}#filter`}></use>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
