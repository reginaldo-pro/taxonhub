import 'regenerator-runtime/runtime'
import axios from 'axios';
axios.defaults.adapter = require('axios/lib/adapters/http')

const getSearchSpeciesData = async (speciesName) => {
  return axios
    .get('http://servicos.jbrj.gov.br/flora/taxon/' + speciesName)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        throw new Error(
          `Website response error with status: ${error.response.status}`,
        );
      } else if (error.request) {
        throw new Error(`Website request error: ${error.request}`);
      } else {
        throw new Error(`Error in setting up the request: ${error.message}`);
      }
    });
};

const searchSpecies = async (speciesName) => {
    try {
      const searchedData = await getSearchSpeciesData(speciesName);

      return searchedData;
    } catch (error) {
      throw new Error(error);
    }
};

export default searchSpecies;
