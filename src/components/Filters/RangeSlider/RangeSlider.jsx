import css from './RangeSlider.module.css';
import sprite from '../../../images/svg/sprite.svg';

function RangeSlider({ min, max, units }) {
  return (
    <>
      <div className={css.slider}>
        <div className={css.minMarker}></div>
        <div className={css.line}></div>
        <div className={css.maxMarker}></div>
      </div>
      <div className={css.amount}>
        <span className={css.text}>от</span>
        <span className={`${css.number} ${css.min}`}>{min}</span>
        <span className={css.text}>до</span>
        <span className={css.number}>{max}</span>
        <span className={css.text}>{units}</span>
        {units !== 'лет' && (
          <svg width="24" height="24">
            <use href={`${sprite}#arrow-down`}></use>
          </svg>
        )}
      </div>
    </>
  );
}

export default RangeSlider;
