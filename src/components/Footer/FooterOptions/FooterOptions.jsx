import css from './FooterOptions.module.css';

function FooterOptions({ options = [] }) {
  return (
    <ul className={css.list}>
      {options.map(({ id, name }) => (
        <li key={id} className={css.item}>
          {name}
        </li>
      ))}
    </ul>
  );
}

export default FooterOptions;
