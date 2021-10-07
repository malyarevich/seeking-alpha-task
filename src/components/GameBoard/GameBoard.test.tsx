import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { mockedMagicGridProps } from '../../testData/MagicGrid.mocked';

import GameBoard from './GameBoard';

describe('<GameBoard />', () => {
  test('it should mount', () => {
    // GIVEN
    const { container } = render(<GameBoard {...mockedMagicGridProps} />);
    const gameBoard = container.firstElementChild;

    // THEN
    expect(gameBoard).toBeInTheDocument();
  });
});