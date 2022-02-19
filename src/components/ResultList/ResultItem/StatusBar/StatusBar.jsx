import CardSettings from '../CardSettings';
import css from './StatusBar.module.css';

function StatusBar({ options }) {
  return (
    <div className={css.statusInfo}>
      <div className={css.statusContainer}>
        <span className={css.statusIcon}></span>
        <span className={css.status}>Онлайн</span>
      </div>
      <div className={css.settingsBar}>
        <p className={css.statusTime}>Обновлено 9 минут назад</p>
        <CardSettings options={options} />
      </div>
    </div>
  );
}

export default StatusBar;
