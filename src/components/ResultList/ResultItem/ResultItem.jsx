import CardSettings from './CardSettings';
import StatusBar from './StatusBar';
import css from './ResultItem.module.css';
import sprite from '../../../images/svg/sprite.svg';

const jobs = ['Координатор BALOX Agency - 4 мес.', 'Оператор кол центра в DELTA - 11 мес.'];

function ResultItem({ result }) {
  return (
    <div className={css.card}>
      <div className={css.container}>
        <div className={css.avatar}></div>
        <div className={css.mainInfo}>
          <h4 className={css.title}>Продавец - консультант</h4>
          <div className={css.personalInfo}>
            <p className={css.info}>Дмитрий, 23 года</p>
            <div className={css.location}>
              <svg className={css.locationIcon} width="24" height="25">
                <use href={`${sprite}#location`}></use>
              </svg>
              <p className={css.locationName}>Kyiv, Ukraine</p>
            </div>
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
      <div className={css.settingsBar}>
        <StatusBar />
        <div className={css.navigation}>
          <CardSettings />
        </div>
      </div>
    </div>
  );
}

export default ResultItem;
