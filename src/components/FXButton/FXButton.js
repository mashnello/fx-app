import React from 'react';
import PropTypes from 'prop-types';
import styles from './FXButton.module.css';

const FXButton = ({ isDisabled, onClick }) => {
  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        className={`
          ${styles.button}
          ${isDisabled ? styles.disabled : ''}
        `}
        disabled={isDisabled}
        onClick={onClick}
      >
        Exchange
      </button>
    </div>
  );
};

const { bool, func } = PropTypes;

FXButton.propTypes = {
  isDisabled: bool,
  onClick: func.isRequired,
};

FXButton.defaultProps = {
  isDisabled: true,
};

export default FXButton;
