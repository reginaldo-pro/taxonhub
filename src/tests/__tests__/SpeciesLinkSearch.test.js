const tplSearch = require('../../speciesLink/SpeciesLinkSearch');

test('Quantidade de especies validas', () => {
  const qnt = tplSearch.getNumberOfValidSpecies;
  expect(qnt()).toBeDefined(); // a variavel existe
  expect(qnt()).toHaveReturned(); // a funcao retornou
  // expect(['especie']).toThrowError(); // caso que é pra dar erro
});

test('Buscar por especies', () => {
  const find = tplSearch.searchSpeciesList;
  expect(find(['Plantae Orchidaceae'])).toBeDefined(); // a variavel existe
  expect(find(['Plantae Orchidaceae'])).toHaveReturned(); // a funcao retornou
  expect(find(['especie aleatoria'])).toThrowError('error'); // caso de erro
  expect(find(['Plantae Orchidaceae', 'especie aleatoria'])).toContain('Plantae Orchidaceae'); // é para ter essas especies
});
