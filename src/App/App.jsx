import { useState } from 'react';
import Header from '../components/Header';
import EmployerPage from '../views/EmployerPage';
import FilterContainer from '../components/FilterContainer';
import Footer from '../components/Footer';
import css from './App.module.css';

function App() {
  const [isShowingFilter, setIsShowingFilter] = useState(false);

  const toggleFilter = () => setIsShowingFilter(!isShowingFilter);
  return (
    <div className={css.app}>
      <Header />
      {!isShowingFilter ? (
        <EmployerPage openFilter={toggleFilter} />
      ) : (
        <FilterContainer closeFilter={toggleFilter} />
      )}
      <Footer />
    </div>
  );
}

export default App;
