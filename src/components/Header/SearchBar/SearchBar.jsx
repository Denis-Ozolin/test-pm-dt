import { useSelector } from 'react-redux';
import { defaultContent } from './defaultContent';
import css from './SearchBar.module.css';
import sprite from '../../../images/svg/sprite.svg';

function SearchBar() {
  const deviceWidth = useSelector(state => state.deviceSize.width);
  const { mobileQuery, desktopQuery, city, buttonValue } = defaultContent;
  const placeholder = deviceWidth < 1240 ? mobileQuery : desktopQuery;

  const onSubmit = e => {
    e.preventDefault();
    e.target.reset();
    return;
  };

  return (
    <form onSubmit={e => onSubmit(e)} className={css.form}>
      <label className={css.label}>
        <svg width="24" height="24">
          <use href={`${sprite}#zoom`}></use>
        </svg>
        <input className={css.input} type="text" placeholder={placeholder} />
      </label>
      <label className={css.label}>
        <svg width="24" height="24">
          <use href={`${sprite}#location-white`}></use>
        </svg>
        <input className={css.input} type="text" placeholder={city} />
      </label>
      <button className={css.button}>{buttonValue}</button>
    </form>
  );
}

export default SearchBar;
