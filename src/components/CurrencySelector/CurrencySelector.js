import React from 'react';

import styles from './CurrencySelector.module.css';

const CurrencySelector = ({ value, onChange, currencies }) => {
  return (
    <select
      className={styles.list}
      value={value}
      onChange={onChange}
    >
      {currencies.map(ccy => (
        <option key={ccy} value={ccy}>{ccy}</option>
      ))}
    </select>
  );
};

export default CurrencySelector;
