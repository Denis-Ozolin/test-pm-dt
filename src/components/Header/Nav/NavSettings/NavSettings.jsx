import LangList from './LangList';
import css from './NavSettings.module.css';

function NavSettings() {
  return (
    <>
      <div className={css.container}>
        <LangList />
      </div>
      <span className={css.auth}>Войти</span>
    </>
  );
}

export default NavSettings;
