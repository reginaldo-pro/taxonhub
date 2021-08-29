const GBIFAPI = require('../api/gbifapi')
//const GBIFCache = require('../Cache/GBIFCache') NAO FORAM IMPLEMENTADAS

//função que procura a especie de uma lista na cache do GBIF e caso exista
// da um push no array, caso não exista ele procura na api, se existir
// da um push no array e um save na cache. Por fim, retorna o array
let species = [];
export async function searchGbifSpecies(speciesList) {
    try {
        species = [];
        speciesList.reduce((accumulator, especie) => { //reduce como o prof havia falado
            return accumulator.then(() => {
                // como a cache nao foi implementada, estou comentando tudo que usa a cache para o
                //teste funcionar
                //const hasSpecie = GBIFCache.find(especie);
                // checa se o tamanho de has specie é >0 para saber se tem algum elemento dentro para
                //fazer a procura 
                //if (hasSpecie.length > 0) {
                //    hasSpecie.forEach((element) => {
                //    species.push(element);});
                //}
                //else {
                //a funçao do gabriel por padrao é a defaul na api dele
                let APISpecie = GBIFAPI.default(especie);
                // pega a promisse se houver element dentro de api
                if (Object.keys(APISpecie.result).length > 0) {
                    APISpecie.result.forEach((element) => {
                        species.push(element.scientificname);
                    });
                    //GBIFCache.save(species); 
                }
            });
        }, Promise.resolve());
    } catch (e) {
        throw new Error('error');
    } finally {
        return species;
    }

}
