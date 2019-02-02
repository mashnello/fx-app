import React, { Component } from 'react';

import FXHeader from './FXHeader/';
import FXButton from './FXButton/';
import Currency from './Currency/';
import Inversion from './Inversion/';

import styles from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <FXHeader />
        <main>
          <Currency />
          <Inversion />
          <Currency />
          <FXButton />
        </main>
      </div>
    );
  }
}

export default App;
