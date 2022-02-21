import { useState, useEffect } from 'react';
import getSummaries from '../api/apiSettings';
import Header from '../components/Header';
import EmployerPage from '../views/EmployerPage';
import Footer from '../components/Footer';

// const newSummaries = res.results.map(result => (
//   {{
//     id: result.id,
//     name: result.favorites.first_name,
//     age: result.favorites.hits,
//     workexperience: result.workexperience.map(work => {
//       id: work.id,
//       company: work.company_name,
//       from: work.date_from,
//       to: date_to,
//     })

function App() {
  const [summaries, setSummaries] = useState([]);
  const [curentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (summaries.length) return;
    getSummaries(curentPage).then(res => {
      setSummaries([...summaries, ...res.results]);
      setCurrentPage(curentPage => curentPage + 1);
    });
  }, [curentPage, summaries]);

  console.log(summaries);

  return (
    <>
      <Header />
      <EmployerPage summaries={summaries} />
      <Footer />
    </>
  );
}

export default App;
