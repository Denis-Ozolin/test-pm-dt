import css from './RadioList.module.css';

function RadioList({ gradeList }) {
  return (
    <ul className={css.list}>
      {gradeList.map(({ id, name }) => (
        <li className={css.item} key={id}>
          <label htmlFor={name}>
            <input type="radio" id={name} name="group" />
            {name}
          </label>
        </li>
      ))}
    </ul>
  );
}

export default RadioList;
