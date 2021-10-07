import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import styles from './MagicElement.module.css';
import MagicElement from './MagicElement';

describe('<MagicElement />', () => {
  const props = { state: true, key: "0.12576681" }

  test('it should render filled element', () => {
    // GIVEN
    const { container } = render(<MagicElement {...props} />);
    const magicElement = container.firstElementChild;

    // THEN
    expect(magicElement).toHaveClass(styles.MagicElement_filled);
  });

  test('it should render empty element', () => {
    // GIVEN
    const { container } = render(<MagicElement {...props} state={false} />);
    const magicElement = container.firstElementChild;

    // THEN
    expect(magicElement).not.toHaveClass(styles.MagicElement_filled);
  });
});