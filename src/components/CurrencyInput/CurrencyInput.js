import React, { Component } from 'react';

import { formatCurrencyOutput, parseCurrency } from '../../utils/';
import styles from './CurrencyInput.module.css';

class CurrencyInput extends Component {
  state = { value: '' }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ value: parseCurrency(value) });
    this.props.onChange(parseCurrency(value));
  }

  render() {
    const { isBase, value } = this.props;
    const localValue = this.state.value;
    const formattedCurrency = isBase
      ? formatCurrencyOutput(localValue, isBase)
      : formatCurrencyOutput(value)

    return (
      <input
        type="text"
        placeholder="0"
        maxLength={16}
        value={formattedCurrency}
        onChange={this.handleChange}
        className={styles.input}
      />
    );
  }
};

export default CurrencyInput;
