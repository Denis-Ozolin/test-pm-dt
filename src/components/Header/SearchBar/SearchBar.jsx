import css from './SearchBar.module.css';

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
      <input className={css.input} type="text" placeholder={defaultValue.query} />
      <input className={css.input} type="text" placeholder={defaultValue.city} />
      <button className={css.button}>{defaultValue.buttonValue}</button>
    </form>
  );
}

export default SearchBar;
