import 'regenerator-runtime/runtime'
import SpeciesLinkAPI from '../../API/SpeciesLinkAPI';
jest.setTimeout(30000);

describe('Função searchSpecies na classe SpeciesLinkAPI', () => {

    test('Tamanho do retorno maior que 1', async () => {
        let count = 0;
        const result = await SpeciesLinkAPI.searchSpecies('Taberna disparifolia');
        console.log(result)
        count = Object.keys(result["result"]).length
        expect(count).toBeGreaterThan(1);
    });

    test('Tamanho do retorno igual 0', async () => {
        let count = 0;
        const result = await SpeciesLinkAPI.searchSpecies('aaaa');
        count = Object.keys(result["result"]).length
        expect(count).toBe(0);
    });

    test('Verificando se result["0"]["record_id"] = "1"', async () => {
        let count = 0;
        const result = await SpeciesLinkAPI.searchSpecies('Taberna disparifolia');
        count = (result["result"]["0"]["record_id"])
        expect(count).toBe("1");

    });



});
