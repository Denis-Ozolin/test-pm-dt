import { useState } from 'react';
import css from './NavBar.module.css';
import sprite from '../../../../images/svg/sprite.svg';

function NavBar({ categories }) {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState('Соискатель');

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleGetValue = name => {
    setCurrent(name);
    setIsOpen(false);
  };

  return (
    <div className={css.droplist}>
      <div className={css.menu}>
        <span onClick={() => handleOpen()} className={css.current}>
          {current}
        </span>
        <svg width="24" height="24" stroke="#ffffff">
          <use href={`${sprite}#arrow-down`}></use>
        </svg>
      </div>
      {isOpen && (
        <ul className={css.list}>
          {categories.map(({ id, name }) => (
            <li onClick={() => handleGetValue(name)} className={css.listItem} key={id}>
              <span className={css.category}>{name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NavBar;
