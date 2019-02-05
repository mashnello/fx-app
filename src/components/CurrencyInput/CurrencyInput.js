import React, { Component } from 'react';

import { addPrefix } from '../../utils/';

import styles from './CurrencyInput.module.css';

class CurrencyInput extends Component {
  handleChange = ({ target }) => {
    this.props.onChange(target.value);
  }

  render() {
    const { value, isBase } = this.props;
    return (
      <input
        type="text"
        placeholder="0"
        maxLength={16}
        value={addPrefix(value, isBase)}
        onChange={this.handleChange}
        className={styles.input}
      />
    );
  }
};

export default CurrencyInput;
