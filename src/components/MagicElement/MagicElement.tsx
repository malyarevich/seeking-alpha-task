import React from 'react';

import { IMagicElement } from '../MagicGrid/MagicGrid.types';
import styles from './MagicElement.module.css';

const MagicElement = (props: IMagicElement) => {
  const { state } = props;
  const filledClassName = `${styles.MagicElement} ${styles.MagicElement_filled}`;

  return state
    ? <div className={filledClassName} data-testid="MagicElement"></div>
    : <div className={styles.MagicElement} data-testid="MagicElement"></div>;
}

export default React.memo(MagicElement);
