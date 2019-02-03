import React from 'react';

import styles from './Balance.module.css';

const Balance = ({ value, ccySymbol, isValid }) => {
  return (
    <div
      className={`
        ${styles.balance}
        ${isValid ? '' : styles.invalid}
      `}
    >
      Balance: {ccySymbol}{value}
    </div>
  );
};

export default Balance;
