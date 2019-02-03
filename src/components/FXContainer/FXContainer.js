import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FXButton from '../FXButton/';
import Currency from '../Currency/';
import Inversion from '../Inversion/';
import {
  changeCurrencyValue,
  changeCurrencyCode,
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
    } = this.props;
    return (
      <main>
        <Currency
          ccyCode={ccy1Code}
          ccyValue={ccy1Value}
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
        <FXButton />
      </main>
    );
  }
}

const mapStateToProps = ({ instrument }) => ({
  ccy1Code: instrument.ccy1.code,
  ccy2Code: instrument.ccy2.code,
  ccy1Value: instrument.ccy1.value,
  ccy2Value: instrument.ccy2.value,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changeCurrencyCode,
  changeCurrencyValue,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FXContainer);
