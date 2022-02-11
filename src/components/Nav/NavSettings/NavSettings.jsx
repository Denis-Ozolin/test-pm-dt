import css from './NavSettings.module.css';

function NavSettings () {
  return(
    <>
      <div className={css.language}>RU</div>
      <span className={css.auth}>Войти</span>
    </>
  )
}

export default NavSettings;