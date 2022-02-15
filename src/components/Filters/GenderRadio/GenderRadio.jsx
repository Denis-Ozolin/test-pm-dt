import css from './GenderRadio.module.css';

function GenderRadio() {
  return (
    <div className={css.container}>
      <input type="radio" defaultChecked className={css.radio} name="gender" id="any" />
      <label htmlFor="any" className={css.button}>
        Любой
      </label>
      <input type="radio" className={css.radio} name="gender" id="woman" />
      <label htmlFor="woman" className={css.button}>
        Женщины
      </label>
      <input type="radio" className={css.radio} name="gender" id="man" />
      <label htmlFor="man" className={css.button}>
        Мужчины
      </label>
    </div>
  );
}

export default GenderRadio;
