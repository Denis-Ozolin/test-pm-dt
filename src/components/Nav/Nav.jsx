import css from './Nav.module.css';

function Nav() {
  return (
    <nav className={css.nav}>
      <ul className={css.categoryList}>
        <li className={css.categoryItem}>Соискатель</li>
        <li className={css.categoryItem}>Работодатель</li>
        <li className={css.categoryItem}>HR</li>
      </ul>
    </nav>
  )
}

export default Nav;