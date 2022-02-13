import Toggler from '../Filters/Toggler';
import Filters from '../Filters';
import titles from '../../settings/filterTitles.json';
import css from './FilterContainer.module.css';
import sprite from '../../images/svg/sprite.svg';

function FilterContainer() {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <div className={css.closeBtn}>
          <svg width="24" height="24">
            <use href={`${sprite}#close`}></use>
          </svg>
        </div>
        <span className={css.title}>Фильтры</span>
        <Toggler title="Только с фотографией" />
        <ul>
          {titles.map(({ id, name }) => (
            <li key={id} className={css.item}>
              <Filters title={name} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default FilterContainer;
