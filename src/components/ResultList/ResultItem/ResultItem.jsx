import MainInfo from './MainInfo';
import Experience from './Experience';
import StatusBar from './StatusBar';
// import CardSettings from './CardSettings';
import options from '../../../settings/cardOptions.json';
import css from './ResultItem.module.css';

const jobs = ['Координатор BALOX Agency - 4 мес.', 'Оператор кол центра в DELTA - 11 мес.'];

function ResultItem({ result }) {
  return (
    <div className={css.card}>
      <div className={css.avatar}></div>
      <div className={css.container}>
        <MainInfo />
        <div className={css.content}>
          <Experience jobs={jobs} />
          <StatusBar options={options} />
          {/* <CardSettings options={options}/> */}
        </div>
      </div>
    </div>
  );
}

export default ResultItem;
