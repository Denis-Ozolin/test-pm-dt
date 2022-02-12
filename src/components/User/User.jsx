import css from './User.module.css';

function User({ name }) {
  return (
    <div className={css.user}>
      <div className={css.avatar}></div>
      <span className={css.name}>{name}</span>
    </div>
  );
}

export default User;
