// http://bluebirdjs.com/docs/api/promise.each.html
// https://css-tricks.com/why-using-reduce-to-sequentially-resolve-promises-works/

// var SpeciesLinkAPI = require('../API/SpeciesLinkAPI')
// var SpeciesLinkCache = require('../Cache/SpeciesLinkCache')

let arraySpecies = [];
// export async function searchSpeciesList(speciesList) {
//   try {
//     arraySpecies = [];
//     speciesList.forEach((especie) => {
//       const hasSpecie = SpeciesLinkCache.find(especie);
//       if (hasSpecie) { //se existe em cache //talvez usar then catch
//         arraySpecies.push(especie);
//       } else {
//         let APISpecie = SpeciesLinkAPI.searcSpecies(especie); // retorna promisse
//         if (APISpecie) { //se a API retornar
//           arraySpecies.push(especie);
//           SpeciesLinkCache.save(especie); //armazenar em cache
//         }
//       }
//     });
//   } catch (e) {
//     throw new Error('error');
//   } finally {
//     // eslint-disable-next-line no-unsafe-finally
//     return arraySpecies;
//   }
// }

export async function searchSpeciesList(speciesList) {
  try {
    arraySpecies = [];
    speciesList.reduce((accumulator, especie) => {
      return accumulator.then(() => {
        const hasSpecie = SpeciesLinkCache.find(especie);
        if (hasSpecie) { //se existe em cache //talvez usar then catch
          arraySpecies.push(especie);
        } else {
          let APISpecie = SpeciesLinkAPI.searcSpecies(especie); // retorna promisse
          if (APISpecie) { //se a API retornar
            arraySpecies.push(especie);
            SpeciesLinkCache.save(especie); //armazenar em cache
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
