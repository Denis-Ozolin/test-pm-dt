import css from './User.module.css';
import sprite from '../../../images/svg/sprite.svg';

function User({ name }) {
  return (
    <div className={css.user}>
      <svg className={css.avatar} width="25" height="24">
        <use href={`${sprite}#user`}></use>
      </svg>
      <span className={css.name}>{name}</span>
    </div>
  );
}

export default User;
