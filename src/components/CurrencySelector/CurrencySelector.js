import React from 'react';
import PropTypes from 'prop-types';

import styles from './CurrencySelector.module.css';

const CurrencySelector = ({ id, value, onChange, currencies }) => {
  const handleChange = event => onChange(id, event.target.value);

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

const { string, func, arrayOf } = PropTypes;

CurrencySelector.propTypes = {
  id: string.isRequired,
  value: string.isRequired,
  onChange: func.isRequired,
  currencies: arrayOf(string).isRequired,
};

export default CurrencySelector;
