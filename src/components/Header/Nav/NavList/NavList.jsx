import css from './NavList.module.css';

function NavList({ categories }) {
  return (
    <>
      <ul className={css.categoryList}>
        {categories.map(({ id, name }) => (
          <li key={id} className={css.categoryItem}>
            {name}
          </li>
        ))}
      </ul>
      <select name="select" className={css.select}>
        {categories.map(({ id, name }) => (
          <option key={id} value={name}>
            {name}
          </option>
        ))}
      </select>
    </>
  );
}

export default NavList;
