import 'regenerator-runtime/runtime'
import axios from 'axios';
axios.defaults.adapter = require('axios/lib/adapters/http')


const getSearchSpecies = async (taxonKey) => { 
  //console.log('key: ', taxonKey)
  return axios
    .get('https://api.gbif.org/v1/occurrence/search',{taxon_key: taxonKey})
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

const searchSpecies = async (speciesName) => {
  axios.get(`https://api.gbif.org/v1/species/match?name=${speciesName}&strict=true`)
    .then((response) => {
      //console.log('Resultado:',response.data.usageKey)
      getSearchSpecies(response.data.usageKey);
    }).catch((error) => {
      console.log(error);
    });
};

export default {searchSpecies};
