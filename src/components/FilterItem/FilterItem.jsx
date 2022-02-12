import Toggler from '../Toggler';
import css from './FilterItem.module.css';

function FilterItem({ title }) {
  return (
    <div className={css.container}>
      <p className={css.title}>{title}</p>
      {title === 'Возраст' && <span>Возраст</span>}
      {title === 'Пол' && <span>Пол</span>}
      {title === 'Желаемая зарплата' && <Toggler />}
      {title === 'Опыт работы' && <Toggler />}
      {title === 'Владение языками' && <span>Владение языками</span>}
      {title === 'Тип занятости' && <span>Тип занятости</span>}
      {title === 'Образование' && <span>Образование</span>}
    </div>
  );
}

export default FilterItem;
