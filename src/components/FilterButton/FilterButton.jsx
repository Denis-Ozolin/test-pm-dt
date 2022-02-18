import css from './FilterButton.module.css';
import sprite from '../../images/svg/sprite.svg';

function FilterButton({ toggleFilter }) {
  return (
    <div onClick={() => toggleFilter()} className={css.setting}>
      <svg className={css.icon} width="48" height="48">
        <use href={`${sprite}#filter`}></use>
      </svg>
    </div>
  );
}

export default FilterButton;
