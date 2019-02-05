import React from 'react';
import { ReactComponent as ArrowIcon } from '../../icons/arrow.svg';
import { formatRate } from '../../utils/';

import styles from './FXRate.module.css';

const FXRate = ({ ccy1Code, ccy2Code, currencies, rate }) => {
  const ccy1Symbol = currencies[ccy1Code].symbol;
  const ccy2Symbol = currencies[ccy2Code].symbol;

  return (
    <div className={styles.rateWrapper}>
      <ArrowIcon width={17} height={17} />
      <span className={styles.rate}>
        {ccy1Symbol}1 = {ccy2Symbol}{formatRate(rate)}
      </span>
    </div>
  );
};

export default FXRate;
