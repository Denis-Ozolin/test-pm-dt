import css from './SearchBar.module.css';
import sprite from '../../../images/svg/sprite.svg';

function SearchBar() {
  const defaultValue = {
    query: 'На какую должность вы ищете кандидата?',
    city: 'Город',
    buttonValue: 'Найти кандидатов',
  };

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
        <input className={css.input} type="text" placeholder={defaultValue.query} />
      </label>
      <label className={css.label}>
        <svg width="24" height="24">
          <use href={`${sprite}#location-white`}></use>
        </svg>
        <input className={css.input} type="text" placeholder={defaultValue.city} />
      </label>
      <button className={css.button}>{defaultValue.buttonValue}</button>
    </form>
  );
}

export default SearchBar;
