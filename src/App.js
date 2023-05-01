import styles from './app.module.css';
import AboutDoge from './components/Body/AboutDoge/AboutDoge';
import Body from './components/Body/Body';
import Doge from './components/Body/DogePics/Doge';
import Dogepedia from './components/Body/Dogepedia/Dogepedia';
import Footer from './components/Body/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.header}>
        <Header />
      </div>
      <Body />
      <AboutDoge />
      <Doge />
      <div className={styles.dogepedia}>
        <Dogepedia />
      </div>

      <Footer />
    </div>
  );
}

export default App;
