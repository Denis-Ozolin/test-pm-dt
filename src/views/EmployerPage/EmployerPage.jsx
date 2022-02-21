import { useSelector } from 'react-redux';
import ViewContainer from '../../components/ViewContainer';
import SearchResult from '../../components/SearchResult';
import FilterContainer from '../../components/FilterContainer';

function EmployerPage() {
  const deviceWidth = useSelector(state => state.deviceSize.width);
  const showFilter = useSelector(state => state.showFilter.filter);

  return (
    <ViewContainer>
      {deviceWidth < 1240 ? (
        <>
          {!showFilter && <SearchResult />}
          {showFilter && <FilterContainer />}
        </>
      ) : (
        <SearchResult />
      )}
    </ViewContainer>
  );
}

export default EmployerPage;
