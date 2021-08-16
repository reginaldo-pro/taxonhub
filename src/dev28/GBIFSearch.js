// var GBIFAPI = require('../API/GBIFAPI')
// var GBIFCache = require('../Cache/GBIFCache')

//função que procura a especie de uma lista na cache do GBIF e caso exista
// da um push no array, caso não exista ele procura na api, se existir
// da um push no array e um save na cache. Por fim, retorna o array
let Species = [];
export async function searchSpecies(speciesList) {
    try {
        Species = [];
        speciesList.forEach((especie) => {
            const hasSpecie = GBIFCache.find(especie);
            if (hasSpecie) {
                Species.push(especie);
            }
            else {
                let APISpecie = GBIFAPI.searchSpecies(especie);
                if (APISpecie) {
                    Species.push(especie);
                    GBIFCache.save(especie);
                }
            }
        });
    }
    catch (e) {
        throw new Error('error');
    }
    return Species;
}