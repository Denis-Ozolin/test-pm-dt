import { useState } from 'react';
import ViewContainer from '../../components/ViewContainer';
import SearchResult from '../../components/SearchResult';
import FilterContainer from '../../components/FilterContainer';

function EmployerPage({ summaries }) {
  const [isShowingFilter, setIsShowingFilter] = useState(false);

  const toggleFilter = () => setIsShowingFilter(!isShowingFilter);

  return (
    <ViewContainer>
      {!isShowingFilter ? (
        <SearchResult toggleFilter={toggleFilter} summaries={summaries} />
      ) : (
        <FilterContainer toggleFilter={toggleFilter} />
      )}
    </ViewContainer>
  );
}

export default EmployerPage;
