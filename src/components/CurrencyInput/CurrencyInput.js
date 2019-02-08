import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MAX_INPUT_LENGHT, addPrefix } from '../../utils';

import styles from './CurrencyInput.module.css';

class CurrencyInput extends Component {
  input = React.createRef();

  componentDidMount() {
    const { id } = this.props;
    const isBase = id === 'ccy1';
    if (isBase) {
      this.input.current.focus();
    }
  }

  componentDidUpdate() {
    const { focused } = this.props;
    if (focused) {
      this.input.current.focus();
    }
  }

  handleFocus = () => {
    const { id, onFocus } = this.props;
    onFocus(id);
  }

  handleChange = ({ target }) => {
    const { id, onChange } = this.props;
    onChange(id, target.value);
  }

  render() {
    const { id, value } = this.props;
    const isBase = id === 'ccy1';

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

const { string, bool, func } = PropTypes;

CurrencyInput.propTypes = {
  id: string.isRequired,
  onFocus: func.isRequired,
  onChange: func.isRequired,
  focused: bool.isRequired,
};

export default CurrencyInput;
