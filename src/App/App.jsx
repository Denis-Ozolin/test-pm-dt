import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import EmployerPage from '../views/EmployerPage';
import Footer from '../components/Footer';
import getSummaries from '../api/apiSettings';
import { updateTotalPages, addSummaries, getTotalSummaries } from '../store/summarySlice';
import { resizeWidth } from '../store/deviceSizeSlice';

function App() {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.summaries.currentPage);
  // const photoOn = useSelector(state => state.summaries.photo);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateWidth = () => dispatch(resizeWidth(window.innerWidth));

  useEffect(() => {
    getSummaries(currentPage).then(res => {
      console.log(res);
      dispatch(updateTotalPages(res.page_count));
      dispatch(getTotalSummaries(res.total));
      dispatch(addSummaries(res.results));
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
