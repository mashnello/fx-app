import React from 'react';
import { ReactComponent as InfoIcon } from '../../icons/info.svg';
import styles from './Legend.module.css';

const Legend = ({ balance, fee, ccySymbol, isValid }) => {
  return (
    <div className={styles.wrapper}>

      <div
        className={`
          ${styles.legend}
          ${isValid ? '' : styles.invalid}
        `}
      >
        Balance: {ccySymbol}{balance}
      </div>

      {fee ?
        <div className={styles.wrapper}>
          <div className={styles.legend}>
            Inc. fee: {ccySymbol}{fee}
          </div>
          <InfoIcon width={12} height={12} />
        </div>
      : null}

    </div>
  );
};

export default Legend;
