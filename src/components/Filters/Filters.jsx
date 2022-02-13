import RangeSlider from './RangeSlider';
import GenderRadio from './GenderRadio';
import Toggler from './Toggler';
import css from './Filters.module.css';

function Filters({ title }) {
  return (
    <div className={css.container}>
      <p className={css.title}>{title}</p>
      {title === 'Возраст' && <RangeSlider min={18} max={40} units="лет" />}
      {title === 'Пол' && <GenderRadio />}
      {title === 'Желаемая зарплата' && (
        <>
          <RangeSlider min={1000} max={1000} units="грн" />
          <Toggler title="Не показывать без зарплаты" role="switchSalaryOn" />
        </>
      )}
      {title === 'Опыт работы' && (
        <Toggler title="Только студенты" icon="mortarboard" role="switchStudentsOnly" />
      )}
      {title === 'Владение языками' && <span>В</span>}
      {title === 'Тип занятости' && <span>Т</span>}
      {title === 'Образование' && <span>Об</span>}
    </div>
  );
}

export default Filters;
