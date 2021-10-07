import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DataExpert from './DataExpert.service';

describe('DataExpert Service', () => {
  describe('createDataElement', () => {
    test('it should get DataElement.', () => {
      // GIVEN
      const answer = DataExpert.createDataElement(true);

      // THEN
      expect(answer.hasOwnProperty("state") && answer["state"] === true).toBeTruthy();
    });
  });
});