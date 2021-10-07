import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MagicGrid from './MagicGrid';
import { mockedMagicGridProps } from '../../testData/MagicGrid.mocked';

describe('<MagicGrid />', () => {
  test('it should mount', () => {
    // GIVEN
    render(<MagicGrid {...mockedMagicGridProps} />);
    const magicGrid = screen.getByTestId('MagicGrid');

    // THEN
    expect(magicGrid).toBeInTheDocument();
  });
});