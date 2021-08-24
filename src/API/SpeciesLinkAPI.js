import axios from 'axios';
axios.defaults.adapter = require('axios/lib/adapters/http')

const getSearchSpecies = async (speciesName) => {
  return axios
    .get(`https://api.splink.org.br/records/ScientificName/${speciesName}/Synonyms/flora2020/Format/JSON`)
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

