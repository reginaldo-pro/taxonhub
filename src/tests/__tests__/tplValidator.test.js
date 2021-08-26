require("babel-polyfill")
const tplValidator = require('../../tplValidator');


describe('Testes com vários CSV de entrada', () =>{
    test("Verificando com CSV válido", async () => {
        const retorno = await tplValidator.validateSpecies('./utils/taxon.csv')
        expect(retorno).toStrictEqual([["Ananas", "comosus"], ["Euterpe", "oleracea"]])
    });

    test("Verificando com CSV linhas branco", async () => {
        const retorno = await tplValidator.validateSpecies('./utils/taxon_blank_lines.csv')
        expect(retorno).toStrictEqual([["Ananas", "comosus"], ["Euterpe", "oleracea"]])
    });

    test("Verificando com CSV dados repetidos", async () => {
        const retorno = await tplValidator.validateSpecies('./utils/taxon_duplicate_data.csv')
        expect(retorno).toStrictEqual([["Ananas", "comosus"], ["Euterpe", "oleracea"]])
    });
})