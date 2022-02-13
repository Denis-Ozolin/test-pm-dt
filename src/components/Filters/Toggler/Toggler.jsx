import css from './Toggler.module.css';

function Toggler({ title = '' }) {
  return (
    <div className={css.toggleContainer}>
      <div className={css.img}></div>
      <span className={css.title}>{title}</span>
      <div className={css.toggler}></div>
    </div>
  );
}

export default Toggler;
