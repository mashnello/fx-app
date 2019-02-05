import React from 'react';
import { ReactComponent as SwapIcon } from '../../icons/swap.svg';

import styles from './SwapButton.module.css';

const SwapButton = ({ onClick }) => {
  return (
    <div className={styles.swap}>
      <button onClick={onClick}>
        <SwapIcon width={15} height={15} />
      </button>
    </div>
  );
};

export default SwapButton;
