import { useState } from 'react';
import css from './CardSettings.module.css';
import sprite from '../../../../images/svg/sprite.svg';

function CardSettings() {
  const [options, setOptions] = useState(false);

  return (
    <div className={css.settings}>
      <div className={css.iconContainer}>
        <svg width="25" height="24">
          <use href={`${sprite}#heart`}></use>
        </svg>
      </div>
      {options && (
        <ul className={css.options}>
          <li className={css.option}>Пожаловаться</li>
          <li className={css.option}>Скрыть кандидата</li>
        </ul>
      )}
      <div onClick={() => setOptions(!options)} className={`${css.iconContainer} ${css.menu}`}>
        <svg width="25" height="24">
          <use href={`${sprite}#settings`}></use>
        </svg>
      </div>
    </div>
  );
}

export default CardSettings;
