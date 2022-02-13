import css from './Copyright.module.css';

function Copyright() {
  return (
    <section className={css.section}>
      <span className={css.info}>Privacy Policy</span>
      <span className={css.info}>Terms of Use</span>
      <p className={css.copyright}>© 2021 All rights reserved</p>
    </section>
  );
}

export default Copyright;
