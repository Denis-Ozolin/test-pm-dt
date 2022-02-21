import { useSelector } from 'react-redux';
import { useState } from 'react';
import ViewContainer from '../../components/ViewContainer';
import SearchResult from '../../components/SearchResult';
import FilterContainer from '../../components/FilterContainer';

function EmployerPage() {
  const deviceWidth = useSelector(state => state.deviceSize.width);
  const [isShowingFilter, setIsShowingFilter] = useState(false);
  const toggleFilter = () => setIsShowingFilter(!isShowingFilter);

  return (
    <ViewContainer>
      {deviceWidth < 1240 ? (
        <>
          {!isShowingFilter && <SearchResult toggleFilter={toggleFilter} />}
          {isShowingFilter && <FilterContainer toggleFilter={toggleFilter} />}
        </>
      ) : (
        <SearchResult />
      )}
    </ViewContainer>
  );
}

export default EmployerPage;
