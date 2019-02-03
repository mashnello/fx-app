import React from 'react';
import { connect } from 'react-redux';

import {  ReactComponent as InvertIcon } from '../../icons/invert.svg';
import {  ReactComponent as ArrowIcon } from '../../icons/arrow.svg';

import styles from './Inversion.module.css';

const Inversion = ({ ccy1Code, ccy2Code, currencies, rate }) => {
  const ccy1Symbol = currencies[ccy1Code].symbol;
  const ccy2Symbol = currencies[ccy2Code].symbol;

  return (
    <div className={styles.invertWrapper}>
      <div className={styles.invert}>
        <InvertIcon width={15} height={15} />
      </div>
      <div className={styles.rateWrapper}>
        <ArrowIcon width={15} height={15} />
        <span className={styles.rate}>
          {ccy1Symbol}1 = {ccy2Symbol}{rate}
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = ({ instrument }) => ({
  ccy1Code: instrument.ccy1.code,
  ccy2Code: instrument.ccy2.code,
  currencies: instrument.currencies,
  rate: instrument.rate,
});

export default connect(mapStateToProps)(Inversion);
