import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../actions/instrument';
import FXRate from '../../components/FXRate';
import SwapButton from '../../components/SwapButton';

import styles from './FXCentralPanel.module.css';

const FXCentralPanel = ({
  ccy1Code, ccy2Code, currencies, baseRate, swapCurrency
}) => {
  return (
    <div className={styles.wrapper}>
      <SwapButton onClick={swapCurrency} />
      <FXRate
        baseRate={baseRate}
        ccy1Code={ccy1Code}
        ccy2Code={ccy2Code}
        currencies={currencies}
      />
    </div>
  );
};

const { string, func, number, objectOf, object } = PropTypes;

FXCentralPanel.propTypes = {
  ccy1Code: string.isRequired,
  ccy2Code: string.isRequired,
  currencies: objectOf(object).isRequired,
  baseRate: number.isRequired,
  swapCurrency: func.isRequired,
};

const mapStateToProps = ({ instrument }) => ({
  ccy1Code: instrument.ccy1.code,
  ccy2Code: instrument.ccy2.code,
  currencies: instrument.currencies,
  baseRate: instrument.baseRate,
});

const mapDispatchToProps = {
  swapCurrency: actions.swapCurrency,
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(FXCentralPanel);
