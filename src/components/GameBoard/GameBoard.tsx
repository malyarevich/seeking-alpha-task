import React, { useEffect, useState } from 'react';
import DataExpert from '../../services/DataExpert.service';

import MagicGrid from '../MagicGrid/MagicGrid';
import { IMagicElement, IMagicGridProps } from '../MagicGrid/MagicGrid.types';

import { DEFAULT_TICK } from './GameBoard.constants';
import styles from './GameBoard.module.css';
import { GameBoardService } from './GameBoard.service';

const GameBoard = (props: IMagicGridProps<IMagicElement>) => {
  const [data, setData] = useState<IMagicElement[][]>(props.data);

  useEffect(() => {
    const intervalIndex = setInterval(() => {
      setData((prev) => {
        const current = GameBoardService.nextTick(prev);
        const isSame = DataExpert.isSameData(prev, current);
        if (isSame) {
          clearInterval(intervalIndex);
        }
        return current
      });
    }, DEFAULT_TICK);

    return () => clearInterval(intervalIndex);
  }, [])

  return <div className={styles.GameBoard} data-testid="GameBoard">
    <MagicGrid data={data} />
  </div>
};

export default GameBoard;
