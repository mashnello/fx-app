import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ArrowDownIcon } from '../../icons/arrow-down.svg';
import CurrencySelector from '../CurrencySelector/';
import CurrencyInput from '../CurrencyInput/';
import Balance from '../Balance/';

import styles from './Currency.module.css';

class Currency extends Component {
  render() {
    const {
      ccyValue,
      onCurrencyChange,
      onCurrencyValueChange,
      ccyCode = 'EUR',
      accounts,
      currencies,
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
          value={accounts[ccyCode]}
          ccySymbol={ccySymbol}
        />
      </div>
    );
  }
};

const mapStateToProps = state => ({
  accounts: state.accounts,
  balance: state.balance,
  currencies: state.currencies,
});

export default connect(mapStateToProps)(Currency);
