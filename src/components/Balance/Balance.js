import React from 'react';

import styles from './Balance.module.css';

const Balance = ({ value, ccySymbol }) => {
  return (
    <div
      className={styles.balance}
    >
      Balance: {ccySymbol}{value}
    </div>
  );
};

export default Balance;
