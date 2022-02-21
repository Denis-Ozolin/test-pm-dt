import { useSelector, useDispatch } from 'react-redux';
import css from './SwitchControl.module.css';

function SwitchControl({ togglePhotoOn = null, role }) {
  const dispatch = useDispatch();
  const photoOn = useSelector(state => state.summaries.photo);

  return (
    <div className={css.switchControl}>
      <input
        onChange={e => dispatch(togglePhotoOn(e.target.checked))}
        className={css.switchToggle}
        type="checkbox"
        name={role}
        id={role}
        checked={togglePhotoOn && photoOn}
      />
      <label aria-hidden="true" className={css.switchTrack} htmlFor={role}></label>
      <div aria-hidden="true" className={css.switchMarker}></div>
    </div>
  );
}

export default SwitchControl;
