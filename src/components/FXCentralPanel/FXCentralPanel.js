import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { invertCurrencyPair } from '../../actions/instrument';
import FXRate from '../FXRate/';
import InvertButton from '../InvertButton/';

import styles from './FXCentralPanel.module.css';

const FXCentralPanel = ({
  ccy1Code, ccy2Code, currencies, rate, invertCurrencyPair
}) => {
  return (
    <div className={styles.wrapper}>
      <InvertButton onClick={invertCurrencyPair} />
      <FXRate
        rate={rate}
        ccy1Code={ccy1Code}
        ccy2Code={ccy2Code}
        currencies={currencies}
      />
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
)(FXCentralPanel);
