import SwitchControl from './SwitchControl';
import css from './Toggler.module.css';
import sprite from '../../../images/svg/sprite.svg';

function Toggler({ title = '', icon = null, role = null }) {
  return (
    <div className={css.toggleContainer}>
      {icon && (
        <div className={css.icon}>
          <svg width="24" height="24">
            <use href={`${sprite}#${icon}`}></use>
          </svg>
        </div>
      )}
      <span className={css.title}>{title}</span>
      <SwitchControl role={role} />
    </div>
  );
}

export default Toggler;
