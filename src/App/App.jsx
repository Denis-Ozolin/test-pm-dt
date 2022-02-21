import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import EmployerPage from '../views/EmployerPage';
import Footer from '../components/Footer';
import getSummaries from '../api/apiSettings';
import { addSummaries } from '../store/summarySlice';
import { resizeWidth } from '../store/deviceSizeSlice';

function App() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateWidth = () => dispatch(resizeWidth(window.innerWidth));

  useEffect(() => {
    if (currentPage > 3) return;
    getSummaries(currentPage).then(res => {
      dispatch(addSummaries(res.results));
      setCurrentPage(currentPage => currentPage + 1);
    });
  }, [currentPage, dispatch]);

  useEffect(() => {
    window.addEventListener('resize', updateWidth);

    updateWidth();

    return () => window.removeEventListener('resize', updateWidth);
  }, [dispatch, updateWidth]);

  return (
    <>
      <Header />
      <EmployerPage />
      <Footer />
    </>
  );
}

export default App;
