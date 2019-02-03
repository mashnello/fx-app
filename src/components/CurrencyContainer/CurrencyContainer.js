import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ArrowDownIcon } from '../../icons/arrow-down.svg';
import CurrencySelector from '../CurrencySelector/';
import CurrencyInput from '../CurrencyInput/';
import Balance from '../Balance/';

import styles from './CurrencyContainer.module.css';

class CurrencyContainer extends Component {
  render() {
    const {
      ccyValue,
      onCurrencyValueChange,
      onCurrencyChange,
      ccyCode,
      pockets,
      currencies,
      isValid = true
    } = this.props;
    const ccySymbol = currencies[ccyCode].symbol;

    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <CurrencySelector
            value={ccyCode}
            onChange={onCurrencyChange}
            currencies={Object.keys(currencies)}
          />
          <ArrowDownIcon width={20} height={20} />
          <CurrencyInput
            value={ccyValue}
            onChange={onCurrencyValueChange}
          />
        </div>
        <Balance
          value={pockets[ccyCode]}
          ccySymbol={ccySymbol}
          isValid={isValid}
        />
      </div>
    );
  }
};

const mapStateToProps = ({ instrument }) => ({
  pockets: instrument.pockets,
  balance: instrument.balance,
  currencies: instrument.currencies,
});

export default connect(mapStateToProps)(CurrencyContainer);
