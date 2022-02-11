import Header from '../components/Header';
import EmployerPage from '../views/EmployerPage';

import css from './App.module.css';

function App() {
  return (
    <div className={css.app}>
      <Header />
      <EmployerPage />
    </div>
  );
}

export default App;
