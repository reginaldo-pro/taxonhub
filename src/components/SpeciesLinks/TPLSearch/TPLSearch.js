// var SpeciesLinkAPI = require('../API/SpeciesLinkAPI')
// var SpeciesLinkCache = require('../Cache/SpeciesLinkCache')

let arraySpecies = [];
export async function searchSpeciesList(speciesList) {
  try {
    arraySpecies = [];
    speciesList.forEach((especie) => {
      const hasSpecie = SpeciesLinkCache.find(especie);
      if (hasSpecie) { //se existe em cache //talvez usar then catch
        arraySpecies.push(especie);
      } else {
        let APISpecie = SpeciesLinkAPI.searcSpecies(especie);
        if (APISpecie) { //se a API retornar
          arraySpecies.push(especie);
          SpeciesLinkCache.save(especie); //armazenar em cache
        }
      }
    });
  } catch (e) {
    throw new Error('error');
  } finally {
    return arraySpecies;
  }
}
export async function getNumberOfValidSpecies() {
  return arraySpecies.length;
}
