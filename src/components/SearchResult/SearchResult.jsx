import ResultHeader from '../ResultHeader';
import ResultList from '../ResultList';
import FilterContainer from '../FilterContainer';
import Pagination from '../Pagination';
import css from './ResultsHeader.module.css';

function SearchResult({ toggleFilter }) {
  return (
    <>
      <ResultHeader toggleFilter={toggleFilter} />
      <div className={css.results}>
        <ResultList />
        <FilterContainer toggleFilter={toggleFilter} />
      </div>
      <Pagination />
    </>
  );
}

export default SearchResult;
