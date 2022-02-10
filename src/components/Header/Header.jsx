import Nav from '../Nav/Nav';
import css from './Header.module.css';

function Header () {
  return(
    <header className={css.header}>
      <Nav/>
    </header>
  )
}

export default Header;