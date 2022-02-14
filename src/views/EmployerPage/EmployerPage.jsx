import ViewContainer from '../../components/ViewContainer';
import SearchResult from '../../components/SearchResult';
import ResultList from '../../components/ResultList';
import Pagination from '../../components/Pagination';

function EmployerPage({ openFilter }) {
  return (
    <ViewContainer>
      <SearchResult openFilter={openFilter} />
      <ResultList />
      <Pagination />
    </ViewContainer>
  );
}

export default EmployerPage;
