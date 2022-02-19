import { useState } from 'react';
import css from './CardSettings.module.css';
import sprite from '../../../../images/svg/sprite.svg';

function CardSettings({ options }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={css.settings}>
      <div className={css.iconContainer}>
        <svg width="25" height="24">
          <use href={`${sprite}#heart`}></use>
        </svg>
      </div>
      <div onClick={() => setIsOpen(!isOpen)} className={css.iconContainer}>
        <svg width="25" height="24">
          <use href={`${sprite}#settings`}></use>
        </svg>
      </div>
      {isOpen && (
        <ul className={css.options}>
          {options.map(({ id, name }) => (
            <li className={css.option} key={id}>
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CardSettings;
