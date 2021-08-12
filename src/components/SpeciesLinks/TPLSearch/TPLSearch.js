// var SpeciesLinkAPI = require('../Cache/SpeciesLinkAPI')
// var SpeciesLinkCache = require('../Cache/SpeciesLinkCache')
var express = require(express)


let arraySpecies = [];

const search = async function searchSpeciesList(speciesList) {
    arraySpecies = [];
    speciesList.forEach((especie) => {
        if (await SpeciesLinkCache.find(especie)){ //se existe em cache //talvez usar then catch
            arraySpecies.push(especie);
        } else{
            if (await SpeciesLinkAPI.searcSpecies(especie)){ //se a API retornar
                arraySpecies.push(especie);
                SpeciesLinkCache.save(especie); //armazenar em cache
            }
        }
    });
}

const quantity = async function getNumberOfValidSpecies() {
    return arraySpecies.length;
}
module.exports = { search, quantity }