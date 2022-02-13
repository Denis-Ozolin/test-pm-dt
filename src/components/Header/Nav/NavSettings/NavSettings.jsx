import css from './NavSettings.module.css';
import sprite from '../../../../images/svg/sprite.svg';

function NavSettings() {
  return (
    <>
      <div className={css.container}>
        <svg width="24" height="21">
          <use href={`${sprite}#internet`}></use>
        </svg>
        <p className={css.language}>RU</p>
        <svg width="24" height="21">
          <use href={`${sprite}#arrow-right-lang`}></use>
        </svg>
      </div>
      <span className={css.auth}>Войти</span>
    </>
  );
}

export default NavSettings;
