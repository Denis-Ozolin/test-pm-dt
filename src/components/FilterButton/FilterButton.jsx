import { useDispatch } from 'react-redux';
import { isShowingFilter } from '../../store/showFilterSlice';
import css from './FilterButton.module.css';
import sprite from '../../images/svg/sprite.svg';

function FilterButton() {
  const dispatch = useDispatch();
  return (
    <div onClick={() => dispatch(isShowingFilter(true))} className={css.setting}>
      <svg className={css.icon} width="48" height="48">
        <use href={`${sprite}#filter`}></use>
      </svg>
    </div>
  );
}

export default FilterButton;
