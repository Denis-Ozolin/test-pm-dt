import css from './Social.module.css';

function Social() {
  return (
    <div className={css.social}>
      <a className={css.link} href="https://twitter.com">
        <div className={css.img}></div>
      </a>
      <a className={css.link} href="https://www.linkedin.com">
        <div className={css.img}></div>
      </a>
      <a className={css.link} href="https://www.facebook.com">
        <div className={css.img}></div>
      </a>
      <a className={css.link} href="https://www.instagram.com">
        <div className={css.img}></div>
      </a>
      <a className={css.link} href="https://www.youtube.com">
        <div className={css.img}></div>
      </a>
      <a className={css.link} href="https://vk.com">
        <div className={css.img}></div>
      </a>
    </div>
  );
}

export default Social;
