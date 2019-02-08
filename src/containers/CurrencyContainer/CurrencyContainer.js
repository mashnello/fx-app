import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ReactComponent as ArrowDownIcon } from '../../icons/arrow-down.svg';
import CurrencySelector from '../../components/CurrencySelector';
import CurrencyInput from '../../components/CurrencyInput';
import Legend from '../../components/Legend';
import * as actions from '../../actions/instrument';

import styles from './CurrencyContainer.module.css';

const CurrencyContainer = ({
  id,
  ccyValue,
  changeFocus,
  onCurrencyValueChange,
  onCurrencyChange,
  ccyCode,
  pockets,
  currencies,
  fee,
  focused,
  isValid,
}) => {
  const ccySymbol = currencies[ccyCode].symbol;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <CurrencySelector
          id={id}
          value={ccyCode}
          onChange={onCurrencyChange}
          currencies={Object.keys(currencies)}
        />
        <ArrowDownIcon width={15} height={15} />
        <CurrencyInput
          id={id}
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
};

const { string, func, bool, number, objectOf, object } = PropTypes;

CurrencyContainer.propTypes = {
  id: string.isRequired,
  ccyValue: string.isRequired,
  changeFocus: func.isRequired,
  onCurrencyValueChange: func.isRequired,
  onCurrencyChange: func.isRequired,
  ccyCode: string.isRequired,
  pockets: objectOf(number).isRequired,
  currencies: objectOf(object).isRequired,
  fee: number.isRequired,
  focused: bool.isRequired,
  isValid: bool,
};

CurrencyContainer.defaultProps = {
  isValid: true,
};

const mapStateToProps = ({ instrument }) => ({
  pockets: instrument.pockets,
  balance: instrument.balance,
  currencies: instrument.currencies,
});

const mapDispatchToProps = {
  changeFocus: actions.changeFocus,
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(CurrencyContainer);
