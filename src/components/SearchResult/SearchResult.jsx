import { useSelector } from 'react-redux';
import ResultHeader from '../ResultHeader';
import ResultList from '../ResultList';
import FilterContainer from '../FilterContainer';
import Pagination from '../Pagination';
import css from './SearchResult.module.css';

function SearchResult({ toggleFilter }) {
  const deviceWidth = useSelector(state => state.deviceSize.width);

  return (
    <>
      <ResultHeader toggleFilter={toggleFilter} />
      <div className={css.results}>
        <div>
          <ResultList />
          <Pagination />
        </div>
        {deviceWidth >= 1240 && <FilterContainer toggleFilter={toggleFilter} />}
      </div>
    </>
  );
}

export default SearchResult;
