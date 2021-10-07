import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import DataExpert from './services/DataExpert.service';
import { mockedMagicGridProps } from './testData/MagicGrid.mocked';

import App from './App';
import { LOADING_TEXT } from './App.constants';

describe('<App />', () => {
  describe('Successfully loaded', () => {
    test('renders <GameBoard />', () => {
      // GIVEN
      const { container } = render(<App size={50} />);
      const gameBoard = container.firstElementChild;

      // THEN
      expect(gameBoard).toBeInTheDocument();
    });
  });

  describe('Failed to load', () => {
    test('render loading text', () => {
      // GIVEN
      render(<App size={0} />);
      const loadingApp = screen.getByText(LOADING_TEXT);

      // THEN
      expect(loadingApp).toBeInTheDocument();
    });
  });
})
