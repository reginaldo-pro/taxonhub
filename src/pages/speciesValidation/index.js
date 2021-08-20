import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import '../../sass/app.scss';

// eslint-disable-next-line react/prefer-stateless-function
class SpecieValidation extends Component {
  render() {
    return (
      <div className="App">
        <h1>Bem vindo ao Taxonhub, selecione uma opção:</h1>
        <nav id="menu">
          <ul>
            <li><a href="#">Ocorrências de especies</a></li>
            <li><a href="#">Validação de especies</a></li>
            <li><a href="#">Documentação</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default hot(module)(SpecieValidation);
