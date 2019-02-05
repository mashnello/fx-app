import React from 'react';
import { ReactComponent as CloseIcon } from '../../icons/close.svg';
import { ReactComponent as GraphIcon } from '../../icons/graph.svg';

import styles from './FXHeader.module.css';

const FXHeader = () => {
  return (
    <header className={styles.header}>
      <CloseIcon
        width={15}
        height={15}
      />
      <h1 className={styles.title}>
        Exchange
      </h1>
      <GraphIcon
        width={20}
        height={20}
      />
    </header>
  );
};

export default FXHeader;
