import React from 'react';

import {  ReactComponent as InvertIcon } from '../../icons/invert.svg';

import styles from './InvertButton.module.css';

const InvertButton = ({ onClick }) => {
  return (
    <div className={styles.invert}>
      <button onClick={onClick}>
        <InvertIcon width={15} height={15} />
      </button>
    </div>
  );
};

export default InvertButton;
