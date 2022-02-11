import ViewContainer from '../../components/ViewContainer';
import SearchResult from '../../components/SearchResult';
import ResultList from '../../components/ResultList';

function EmployerPage() {
  return(
    <ViewContainer>
      <SearchResult />
      <ResultList/>
    </ViewContainer>
  )
}

export default EmployerPage;