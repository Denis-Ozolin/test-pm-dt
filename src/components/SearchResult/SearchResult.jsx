import ResultHeader from '../ResultHeader';
import ResultList from '../ResultList';
import FilterContainer from '../FilterContainer';
import Pagination from '../Pagination';
import css from './SearchResult.module.css';

function SearchResult({ toggleFilter, summaries }) {
  return (
    <>
      <ResultHeader toggleFilter={toggleFilter} />
      <div className={css.results}>
        <div>
          <ResultList summaries={summaries} />
          <Pagination />
        </div>
        <FilterContainer toggleFilter={toggleFilter} />
      </div>
    </>
  );
}

export default SearchResult;
