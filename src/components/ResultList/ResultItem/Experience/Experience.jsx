import css from './Experience.module.css';
import formatData from '../../../../helpers/formatData';

function Experience({ workList }) {
  return (
    <ul className={css.jobList}>
      {workList.length ? (
        workList.map(({ id, company_name, date_from, date_to }) => (
          <li key={id} className={css.job}>
            {company_name} - {formatData(date_from, date_to)}
          </li>
        ))
      ) : (
        <li className={css.job}>No work experience</li>
      )}
    </ul>
  );
}

export default Experience;
