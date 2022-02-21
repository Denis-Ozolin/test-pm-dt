import MainInfo from './MainInfo';
import Experience from './Experience';
import StatusBar from './StatusBar';
import options from '../../../settings/cardOptions.json';
import css from './ResultItem.module.css';

function ResultItem({ summary }) {
  return (
    <div className={css.card}>
      <div className={css.avatar}>
        <img className={css.img} src={summary.photo} alt={summary.first_name} />
      </div>
      <div className={css.container}>
        <MainInfo summary={summary} />
        <div className={css.content}>
          <Experience jobs={summary.workexperience} />
          <StatusBar options={options} />
        </div>
      </div>
    </div>
  );
}

export default ResultItem;
