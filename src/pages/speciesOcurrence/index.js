import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import '../../sass/app.scss';
import { DropzoneArea } from 'material-ui-dropzone';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';
// eslint-disable-next-line react/prefer-stateless-function
class SpecieValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      uploaded: false,
    };
  }

  handleChange(files) {
    console.log(files.length);
    this.setState({
      files,
      uploaded: !!files.length,
    });
  }

  removeCSV() {
    this.setState({
      files: [],
      uploaded: false,
    });
  }

  render() {
    console.log(this.state.uploaded);
    return (
      <div className="speciesScreen">
        <div className="speciesScreenTitle">
          {this.state.uploaded ? (
            <>
              <h1>Remova o CSV atual para utilizar outro</h1>
              <Button variant="contained" color="secondary" onClick={this.removeCSV.bind(this)}>
                Remover
              </Button>
            </>
          ) : (
            <>
              <h1>Inclua o CSV abaixo para encontrar as Ocorrências das espécies</h1>
              <DropzoneArea onChange={this.handleChange.bind(this)} />
            </>
          )}
        </div>
      </div>
    );
  }
}

export default hot(module)(SpecieValidation);
