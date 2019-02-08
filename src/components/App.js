import React from 'react';
import FXHeader from './FXHeader';
import FXContainer from '../containers/FXContainer';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <FXHeader />
      <FXContainer />
    </div>
  );
};

export default App;
