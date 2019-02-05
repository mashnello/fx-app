import React from 'react';
import { ReactComponent as InvertIcon } from '../../icons/invert.svg';

import styles from './SwapButton.module.css';

const SwapButton = ({ onClick }) => {
  return (
    <div className={styles.invert}>
      <button onClick={onClick}>
        <InvertIcon width={15} height={15} />
      </button>
    </div>
  );
};

export default SwapButton;
