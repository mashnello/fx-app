import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ReactComponent as ArrowDownIcon } from '../../icons/arrow-down.svg';
import CurrencySelector from '../CurrencySelector/';
import CurrencyInput from '../CurrencyInput/';
import Legend from '../Legend/';
import { changeFocus } from '../../actions/instrument';

import styles from './CurrencyContainer.module.css';

class CurrencyContainer extends Component {
  render() {
    const {
      ccyValue,
      changeFocus,
      onCurrencyValueChange,
      onCurrencyChange,
      ccyCode,
      pockets,
      currencies,
      fee,
      focused,
      isBase,
      isValid = true
    } = this.props;
    const ccySymbol = currencies[ccyCode].symbol;

    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <CurrencySelector
            isBase={isBase}
            value={ccyCode}
            onChange={onCurrencyChange}
            currencies={Object.keys(currencies)}
          />
          <ArrowDownIcon width={15} height={15} />
          <CurrencyInput
            isBase={isBase}
            focused={focused}
            value={ccyValue}
            onFocus={changeFocus}
            onChange={onCurrencyValueChange}
          />
        </div>
        <Legend
          balance={pockets[ccyCode]}
          fee={fee}
          ccyValue={ccyValue}
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

const mapDispatchToProps = dispatch => bindActionCreators({
  changeFocus
}, dispatch);

export default connect(
  mapStateToProps, mapDispatchToProps
)(CurrencyContainer);
