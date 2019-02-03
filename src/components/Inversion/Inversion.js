import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {  ReactComponent as InvertIcon } from '../../icons/invert.svg';
import {  ReactComponent as ArrowIcon } from '../../icons/arrow.svg';
import {
  changeCurrencyCode,
} from '../../actions/instrument';

import styles from './Inversion.module.css';

const Inversion = ({
  ccy1Code, ccy2Code, currencies, rate, changeCurrencyCode
}) => {
  const ccy1Symbol = currencies[ccy1Code].symbol;
  const ccy2Symbol = currencies[ccy2Code].symbol;
  const handleCcyInversion = changeCurrencyCode
    .bind(null, 'ccy1', ccy2Code);

  return (
    <div className={styles.invertWrapper}>
      <div className={styles.invert}>
        <button onClick={handleCcyInversion}>
          <InvertIcon width={15} height={15} />
        </button>
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

const mapDispatchToProps = dispatch => bindActionCreators({
  changeCurrencyCode
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inversion);
