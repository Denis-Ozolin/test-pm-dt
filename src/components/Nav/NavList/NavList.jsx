import css from './NavList.module.css';

function NavList({categories}) {
  return (
    <ul className={css.categoryList}>
      {categories.map(({id, name}) => 
        <li key={id} className={css.categoryItem}>
          {name}
        </li>
      )}
    </ul>
  )
}

export default NavList;