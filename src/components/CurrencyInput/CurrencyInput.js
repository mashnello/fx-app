import React, { Component } from 'react';
import { addPrefix } from '../../utils/';

import styles from './CurrencyInput.module.css';

class CurrencyInput extends Component {
  input = React.createRef();

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

  handleChange = ({ target }) => {
    this.props.onChange(target.value);
  }

  render() {
    const { value, isBase } = this.props;
    const id = isBase ? 'ccy1' : 'ccy2';

    return (
      <input
        id={id}
        type="text"
        ref={this.input}
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
