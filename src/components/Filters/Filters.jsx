import RangeSlider from './RangeSlider';
import GenderRadio from './GenderRadio';
import Toggler from './Toggler';
import Checkbox from './Checkbox';
import experience from '../../settings/experience.json';
import languageSkills from '../../settings/languageSkills.json';
import employmentType from '../../settings/employmentType.json';
import education from '../../settings/education.json';
import languageLevel from '../../settings/languageLevel.json';
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
        <>
          <Checkbox options={experience} />
          <Toggler title="Только студенты" icon="mortarboard" role="switchStudentsOnly" />
        </>
      )}
      {title === 'Владение языками' && (
        <Checkbox options={languageSkills} gradeList={languageLevel} />
      )}
      {title === 'Тип занятости' && <Checkbox options={employmentType} />}
      {title === 'Образование' && <Checkbox options={education} />}
    </div>
  );
}

export default Filters;
