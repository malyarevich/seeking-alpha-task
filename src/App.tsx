import React from 'react';

import GameBoard from './components/GameBoard/GameBoard';
import DataExpert from './services/DataExpert.service';
// import { mockedMagicGridProps, mockedMagicGridPropsMap } from './testData/MagicGrid.mocked';

import { DEFAULT_SIZE, LOADING_TEXT } from './App.constants';
import './App.css';

function App(props: { size?: number }) {
  const { size = DEFAULT_SIZE } = props;
  const randomMatrix = DataExpert.generateData(size);
  const randomData = DataExpert.composeData(randomMatrix);

  // const mockedData = mockedMagicGridProps;
  // const mockedData = mockedMagicGridPropsMap.get("tetris");
  return (
    <div className="App">
      {randomData && <GameBoard {...{ data: randomData }} />}
      {!randomData?.length && <p>{LOADING_TEXT}</p>}
      {/* <br />
      {mockedData && <GameBoard {...mockedData} />} */}
    </div>
  );
}

export default App;
