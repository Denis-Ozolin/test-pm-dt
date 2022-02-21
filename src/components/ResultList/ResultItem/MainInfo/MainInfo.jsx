import css from './MainInfo.module.css';
import sprite from '../../../../images/svg/sprite.svg';

function MainInfo({ summary }) {
  const { first_name, hits, another_city } = summary;

  return (
    <div className={css.mainInfo}>
      <h4 className={css.title}>Продавец - консультант</h4>
      <div className={css.personalInfo}>
        <p className={css.info}>
          {first_name ? first_name : 'User'}, age {hits}
        </p>
        <div className={css.location}>
          <svg width="24" height="25">
            <use href={`${sprite}#location`}></use>
          </svg>
          <p className={css.locationName}>{another_city ? 'Another City' : 'Kyiv, Ukraine'}</p>
        </div>
      </div>
    </div>
  );
}

export default MainInfo;
