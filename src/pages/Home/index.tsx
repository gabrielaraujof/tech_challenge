import React from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../../logo.svg';
import styles from './Home.module.css';

const Home: React.FC = () => {
  const history = useHistory();

  const goToDash = (): void => {
    history.push('/dash');
  };

  return (
    <>
      <header>
        <img src={logo} className={styles.Logo} alt="logo" />
        <h1>Musicali</h1>
      </header>
      <main>
        <p>Find the best music to play. Anywhere. Anytime.</p>
        <button type="button" className={styles.LibraryCTA} onClick={goToDash}>
          Go to library
        </button>
      </main>
    </>
  );
};

export default Home;
