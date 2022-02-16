import { useState } from 'react';
import css from './LangList.module.css';
import sprite from '../../../../../images/svg/sprite.svg';

function LangList() {
  const [isOpen, setIsOpen] = useState(false);
  const [firsLang, setFirstLeng] = useState('RU');
  const [twoLang, setTwoLeng] = useState('EN');

  const handleOpen = () => {
    if (isOpen === true) {
      setIsOpen(false);
      return;
    }
    setIsOpen(true);
  };
  const handelChange = () => {
    if (firsLang === 'RU') {
      setFirstLeng('EN');
      setTwoLeng('RU');
      setIsOpen(false);
    }
    if (firsLang === 'EN') {
      setFirstLeng('RU');
      setTwoLeng('EN');
      setIsOpen(false);
    }
    return;
  };
  return (
    <ul className={css.select}>
      <li onClick={() => handleOpen()} className={css.item}>
        <svg width="24" height="24">
          <use href={`${sprite}#internet`}></use>
        </svg>
        <p className={css.language}>{firsLang}</p>
        <svg className={isOpen ? css.up : null} width="24" height="21">
          <use href={`${sprite}#arrow-right-lang`}></use>
        </svg>
      </li>
      {isOpen && (
        <li onClick={() => handelChange()} className={`${css.item} ${css.drop}`}>
          <p className={css.language}>{twoLang}</p>
        </li>
      )}
    </ul>
  );
}

export default LangList;
