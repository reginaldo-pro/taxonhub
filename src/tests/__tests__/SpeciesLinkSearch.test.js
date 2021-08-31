const tplSearch = require('../../speciesLink/SpeciesLinkSearch');

describe('Testando quantidade de especies', () => {
  test('Quantidade de especies validas', () => {
    const qnt = tplSearch.getNumberOfValidSpecies;
    expect(qnt()).toBeDefined(); // a variavel existe
  });
  test('Quantidade de especies validas', () => {
    const qnt = tplSearch.getNumberOfValidSpecies;
    expect(qnt()).toBeDefined(); // a variavel existe
    // expect(['especie']).toThrowError(); // caso que é pra dar erro
  });
});

// describe('Testando busca por especies', () => {
//   test('Buscar por especies', () => {
//     expect(tplSearch.searchSpeciesList(['Plantae Orchidaceae'])).toBeDefined(); // a variavel existe
//   });
//   test('Buscar por especies', () => {
//     expect(tplSearch.searchSpeciesList(['Plantae Orchidaceae'])).toHaveReturned(); // a funcao retornou
//   });
//   test('Buscar por especies', () => {
//     expect(tplSearch.searchSpeciesList(['especie aleatoria'])).toThrowError('error'); // caso de erro
//   });
//   test('Buscar por especies', () => {
//     expect(tplSearch.searchSpeciesList(['Plantae Orchidaceae', 'especie aleatoria'])).toContain('Plantae Orchidaceae'); // é para ter essas especiese
//   });
// });
