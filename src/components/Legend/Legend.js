import React from 'react';
import { ReactComponent as InfoIcon } from '../../icons/info.svg';
import { formatCurrencyOutput } from '../../utils/';
import styles from './Legend.module.css';

const Legend = ({ balance, fee, ccySymbol, ccyValue, isValid }) => {
  return (
    <div className={styles.wrapper}>

      <div
        className={`
          ${styles.legend}
          ${isValid ? '' : styles.invalid}
        `}
      >
        Balance: {ccySymbol}{formatCurrencyOutput(balance)}
      </div>

      {fee && ccyValue ?
        <div className={styles.wrapper}>
          <div className={styles.legend}>
            Inc. fee: {ccySymbol}{formatCurrencyOutput(fee)}
          </div>
          <InfoIcon width={12} height={12} />
        </div>
      : null}

    </div>
  );
};

export default Legend;
