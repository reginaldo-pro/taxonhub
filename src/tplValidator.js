import { validadeFile } from './fileUploader';

function validateSpecies(filename) {
  // Iniciando validate species

  return new Promise((resolve, reject) => {
    validadeFile(filename)
      .then((output) => {
        resolve(output)
      })
      .catch((error) => {
        reject(error)
      })
  })

}

module.exports = { validateSpecies };
