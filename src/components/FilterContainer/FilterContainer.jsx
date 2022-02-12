import Toggler from '../Toggler';
import FilterItem from '../FilterItem';
import titles from '../../settings/filterTitles.json';
import css from './FilterContainer.module.css';

function FilterContainer() {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <button className={css.closeBtn}>X</button>
        <span className={css.title}>Фильтры</span>
        <Toggler title="Только с фотографией" />
        <ul>
          {titles.map(({ id, name }) => (
            <li key={id} className={css.item}>
              <FilterItem title={name} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default FilterContainer;
