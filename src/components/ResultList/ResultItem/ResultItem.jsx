import MainInfo from './MainInfo';
import Experience from './Experience';
import StatusBar from './StatusBar';
import options from '../../../settings/cardOptions.json';
import css from './ResultItem.module.css';

function ResultItem({ summary }) {
  const { photo, first_name, workexperience } = summary;

  return (
    <div className={css.card}>
      <div className={css.avatar}>
        <img className={css.img} src={photo} alt={first_name} />
      </div>
      <div className={css.container}>
        <MainInfo summary={summary} />
        <div className={css.content}>
          <Experience workList={workexperience} />
          <StatusBar options={options} updateTime={summary.updated_at} />
        </div>
      </div>
    </div>
  );
}

export default ResultItem;
