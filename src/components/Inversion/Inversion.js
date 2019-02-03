import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {  ReactComponent as InvertIcon } from '../../icons/invert.svg';
import {  ReactComponent as ArrowIcon } from '../../icons/arrow.svg';
import {
  invertCurrencyPair,
} from '../../actions/instrument';
import { formatRate } from '../../utils/';

import styles from './Inversion.module.css';

const Inversion = ({
  ccy1Code, ccy2Code, currencies, rate, invertCurrencyPair
}) => {
  const ccy1Symbol = currencies[ccy1Code].symbol;
  const ccy2Symbol = currencies[ccy2Code].symbol;

  return (
    <div className={styles.invertWrapper}>
      <div className={styles.invert}>
        <button onClick={invertCurrencyPair}>
          <InvertIcon width={15} height={15} />
        </button>
      </div>
      <div className={styles.rateWrapper}>
        <ArrowIcon width={15} height={15} />
        <span className={styles.rate}>
          {ccy1Symbol}1 = {ccy2Symbol}{formatRate(rate)}
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

const mapDispatchToProps = dispatch => bindActionCreators({
  invertCurrencyPair
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inversion);
