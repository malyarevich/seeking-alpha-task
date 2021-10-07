import React from 'react';
import classNames from 'classnames';

import { IMagicElement } from '../MagicGrid/MagicGrid.types';
import styles from './MagicElement.module.css';

const MagicElement = (props: IMagicElement) => {
  const { state } = props;
  const className = classNames(styles.MagicElement, {
    [styles.MagicElement_filled]: state
  });

  return <div className={className} data-testid="MagicElement"></div>;
}

export default React.memo(MagicElement);
