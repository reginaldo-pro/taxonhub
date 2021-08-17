const tplSearch = require('../../components/SpeciesLinks/TPLSearch/TPLSearch');

test('Quantidade de especies validas', () => {
  const qnt = tplSearch.getNumberOfValidSpecies;
  expect(qnt()).toBeDefined(); // a variavel existe
  expect(qnt()).toHaveReturned(); // a funcao retornou
  expect(qnt()).toEqual(); // comparar quantidade que deveria retornar
  // expect(['especie']).toThrowError(); // caso que é pra dar erro
});

test('Buscar por especies', () => {
  const find = tplSearch.searchSpeciesList;
  expect(find(['especie'])).toBeDefined(); // a variavel existe
  expect(find(['especie'])).toHaveReturned(); // a funcao retornou
  expect(find(['especie'])).toHaveLength(); // veio um array de tamanho
  expect(Array.isArray(find(['especie']))).toBe(true); // veio um array
  expect(find(['especie'])).toThrowError('error'); // caso de erro
  expect(find(['especie'])).toContain(); // é para ter essas especies
});
