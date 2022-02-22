import { useSelector, useDispatch } from 'react-redux';
import { getCurrentPage, pageDecrement, pageIncrement } from '../../store/summarySlice';
import createPages from '../../helpers/createPages';
import css from './Pagination.module.css';
import sprite from '../../images/svg/sprite.svg';

function Pagination() {
  const currentPage = useSelector(state => state.summaries.currentPage);
  const totalPages = useSelector(state => state.summaries.totalPages);
  const dispatch = useDispatch();

  const pages = [];
  createPages(pages, totalPages, currentPage);

  return (
    <div className={css.pagination}>
      <span onClick={() => dispatch(pageDecrement(1))}>
        <svg className={currentPage === 1 ? css.disabled : null} width="24" height="24">
          <use href={`${sprite}#arrow-left`}></use>
        </svg>
      </span>
      {pages.map(page => (
        <span
          onClick={() => dispatch(getCurrentPage(page))}
          key={page}
          href="!#"
          className={currentPage === page ? css.active : null}
        >
          {page}
        </span>
      ))}
      <span onClick={() => dispatch(pageIncrement(totalPages.length))} href="!#">
        <svg className={currentPage === pages.length ? css.disabled : null} width="24" height="24">
          <use href={`${sprite}#arrow-right`}></use>
        </svg>
      </span>
    </div>
  );
}

export default Pagination;
