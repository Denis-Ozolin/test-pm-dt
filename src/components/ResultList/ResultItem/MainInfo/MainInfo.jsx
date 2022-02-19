import css from './MainInfo.module.css';
import sprite from '../../../../images/svg/sprite.svg';

function MainInfo() {
  return (
    <div className={css.mainInfo}>
      <h4 className={css.title}>Продавец - консультант</h4>
      <div className={css.personalInfo}>
        <p className={css.info}>Дмитрий, 23 года</p>
        <div className={css.location}>
          <svg width="24" height="25">
            <use href={`${sprite}#location`}></use>
          </svg>
          <p className={css.locationName}>Kyiv, Ukraine</p>
        </div>
      </div>
    </div>
  );
}

export default MainInfo;
