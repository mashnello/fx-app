import React, { Component } from 'react';
import { connect } from 'react-redux';

import FXButton from '../FXButton/';
import Currency from '../Currency/';
import Inversion from '../Inversion/';

class FXContainer extends Component {
  render() {
    const {
      ccy1Code,
      ccy2Code,
      ccy1Value,
      ccy2Value,
    } = this.props;
    return (
      <main>
        <Currency
          ccyCode={ccy1Code}
          ccyValue={ccy1Value}
        />
        <Inversion />
        <Currency
          ccyCode={ccy2Code}
          ccyValue={ccy2Value}
        />
        <FXButton />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  ccy1Code: state.ccy1.code,
  ccy2Code: state.ccy2.code,
  ccy1Value: state.ccy1.value,
  ccy2Value: state.ccy2.value,
});

export default connect(mapStateToProps)(FXContainer);
