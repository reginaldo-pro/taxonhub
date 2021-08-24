import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import '../../sass/app.scss';

import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prefer-stateless-function
class SpecieValidation extends Component {
  render() {
    return (
      <div className="speciesScreen">
        <nav id="menu">
          <ul>
            <li>
              <Link to="/">Voltar ao menu principal</Link>
            </li>
          </ul>
        </nav>

        <div className="speciesScreenTitle">
          <h1>Inclua o CSV a baixo para validar as especies:</h1>
        </div>
      </div>
    );
  }
}

export default hot(module)(SpecieValidation);
