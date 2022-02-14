import css from './ViewContainer.module.css';

function ViewContainer({ children }) {
  return (
    <section className={css.wrapper}>
      <div className={css.container}>{children}</div>
    </section>
  );
}

export default ViewContainer;
