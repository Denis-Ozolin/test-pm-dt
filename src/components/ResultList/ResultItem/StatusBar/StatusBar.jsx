import css from './StatusBar.module.css';

function StatusBar() {
  return (
    <div className={css.statusInfo}>
      <div className={css.status}>
        <span className={css.statusIcon}></span>
        Онлайн
      </div>
      <div className={css.settingsBar}>
        <p className={css.statusTime}>Обновлено 9 минут назад</p>
      </div>
    </div>
  );
}

export default StatusBar;
