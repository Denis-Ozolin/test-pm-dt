import css from './GenderRadio.module.css';

function GenderRadio() {
  return (
    <div className={css.container}>
      <div className={`${css.button} ${css.active}`}>
        <span className={css.text}>Любой</span>
      </div>
      <div className={css.button}>
        <span className={css.text}>Женщины</span>
      </div>
      <div className={css.button}>
        <span className={css.text}>Мужчины</span>
      </div>
    </div>
  );
}

export default GenderRadio;
