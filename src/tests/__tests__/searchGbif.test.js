const gbif = require('../../gbif/searchGbifSpecies');

describe('Testando busca por especies', () => {
    test('Buscar por especies', async () => {
        const x = await gbif.searchGbifSpecies(['Plantae Orchidaceae'])
        expect(x).toBeDefined(); // a variavel existe
    });
    test('Busca por especíes', () => {
        gbif.searchGbifSpecies('fjshgj hgdahg')
        .then((result) => {
        })
        .catch((error) => {
            expect(error).toEqual('error');
        })
      });
});