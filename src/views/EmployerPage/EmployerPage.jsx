import { useState } from 'react';
import ViewContainer from '../../components/ViewContainer';
import SearchResult from '../../components/ResultHeader';
import FilterContainer from '../../components/FilterContainer';

function EmployerPage() {
  const [isShowingFilter, setIsShowingFilter] = useState(false);

  const toggleFilter = () => setIsShowingFilter(!isShowingFilter);

  return (
    <ViewContainer>
      {!isShowingFilter ? (
        <SearchResult toggleFilter={toggleFilter} />
      ) : (
        <FilterContainer toggleFilter={toggleFilter} />
      )}
    </ViewContainer>
  );
}

export default EmployerPage;
