import css from './SwitchControl.module.css';

function SwitchControl({ role }) {
  return (
    <div className={css.switchControl}>
      <input className={css.switchToggle} type="checkbox" name={role} id={role} />
      <label aria-hidden="true" className={css.switchTrack} htmlFor={role}></label>
      <div aria-hidden="true" className={css.switchMarker}></div>
    </div>
  );
}

export default SwitchControl;
