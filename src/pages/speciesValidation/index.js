import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import '../../sass/app.scss';
import { DropzoneArea } from 'material-ui-dropzone';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import SpeciesLinkAPI from '../../API/SpeciesLinkAPI';

// eslint-disable-next-line react/prefer-stateless-function
class SpecieValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      uploaded: false,
    };
  }

  async handleChange(files) {
    this.setState({
      files,
      uploaded: !!files.length,
    });

    files.forEach((file) => {
      console.log(file);
    });
    /* const result = await SpeciesLinkAPI.searchSpecies('Taberna disparifolia');
    const count = (result.result['0'].record_id);
    console.log(count);
    */
  }

  removeCSV() {
    this.setState({
      files: [],
      uploaded: false,
    });
  }

  render() {
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
              <h1>Inclua o CSV abaixo para validar as espécies</h1>
              <DropzoneArea onChange={this.handleChange.bind(this)} />
            </>
          )}
        </div>
      </div>
    );
  }
}

export default hot(module)(SpecieValidation);
