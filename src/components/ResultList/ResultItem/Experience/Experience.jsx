import css from './Experience.module.css';

function Experience({ jobs }) {
  return (
    <ul className={css.jobList}>
      {jobs.map(job => (
        <li key={job} className={css.job}>
          {job}
        </li>
      ))}
    </ul>
  );
}

export default Experience;
