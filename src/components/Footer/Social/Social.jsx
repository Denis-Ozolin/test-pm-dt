import css from './Social.module.css';
import sprite from '../../../images/svg/sprite.svg';

function Social() {
  return (
    <div className={css.social}>
      <a className={css.link} href="https://twitter.com">
        <div className={css.img}>
          <svg width="25" height="24">
            <use href={`${sprite}#twitter`}></use>
          </svg>
        </div>
      </a>
      <a className={css.link} href="https://www.linkedin.com">
        <div className={css.img}>
          <svg width="25" height="24">
            <use href={`${sprite}#linkedin`}></use>
          </svg>
        </div>
      </a>
      <a className={css.link} href="https://www.facebook.com">
        <div className={css.img}>
          <svg width="25" height="24">
            <use href={`${sprite}#facebook`}></use>
          </svg>
        </div>
      </a>
      <a className={css.link} href="https://www.instagram.com">
        <div className={css.img}>
          <svg width="25" height="24">
            <use href={`${sprite}#instagram`}></use>
          </svg>
        </div>
      </a>
      <a className={css.link} href="https://www.youtube.com">
        <div className={css.img}>
          <svg width="25" height="24">
            <use href={`${sprite}#youtube`}></use>
          </svg>
        </div>
      </a>
      <a className={css.link} href="https://www.whatsapp.com">
        <div className={css.img}>
          <svg width="25" height="24">
            <use href={`${sprite}#whatsapp`}></use>
          </svg>
        </div>
      </a>
    </div>
  );
}

export default Social;
