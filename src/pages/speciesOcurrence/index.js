import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import '../../sass/app.scss';

import { Link } from 'react-router-dom';
// eslint-disable-next-line react/prefer-stateless-function
class SpecieValidation extends Component {
  render() {
    return (
      <div className="speciesValidation">
        <nav id="menu">
          <ul>
            <li>
              <Link to="/">Voltar ao menu principal</Link>
            </li>
          </ul>
        </nav>
        <h1>Inclua o CSV a baixo para encontrar as Ocorrências das espécies:</h1>
      </div>
    );
  }
}

export default hot(module)(SpecieValidation);
