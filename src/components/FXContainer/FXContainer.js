import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FXButton from '../FXButton/';
import Currency from '../Currency/';
import Inversion from '../Inversion/';
import {
  changeCurrencyValue,
  changeCurrencyCode,
  exchangeAmount,
} from '../../actions/instrument';

class FXContainer extends Component {
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
        <Currency
          ccyCode={ccy1Code}
          ccyValue={ccy1Value}
          isValid={hasEnoughInPocket}
          onCurrencyValueChange={changeCurrencyValue.bind(null, 'ccy1')}
          onCurrencyChange={changeCurrencyCode.bind(null, 'ccy1')}
        />
        <Inversion />
        <Currency
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
  ccy1Value: instrument.ccy1.value,
  ccy2Value: instrument.ccy2.value,
  pockets: instrument.pockets,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changeCurrencyCode,
  changeCurrencyValue,
  exchangeAmount,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FXContainer);
