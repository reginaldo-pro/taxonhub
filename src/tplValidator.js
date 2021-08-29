import { validadeFile } from './fileUploader';

function tplScraper(speciesList){
  // mock do tplScraper

  let mockReturn = [
    {
      searchName: 'Eichhornia azurea',
      returnName: 'Eichhornia azurea (Sw.) Kunth',
      status: 'Aceito',
      synonym: '',
      database: 'TPL',
      family: 'Pontederiaceae'
    },
    {
      searchName: "Eichhornia azurea",
      returnName: "Eichhornia azurea rhizantha (Seub.)",
      status: "sinonimo",
      synonym: "Eichhornia azurea (Sw. Kunth)",
      database: "FDB",
      family: "Pontederiaceae"
    },
  ]
  return new Promise((resolve, reject) => {
    resolve(mockReturn);
  })
}

function validateSpecies(filename) {
  // Iniciando validate species

  return new Promise((resolve, reject) => {
    validadeFile(filename) // chama o validateFile
      .then((output) => {
        tplScraper(output).then((scraperOutput) => { // chama tplScraper - MOCK
          resolve(scraperOutput)
        })
       
      })
      .catch((error) => {
        reject(error)
      })
  })

}

module.exports = { validateSpecies };
