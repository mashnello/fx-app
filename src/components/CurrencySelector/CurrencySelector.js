import React from 'react';

import styles from './CurrencySelector.module.css';

const CurrencySelector = ({ value, onChange, currencies }) => {
  const handleChange = ({ target }) => onChange(target.value);
  return (
    <select
      className={styles.list}
      value={value}
      onChange={handleChange}
    >
      {currencies.map(ccy => (
        <option key={ccy} value={ccy}>{ccy}</option>
      ))}
    </select>
  );
};

export default CurrencySelector;
