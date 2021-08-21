const SpeciesLinkAPI = require('./API/SpeciesLinkAPI')
const SpeciesLinkCache = require('./Cache/SpeciesLinkCache')

let arraySpecies = [];

export async function searchSpeciesList(speciesList) {
  try {
    arraySpecies = [];
    speciesList.reduce((accumulator, especie) => {
      return accumulator.then(() => {
        const cacheSpecieList = SpeciesLinkCache.find(especie);
        if (cacheSpecieList.length > 0) { // se existe em cache
          cacheSpecieList.forEach((element) => {
            arraySpecies.push(element);
          });
        } else {
          const APISpecieList = SpeciesLinkAPI.searchSpecies(especie); // retorna promisse
          if (APISpecieList.length > 0) { // se a API retornar
            APISpecieList.forEach((element) => {
              arraySpecies.push(element);
            });
            SpeciesLinkCache.save(arraySpecies); // armazenar em cache
          }
        }
      });
    }, Promise.resolve());
  } catch (e) {
    throw new Error('error');
  } finally {
    // eslint-disable-next-line no-unsafe-finally
    return arraySpecies;
  }
}

export async function getNumberOfValidSpecies() {
  return arraySpecies.length;
}
