import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GameBoardService from './GameBoard.service';
import { mockedMagicGridProps } from '../../testData/MagicGrid.mocked';

// GIVEN
const table = [
  { coords: { row: 0, col: 0 }, neighborsCount: 1 },
  { coords: { row: 0, col: 2 }, neighborsCount: 4 },
  { coords: { row: 1, col: 3 }, neighborsCount: 5 },
  { coords: { row: 4, col: 4 }, neighborsCount: 0 },
  { coords: { row: 0, col: 0 }, neighborsCount: 1 },
  { coords: { row: 2, col: 0 }, neighborsCount: 2 },
  { coords: { row: 3, col: 3 }, neighborsCount: 3 }
];

describe('GameBoard Service', () => {
  describe('getAliveNeighborsCount', () => {
    table.forEach(element => {
      test('it should get count', () => {
        // WHEN
        const neighborsCount = GameBoardService.getAliveNeighborsCount(mockedMagicGridProps.data, element.coords.row, element.coords.col);

        // THEN
        expect(neighborsCount).toEqual(element.neighborsCount);
      });
    });
  });
});