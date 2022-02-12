import Nav from '../Nav/Nav';
import User from '../User';
import SearchBar from '../SearchBar/SearchBar';
import css from './Header.module.css';

function Header() {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <Nav />
        <User name="Юра Марченко" />
        <SearchBar />
      </div>
    </header>
  );
}

export default Header;
