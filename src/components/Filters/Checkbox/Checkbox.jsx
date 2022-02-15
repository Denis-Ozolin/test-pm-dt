import { useState } from 'react';
import RadioList from '../RadioList';
import css from './Checkbox.module.css';

function Checkbox({ options, gradeList = null }) {
  const [checked, setChecked] = useState(false);

  return (
    <ul className={css.container}>
      {options.map(({ id, name, value }) => (
        <li key={id} className={css.item}>
          <label className={css.label} htmlFor={name}>
            <input
              onChange={() => setChecked(!checked)}
              className={css.input}
              type="checkbox"
              name="group"
              id={name}
            />
            <span className={css.checkbox}></span>
            {name}
          </label>
          <span className={css.value}>{value}</span>
          {gradeList && checked && <RadioList gradeList={gradeList} />}
        </li>
      ))}
    </ul>
  );
}

export default Checkbox;
