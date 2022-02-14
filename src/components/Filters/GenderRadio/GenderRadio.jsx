import css from './GenderRadio.module.css';

function GenderRadio() {
  return (
    <div className={css.container}>
      <input type="radio" defaultChecked className={css.radio} name="gender" id="any" />
      <label htmlFor="any" className={css.button}>
        Любой
      </label>
      <input type="radio" className={css.radio} name="gender" id="women" />
      <label htmlFor="women" className={css.button}>
        Женщины
      </label>
      <input type="radio" className={css.radio} name="gender" id="men" />
      <label htmlFor="men" className={css.button}>
        Мужчины
      </label>
    </div>
  );
}

export default GenderRadio;
