import css from './RadioList.module.css';

function RadioList({ gradeList }) {
  return (
    <ul className={css.list}>
      {gradeList.map(({ id, name }) => (
        <li className={css.item} key={id}>
          <input type="radio" id={name} name="group" />
          <label className={css.label} htmlFor={name}>
            {name}
          </label>
          <span className={css.value}>63</span>
        </li>
      ))}
    </ul>
  );
}

export default RadioList;
