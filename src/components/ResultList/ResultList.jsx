import ResultItem from '../ResultItem';

function ResultList() {

  const results =['Mike', 'John', 'Bill'];
  return(
    <ul>
      {results.map(result => (
        <li key={result}>
          <ResultItem result={result}/>
        </li>
      ))}
    </ul>
  )
}

export default ResultList;