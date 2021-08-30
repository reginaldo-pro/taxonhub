import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import '../../sass/app.scss';
import {DropzoneArea} from 'material-ui-dropzone'

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
          <h1>Inclua o CSV pelo botão abaixo para validar as especies</h1>
          <DropzoneArea />
        </div>
      </div>
    );
  }
}

export default hot(module)(SpecieValidation);
