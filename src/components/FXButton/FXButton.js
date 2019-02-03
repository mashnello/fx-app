import React from 'react';

import styles from './FXButton.module.css';

const FXButton = ({ isDisabled, onClick }) => {
  return (
    <div className={styles.wrapper}>
      <button
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

export default FXButton;
