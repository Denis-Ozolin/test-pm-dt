import css from './SearchResult.module.css';

function SearchResult() {
  return(
    <div className={css.result}>
      <p className={css.title}>
        Мы подобрали <span className={css.number}>451 642</span> резюме
      </p>
      <hr className={css.line}/>
      <p className={css.description}>Резюме продавец консультант во Всей Украине</p>
      <div className={css.options}>
        <div className={css.select}>За все время</div>
        <div className={css.setting}>SSS</div>
      </div>
    </div>
  )
}

export default SearchResult;