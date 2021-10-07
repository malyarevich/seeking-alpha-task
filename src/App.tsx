import React, { useEffect, useState } from 'react';

import GameBoard from './components/GameBoard/GameBoard';
import { IMagicElement } from './components/MagicGrid/MagicGrid.types';
import DataExpert from './services/DataExpert.service';
// import { mockedMagicGridProps, mockedMagicGridPropsMap } from './testData/MagicGrid.mocked';

import { DEFAULT_SIZE, LOADING_TEXT } from './App.constants';
import './App.css';

function App(props: { size?: number }) {
  const { size = DEFAULT_SIZE } = props;
  const [randomMatrix, setRandomMatrix] = useState<boolean[][]>([]);
  const [randomData, setRandomData] = useState<IMagicElement[][]>([]);

  useEffect(() => {
    setRandomMatrix(DataExpert.generateData(size));
  }, [size]);

  useEffect(() => {
    setRandomData(DataExpert.composeData(randomMatrix));
  }, [randomMatrix]);

  // const mockedData = mockedMagicGridProps;
  // const mockedData = mockedMagicGridPropsMap.get("tetris");
  return (
    <div className="App">
      {randomData.length > 0 && <GameBoard {...{ data: randomData }} />}
      {!(randomData.length) && <p>{LOADING_TEXT}</p>}
      {/* <br />
      {mockedData && <GameBoard {...mockedData} />} */}
    </div>
  );
}

export default App;
