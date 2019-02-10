import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ArrowIcon } from '../../icons/arrow.svg';
import { formatCurrencyOutput } from '../../utils';

import styles from './FXRate.module.css';

const FXRate = ({ ccy1Code, ccy2Code, currencies, baseRate }) => {
  const ccy1Symbol = currencies[ccy1Code].symbol;
  const ccy2Symbol = currencies[ccy2Code].symbol;
  const formattedRate = `${ccy1Symbol}1 = ${ccy2Symbol}${formatCurrencyOutput(baseRate, 4)}`;

  return (
    <div className={styles.rateWrapper}>
      <ArrowIcon width={17} height={17} />
      <span className={styles.rate}>
        {baseRate ? formattedRate : null}
      </span>
    </div>
  );
};

const { number, string, objectOf, object } = PropTypes;

FXRate.propTypes = {
  ccy1Code: string.isRequired,
  ccy2Code: string.isRequired,
  currencies: objectOf(object).isRequired,
  baseRate: number.isRequired,
};

export default FXRate;
