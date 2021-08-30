import 'regenerator-runtime/runtime'
import axios from 'axios';
axios.defaults.adapter = require('axios/lib/adapters/http')


const getSearchSpecies = async (taxonKey) => { 
  //console.log('key',taxonKey)
  return axios.get('http://api.gbif.org/v1/occurrence/search/',{params : {
     taxon_key: taxonKey,
     //limit: 2,
    }})
    .then((response) => {
      //console.log(response.data)
      return response.data;
    })
    .catch((err) => {
      //console.log(err.response.data);
      throw new Error(err);
    });
};

const searchSpeciesapi = async (speciesName) => {
  //console.log(speciesName);  
  return axios.get(`http://api.gbif.org/v1/species/match?name=${speciesName}&strict=true`)
  .then((response) => {
      //console.log('aaaaaaaaaaaaaaaaaaaaa',response.data)
      return getSearchSpecies(response.data.speciesKey);
    }).catch((error) => {
      //console.log('aaaaaa');
      console.log(error);
    });
};

export default searchSpeciesapi;