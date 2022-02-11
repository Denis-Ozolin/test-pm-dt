import Nav from '../Nav/Nav';
import SearchBar from '../SearchBar/SearchBar';
import css from './Header.module.css';

function Header () {
  return(
    <header className={css.header}>
      <Nav/>
      <SearchBar/>
    </header>
  )
}

export default Header;