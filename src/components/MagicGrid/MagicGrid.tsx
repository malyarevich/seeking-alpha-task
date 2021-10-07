import React, { useEffect, useState } from 'react';

import styles from './MagicGrid.module.css';
import { IMagicElement, IMagicGridProps } from './MagicGrid.types';
import MagicElement from '../MagicElement/MagicElement';

const MagicGrid = (props: IMagicGridProps<IMagicElement>) => {
  const { data } = props;
  const [keyArray, setKeyArray] = useState<string[]>([]);

  useEffect(() => {
    if (data.length > 0) {
      const keys = Array(data.length).fill(0).map(() => Math.random().toString());
      setKeyArray(keys)
    }
  }, [data.length])

  return <div className={styles.MagicGrid} data-testid="MagicGrid">
    {keyArray.length && data.map((row, index) =>
      <div className={styles.MagicGrid__row} key={keyArray[index]}>
        {row.map(elem =>
          <MagicElement {...elem} />
        )}
      </div>
    )}
  </div>
};

export default React.memo(MagicGrid);
