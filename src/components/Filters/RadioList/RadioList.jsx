import css from './RadioList.module.css';

function RadioList({ gradeList }) {
  return (
    <ul className={css.list}>
      {gradeList.map(({ id, name, value }) => (
        <li className={css.item} key={id}>
          <input className={css.radio} type="radio" id={name} name="group" />
          <label className={css.label} htmlFor={name}>
            {name}
          </label>
          <span className={css.value}>{value}</span>
        </li>
      ))}
    </ul>
  );
}

export default RadioList;
