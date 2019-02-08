import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as SwapIcon } from '../../icons/swap.svg';

import styles from './SwapButton.module.css';

const SwapButton = ({ onClick }) => {
  return (
    <button
      type="button"
      className={styles.swap}
      onClick={onClick}
    >
      <SwapIcon width={15} height={15} />
    </button>
  );
};

const { func } = PropTypes;

SwapButton.propTypes = {
  onClick: func.isRequired,
};

export default SwapButton;
