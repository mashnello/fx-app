import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FXButton from '../FXButton/';
import CurrencyContainer from '../CurrencyContainer/';
import FXCentralPanel from '../FXCentralPanel/';
import {
  changeCurrencyValue,
  changeCurrencyCode,
  exchangeAmount,
  fetchCurrencyRates,
} from '../../actions/instrument';

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
      ccy1Value,
      ccy2Value,
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
          isBase
          ccyCode={ccy1Code}
          ccyValue={ccy1Value}
          isValid={hasEnoughInPocket}
          onCurrencyValueChange={changeCurrencyValue.bind(null, 'ccy1')}
          onCurrencyChange={changeCurrencyCode.bind(null, 'ccy1')}
        />
        <FXCentralPanel />
        <CurrencyContainer
          ccyCode={ccy2Code}
          ccyValue={ccy2Value}
          onCurrencyValueChange={changeCurrencyValue.bind(null, 'ccy2')}
          onCurrencyChange={changeCurrencyCode.bind(null, 'ccy2')}
        />
        <FXButton
          isDisabled={isDisabled}
          onClick={exchangeAmount}
        />
      </main>
    );
  }
}

const mapStateToProps = ({ instrument }) => ({
  ccy1Code: instrument.ccy1.code,
  ccy2Code: instrument.ccy2.code,
  ccy1Value: instrument.ccy1.formatted,
  ccy2Value: instrument.ccy2.formatted,
  pockets: instrument.pockets,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changeCurrencyCode,
  changeCurrencyValue,
  exchangeAmount,
  fetchCurrencyRates,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FXContainer);
