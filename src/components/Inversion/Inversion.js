import React from 'react';

import {  ReactComponent as InvertIcon } from '../../icons/invert.svg';
import {  ReactComponent as ArrowIcon } from '../../icons/arrow.svg';

import styles from './Inversion.module.css';

const Inversion = () => {
  return (
    <div className={styles.invertWrapper}>
      <div className={styles.invert}>
        <InvertIcon width={15} height={15} />
      </div>
      <div className={styles.rateWrapper}>
        <ArrowIcon width={15} height={15} />
        <span className={styles.rate}>
          $1 = zl4.2860
        </span>
      </div>
    </div>
  );
};

export default Inversion;
