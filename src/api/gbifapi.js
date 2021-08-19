import axios from 'axios';

const getSearchSpecies = async (speciesName) => { 
  return axios
    .get('gttps://api.gbif.org/vl/occurrence/search', {taxon_key: 8225540})
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      throw new Error('Erro!');
    });
};

const searchSpeciesApi = async (speciesName) => {
  try {
    const searchedData = await getSearchSpecies(speciesName);
    
    return searchedData;

  } catch (error) {
    throw new Error(error);
  }
};

export default searchSpeciesApi;
