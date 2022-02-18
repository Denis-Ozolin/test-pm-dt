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
    <div className={css.select}>
      <div onClick={() => handleOpen()} className={css.item}>
        <svg className={css.iconInternet} width="24" height="24">
          <use href={`${sprite}#internet`}></use>
        </svg>
        <p className={css.language}>{firsLang}</p>
        <svg className={isOpen ? css.up : null} width="24" height="21">
          <use href={`${sprite}#arrow-right-lang`}></use>
        </svg>
      </div>
      {isOpen && (
        <div onClick={() => handelChange()} className={`${css.item} ${css.drop}`}>
          <p className={css.language}>{twoLang}</p>
        </div>
      )}
    </div>
  );
}

export default LangList;
