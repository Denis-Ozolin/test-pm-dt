import css from './SearchBar.module.css'

function SearchBar() {
  return (
    <form className={css.form}>
      <input className={css.input} type="text" placeholder='На какую должность вы ищите кандидата?'/>
      <input className={css.input} type="text" placeholder='Город'/>
      <button className={css.button}>Найти кандидатов</button>
    </form>
  )
}

export default SearchBar;