import { validadeFile } from './fileUploader';

function validateSpecies(filename) {
  // Iniciando validate species
  validadeFile(filename)
    .then((output) => {
      // eslint-disable-next-line no-console
      console.log(output);
    })
    .catch((erro) => {
      // eslint-disable-next-line no-console
      console.log(erro);
    });
}

module.exports = { validateSpecies };
