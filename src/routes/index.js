import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import SpeciesValidation from '../pages/speciesValidation';
import speciesOcurrence from '../pages/speciesOcurrence';
import LoadableApp from '../pages/home';

// class component
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoadableApp} />
        <Route path="/species-validation" component={SpeciesValidation} />
        <Route path="/species-ocurrence" component={speciesOcurrence} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
