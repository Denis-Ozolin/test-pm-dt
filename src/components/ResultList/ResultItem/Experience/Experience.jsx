import css from './Experience.module.css';
import formatData from '../../../../helpers/formatData';

function Experience({ jobs }) {
  return (
    <ul className={css.jobList}>
      {jobs.length ? (
        jobs.map(job => (
          <li key={job.id} className={css.job}>
            {job.company_name} - {formatData(job.date_from, job.date_to)}
          </li>
        ))
      ) : (
        <li className={css.job}>No work experience</li>
      )}
    </ul>
  );
}

export default Experience;
