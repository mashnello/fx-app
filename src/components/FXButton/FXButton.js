import React from 'react';

import styles from './FXButton.module.css';

const FXButton = () => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button}>Exchange</button>
    </div>
  );
};

export default FXButton;
