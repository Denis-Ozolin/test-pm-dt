import { useState } from 'react';
import RadioList from '../RadioList';
import { getUniqValue, getFilteredArray } from '../../../helpers/filtersCheckList';
import css from './Checkbox.module.css';
import sprite from '../../../images/svg/sprite.svg';

function Checkbox({ options, gradeList = null }) {
  const [checkedList, setCheckedList] = useState([]);

  const drop = e => {
    if (gradeList && e.target.checked) {
      const uniqList = getUniqValue([...checkedList, e.target.id]);
      setCheckedList(uniqList);
      return;
    }
    if (gradeList && !e.target.checked) {
      const filteredList = getFilteredArray(checkedList, e.target.id);
      setCheckedList(filteredList);
      return;
    }
    return;
  };

  return (
    <ul className={css.container}>
      {options.map(({ id, name, value, icon }) => (
        <li key={id} className={css.item}>
          <label className={css.label} htmlFor={name}>
            <input
              onChange={e => drop(e)}
              className={css.input}
              type="checkbox"
              name="group"
              id={name}
            />
            <span className={css.checkbox}></span>
            {gradeList && (
              <svg className={css.icon} width="24" height="24">
                <use href={`${sprite}#${icon}`}></use>
              </svg>
            )}
            {name}
          </label>
          <span className={css.value}>{value}</span>
          {gradeList && (
            <svg
              className={checkedList.includes(name) ? `${css.up} ${css.arrow}` : css.arrow}
              width="24"
              height="24"
            >
              <use href={`${sprite}#arrow-down`}></use>
            </svg>
          )}
          {gradeList && checkedList.includes(name) && <RadioList gradeList={gradeList} />}
        </li>
      ))}
    </ul>
  );
}

export default Checkbox;
