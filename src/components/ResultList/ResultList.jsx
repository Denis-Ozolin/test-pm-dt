import ResultItem from './ResultItem';

function ResultList() {
  const results = ['Mike', 'John', 'Bill'];
  return (
    <>
      <span>RESULTS</span>
      <ul>
        {results.map(result => (
          <li key={result}>
            <span>RESULTS</span>
            <ResultItem result={result} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ResultList;
