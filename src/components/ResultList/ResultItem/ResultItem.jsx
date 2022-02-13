import css from './ResultItem.module.css';
import sprite from '../../../images/svg/sprite.svg';

const jobs = ['Координатор BALOX Agency - 4 мес.', 'Оператор кол центра в DELTA - 11 мес.'];

function ResultItem({ result }) {
  return (
    <div className={css.card}>
      <div className={css.mainInfo}>
        <div className={css.avatar}></div>
        <div>
          <h4 className={css.title}>Продавец - консультант</h4>
          <p className={css.info}>Дмитрий, 23 года</p>
          <div className={css.location}>
            <svg width="24" height="25">
              <use href={`${sprite}#location`}></use>
            </svg>
            <p>Kyiv, Ukraine</p>
          </div>
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
          <div className={css.iconContainer}>
            <svg width="25" height="24">
              <use href={`${sprite}#heart`}></use>
            </svg>
          </div>
          <div className={css.iconContainer}>
            <svg width="25" height="24">
              <use href={`${sprite}#settings`}></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultItem;
