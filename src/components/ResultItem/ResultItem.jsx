import css from './ResultItem.module.css';

const jobs = ['Координатор BALOX Agency - 4 мес.', 'Оператор кол центра в DELTA - 11 мес.'];

function ResultItem({ result }) {
  return (
    <div className={css.card}>
      <div className={css.mainInfo}>
        <div className={css.avatar}></div>
        <div>
          <h4 className={css.title}>Продавец - консультант</h4>
          <p className={css.info}>Дмитрий, 23 года</p>
          <p className={css.location}>Kyiv, Ukraine</p>
        </div>
      </div>
      <ul className={css.jobList}>
        {jobs.map(job => (
          <li key={job} className={css.job}>
            {job}
          </li>
        ))}
      </ul>
      <div className={css.flag}>
        <div className={css.flagStatus}></div>
        <span className={css.flagTitle}>Онлайн</span>
      </div>
      <div className={css.navigation}>
        <p className={css.updateTime}>Обновлено 9 минут назад</p>
        <div className={css.settings}>
          <div className={css.button}>LK</div>
          <div className={css.button}>ST</div>
        </div>
      </div>
    </div>
  );
}

export default ResultItem;
