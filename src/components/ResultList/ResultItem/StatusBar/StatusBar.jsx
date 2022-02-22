import getTimeDifference from '../../../../helpers/getTimeDifference';
import CardSettings from '../CardSettings';
import css from './StatusBar.module.css';

function StatusBar({ options, updateTime }) {
  return (
    <div className={css.statusInfo}>
      <div className={css.statusContainer}>
        <span className={css.statusIcon}></span>
        <span className={css.status}>Онлайн</span>
      </div>
      <div className={css.settingsBar}>
        <p className={css.statusTime}>Обновлено {getTimeDifference(updateTime)} дней назад</p>
        <CardSettings options={options} />
      </div>
    </div>
  );
}

export default StatusBar;
