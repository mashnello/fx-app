import React from 'react';

import styles from './CurrencyInput.module.css';

const CurrencyInput = ({ value, onChange }) => {
  return (
    <input
      type="number"
      placeholder="0"
      value={value}
      onChange={onChange}
      className={styles.input}
    />
  );
};

export default CurrencyInput;
