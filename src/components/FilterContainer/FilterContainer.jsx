import { useDispatch } from 'react-redux';
import Toggler from '../Filters/Toggler';
import Filters from '../Filters';
import { togglePhoto } from '../../store/summarySlice';
import { isShowingFilter } from '../../store/showFilterSlice';
import titles from '../../settings/filterTitles.json';
import css from './FilterContainer.module.css';
import sprite from '../../images/svg/sprite.svg';

function FilterContainer() {
  const dispatch = useDispatch();

  return (
    <section className={css.section}>
      <div onClick={() => dispatch(isShowingFilter(false))} className={css.closeBtn}>
        <svg width="24" height="24">
          <use href={`${sprite}#close`}></use>
        </svg>
      </div>
      <span className={css.title}>Фильтры</span>
      <div className={css.toggleContainer}>
        <Toggler
          togglePhotoOn={togglePhoto}
          title="Только с фотографией"
          icon="person"
          role="switchPhotoOn"
        />
      </div>
      <ul>
        {titles.map(({ id, name }) => (
          <li key={id} className={css.item}>
            <Filters title={name} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FilterContainer;
