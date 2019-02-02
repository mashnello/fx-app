import React from 'react';

import { ReactComponent as ArrowDownIcon } from '../../icons/arrow-down.svg';

import styles from './Currency.module.css';

const Currency = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <select className={styles.list}>
          <option value="USD" selected>USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
        <ArrowDownIcon width={20} height={20} />
        <input
          type="number"
          className={styles.value}
          placeholder="0"
        />
      </div>
      <div className={styles.balance}>Balance: $0.00</div>
    </div>
  );
};

export default Currency;
