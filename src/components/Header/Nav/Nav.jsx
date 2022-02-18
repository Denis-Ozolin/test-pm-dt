import NavBar from './NavBar';
import NavSettings from './NavSettings';
import categories from '../../../settings/navCategories.json';
import css from './Nav.module.css';

function Nav() {
  return (
    <nav className={css.nav}>
      <NavBar categories={categories} />
      <NavSettings />
    </nav>
  );
}

export default Nav;
