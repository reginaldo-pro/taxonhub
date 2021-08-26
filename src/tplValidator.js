import { validadeFile } from './fileUploader';

function validateSpecies(filename) {
  // Iniciando validate species
  
  validadeFile(filename)
    .then((output) => {
      console.log("validado")
      console.log(output)
      return(output)
    })
    .catch((output) => {
      console.log("nao validado")
      console.log(output)
      return output
    })
}

module.exports = { validateSpecies };
