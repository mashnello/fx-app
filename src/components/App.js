import React, { Component } from 'react';
import FXHeader from './FXHeader/';
import FXContainer from '../containers/FXContainer';

import styles from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <FXHeader />
        <FXContainer />
      </div>
    );
  }
}

export default App;
