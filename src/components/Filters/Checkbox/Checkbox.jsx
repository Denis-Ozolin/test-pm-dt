import css from './Checkbox.module.css';

function Checkbox({ options }) {
  return (
    <ul className={css.container}>
      {options.map(({ id, name, value }) => (
        <li key={id} className={css.item}>
          <input className={css.input} type="checkbox" name="group" id={name} />
          <span className={css.Checkbox}></span>
          <label htmlFor={name}>{name}</label>
          <span className={css.value}>{value}</span>
        </li>
      ))}
    </ul>
  );
}

export default Checkbox;
