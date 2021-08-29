require("babel-polyfill")
const tplValidator = require('../../tplValidator');

let retornoEsperadoMock = [
    {
      searchName: "Ananas comosus",
      returnName: "Ananas comosus (L.) Merr.",
      status: "Aceito",
      synonym: "",
      database: "TPL",
      family: "Bromeliaceae",
    },
    {
      searchName:  "Ananas comosus",
      returnName: "Ananas comosus (L.B.Sm.) Camargo",
      status: "sinonimo",
      synonym: "Ananas comosus (L.) Merr.",
      database: "TPL",
      family: "Bromeliaceae",
    },
    {
      searchName:  "Ananas comosus",
      returnName: "Ananas comosus (Baker) Coppens & F.Leal",
      status: "sinonimo",
      synonym: "Ananas comosus (L.) Merr.",
      database: "TPL",
      family: "Bromeliaceae",
    },
    {
      searchName: "Euterpe oleracea",
      returnName: "Euterpe oleracea Mart.",
      status: "Aceito",
      synonym: "",
      database: "TPL",
      family: "Arecaceae",
    },
    {
      searchName: "Euterpe oleracea",
      returnName: "Euterpe oleracea Engel",
      status: "sinonimo",
      synonym: "Euterpe oleracea Mart.",
      database: "TPL",
      family: "Arecaceae",
    },
  ]

describe('Testes com vários CSV de entrada', () =>{
    test("Verificando com CSV válido", async () => {
        const retorno = await tplValidator.validateSpecies('./utils/taxon.csv')
        expect(retorno).toStrictEqual(retornoEsperadoMock)
    });

    test("Verificando com CSV com linhas em branco", async () => {
        const retorno = await tplValidator.validateSpecies('./utils/taxon_blank_lines.csv')
        expect(retorno).toStrictEqual(retornoEsperadoMock)
    });

    test("Verificando com CSV dados repetidos", async () => {
        const retorno = await tplValidator.validateSpecies('./utils/taxon_duplicate_data.csv')
        expect(retorno).toStrictEqual(retornoEsperadoMock)
    });

    test('Enviando um CSV vazio', () => {
        tplValidator.validateSpecies('./utils/taxon_empty.csv')
        .then((result) => {
        })
        .catch((error) => {
            expect(error).toEqual('File is empty.');
        })
    });

    test('Enviando um CSV com nomes não binomiais', () => {
       tplValidator.validateSpecies('./utils/taxon_non-binomial.csv')
        .then((result) => {
        })
        .catch((error) => {
            expect(error).toEqual('File contains non-binary samples.');
        })
    });
    
    test('Enviando um CSV com nomes contendo carácteres ilegais', () => {
   tplValidator.validateSpecies('./utils/taxon_illegal_character.csv')
    .then((result) => {
    })
    .catch((error) => {
        expect(error).toEqual('File contains samples with illegal characters.');
    })
    });
})