import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import styles from './App.module.css';
import Home from './pages/Home';
import Dash from './pages/Dash';

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/dash">
            <Dash />
          </Route>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
