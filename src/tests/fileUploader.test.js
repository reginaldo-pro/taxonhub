require("babel-polyfill")

const fileUploader = require('../fileUploader');

describe('Teste de diferentes CSVs de entrada', () => {
  test("Enviando um CSV válido", async () => {
    const result = await fileUploader.validadeFile('./utils/taxon.csv')
    expect(result).toStrictEqual([["Ananas", "comosus"], ["Euterpe", "oleracea"]]);
  });

  test("Enviando um CSV com linhas em branco", async () => {
    const result = await fileUploader.validadeFile('./utils/taxon_blank_lines.csv')
    expect(result).toStrictEqual([["Ananas", "comosus"], ["Euterpe", "oleracea"]]);
  });

  test("Enviando um CSV com dados repetidos", async () => {
    const result = await fileUploader.validadeFile('./utils/taxon_duplicate_data.csv')
    expect(result).toStrictEqual([["Ananas", "comosus"], ["Euterpe", "oleracea"]]);
  });

  test("Enviando um CSV com string Uper Case no segundo nome", async () => {
    const result = await fileUploader.validadeFile('./utils/taxon_upercase.csv')
    expect(result).toStrictEqual([["Ananas", "comosus"], ["Euterpe", "oleracea"]]);
  });

  test('Enviando um CSV vazio', () => {
    fileUploader.validadeFile('./utils/taxon_empty.csv')
    .then((result) => {
    })
    .catch((error) => {
        expect(error).toEqual('File is empty.');
    })
  });

  test('Enviando um CSV com nomes não binomiais', () => {
    fileUploader.validadeFile('./utils/taxon_non-binomial.csv')
    .then((result) => {
    })
    .catch((error) => {
        expect(error).toEqual('File contains non-binary samples.');
    })
  });

  test('Enviando um CSV com nomes contendo carácteres ilegais', () => {
    fileUploader.validadeFile('./utils/taxon_illegal_character.csv')
    .then((result) => {
    })
    .catch((error) => {
        expect(error).toEqual('File contains samples with illegal characters.');
    })
  });

});
