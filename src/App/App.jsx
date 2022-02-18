import Header from '../components/Header';
import EmployerPage from '../views/EmployerPage';
import Footer from '../components/Footer';
import css from './App.module.css';

function App() {
  return (
    <div className={css.app}>
      <Header />
      <EmployerPage />
      <Footer />
    </div>
  );
}

export default App;
