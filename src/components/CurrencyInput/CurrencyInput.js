import React, { Component } from 'react';
import { MAX_INPUT_LENGHT, addPrefix } from '../../utils/';

import styles from './CurrencyInput.module.css';

class CurrencyInput extends Component {
  input = React.createRef();
  id = this.props.isBase ? 'ccy1' : 'ccy2';

  componentDidMount() {
    if (this.props.isBase) {
      this.input.current.focus();
    }
  }

  componentDidUpdate() {
    if (this.props.focused) {
      this.input.current.focus();
    }
  }

  handleFocus = () => {
    this.props.onFocus(this.id);
  }

  handleChange = ({ target }) => {
    this.props.onChange(target.value);
  }

  render() {
    const { value, isBase } = this.props;

    return (
      <input
        type="tel"
        ref={this.input}
        placeholder="0"
        maxLength={MAX_INPUT_LENGHT}
        value={addPrefix(value, isBase)}
        onFocus={this.handleFocus}
        onChange={this.handleChange}
        className={styles.input}
      />
    );
  }
};

export default CurrencyInput;
