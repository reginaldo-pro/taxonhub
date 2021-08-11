require("babel-polyfill")

const fileUploader = require('../fileUploader');

describe('Teste de diferentes CSVs de entrada', () => {
  test("Enviando um CSV válido", async () => {
    const result = await fileUploader.validadeFile('./utils/taxon.csv')
    console.log(result)
    expect(result).toStrictEqual([["Ananas", "comosus"], ["Euterpe", "oleracea"]]);
  });

  // test('Testar envio de arquivo CSV vazio', async () => {
  //   const result = await fileUploader.validadeFile('../../utils/taxon_vazio.csv')
  //   console.log(result);
  //   expect(result).toBe(406);
  // });

  // test('Testar envio de arquivo válido', () => {
  //   fileUploader.validadeFile('./utils/taxon.csv')
  //   .then((result) => {
  //       console.log(result);
  //       expect(result).toEqual(0);
  //   })
  //   .catch((error) => {
  //       console.log(error);
  //       expect(error).toEqual('406');
  //   })
  // });

});
