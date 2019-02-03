import React from 'react';

import styles from './CurrencyInput.module.css';

const CurrencyInput = ({ value, onChange }) => {
  const handleChange = ({ target }) => onChange(target.value);

  return (
    <input
      type="text"
      placeholder="0"
      value={value}
      onChange={handleChange}
      className={styles.input}
    />
  );
};

export default CurrencyInput;
