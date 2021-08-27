import React from 'react';
import { render } from '@testing-library/react';
import App from '../../../pages/home';

import SpeciesOcurrence from '../../../pages/speciesOcurrence/loadable.js';
import SpeciesValidation from '../../../pages/speciesValidation/loadable.js';

describe('App', () => {
  it('should render APP ', () => {
    expect(render(<App />)).toBeTruthy();
  });

  it('should render SpeciesOcurrence ', () => {
    expect(render(<SpeciesOcurrence />)).toBeTruthy();
  });

  it('should render speciesValidation ', () => {
    expect(render(<SpeciesValidation />)).toBeTruthy();
  });
});
