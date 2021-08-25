import 'regenerator-runtime/runtime'
import axios from 'axios';
axios.defaults.adapter = require('axios/lib/adapters/http')

/**
 * GBIFApi
 * @param { String } speciesName: 
 */


const getSearchSpecies = async (speciesName) => { 
  return axios
    .get('https://api.gbif.org/v1/occurrence/search' + {speciesName})
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

const searchSpecies = async (speciesName) => {
  try {
    const searchedData = await getSearchSpecies(speciesName);
    return searchedData;

  } catch (error) {
    throw new Error(error);
  }
};

export default {searchSpecies};
