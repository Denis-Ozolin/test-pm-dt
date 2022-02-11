import css from './ResultItem.module.css';

function ResultItem({result}) {
  return(
    <div className={css.card}>   
      <div className={css.avatar}></div>
      <div>
        <h4>Продавец - консультант</h4>
        <p>{result}</p>
      </div>
    </div>
  )
}

export default ResultItem;