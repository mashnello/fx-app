import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FXButton from '../../components/FXButton';
import CurrencyContainer from '../CurrencyContainer';
import FXCentralPanel from '../FXCentralPanel';
import * as actions from '../../actions/instrument';

class FXContainer extends Component {
  componentDidMount() {
    const POLLING_DELAY = 10000;
    const { fetchCurrencyRates } = this.props;
    fetchCurrencyRates();
    this.timer = setInterval(fetchCurrencyRates, POLLING_DELAY);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  render() {
    const {
      ccy1Code,
      ccy2Code,
      ccy1Fee,
      ccy2Fee,
      ccy1Value,
      isCcy1Focused,
      isCcy2Focused,
      ccy1Formatted,
      ccy2Formatted,
      changeCurrencyValue,
      changeCurrencyCode,
      exchangeAmount,
      pockets,
    } = this.props;
    const isValidAmount = ccy1Value >= 0.1;
    const hasEnoughInPocket = ccy1Value <= pockets[ccy1Code];
    const isDisabled = !isValidAmount || !hasEnoughInPocket;

    return (
      <main>
        <CurrencyContainer
          id="ccy1"
          ccyCode={ccy1Code}
          fee={ccy1Fee}
          focused={isCcy1Focused}
          ccyValue={ccy1Formatted}
          isValid={hasEnoughInPocket}
          onCurrencyChange={changeCurrencyCode}
          onCurrencyValueChange={changeCurrencyValue}
        />
        <FXCentralPanel />
        <CurrencyContainer
          id="ccy2"
          ccyCode={ccy2Code}
          fee={ccy2Fee}
          focused={isCcy2Focused}
          ccyValue={ccy2Formatted}
          onCurrencyChange={changeCurrencyCode}
          onCurrencyValueChange={changeCurrencyValue}
        />
        <FXButton
          isDisabled={isDisabled}
          onClick={exchangeAmount}
        />
      </main>
    );
  }
}

const { string, func, bool, number, objectOf } = PropTypes;

FXContainer.propTypes = {
  ccy1Code: string.isRequired,
  ccy2Code: string.isRequired,
  ccy1Fee: number.isRequired,
  ccy2Fee: number.isRequired,
  isCcy1Focused: bool.isRequired,
  isCcy2Focused: bool.isRequired,
  ccy1Formatted: string.isRequired,
  ccy2Formatted: string.isRequired,
  fetchCurrencyRates: func.isRequired,
  changeCurrencyValue: func.isRequired,
  changeCurrencyCode: func.isRequired,
  exchangeAmount: func.isRequired,
  pockets: objectOf(number).isRequired,
};

const mapStateToProps = ({ instrument }) => ({
  ccy1Code: instrument.ccy1.code,
  ccy2Code: instrument.ccy2.code,
  ccy1Fee: instrument.ccy1.fee,
  ccy2Fee: instrument.ccy2.fee,
  isCcy1Focused: instrument.ccy1.focused,
  isCcy2Focused: instrument.ccy2.focused,
  ccy1Value: instrument.ccy1.value,
  ccy1Formatted: instrument.ccy1.formatted,
  ccy2Formatted: instrument.ccy2.formatted,
  pockets: instrument.pockets,
});

const mapDispatchToProps = {
  changeCurrencyCode: actions.changeCurrencyCode,
  changeCurrencyValue: actions.changeCurrencyValue,
  exchangeAmount: actions.exchangeAmount,
  fetchCurrencyRates: actions.fetchCurrencyRates,
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(FXContainer);
