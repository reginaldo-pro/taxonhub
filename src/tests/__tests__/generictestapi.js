import 'regenerator-runtime/runtime';

import gbifapi from '../../api/gbifapi';

jest.setTimeout(30000);

/**
 * Testes do GBIF
 *  */

/*  test('Testing a search species', async () => {

  const result = await searchSpecies('test');
  console.log('Resultado: ', result)
});  */
test('Tamanho do retorno maior que 1', async () => {
  let count = 0;
  const result = await gbifapi.searchSpecies('Taberna disparifolia');
  count = Object.keys(result["result"]).length
  expect(count).toBeGreaterThan(1);
});

test('Tamanho do retorno igual 0', async () => {
  let count = 0;
  const result = await gbifapi.searchSpecies('aaaa');
  count = Object.keys(result["result"]).length
  expect(count).toBe(0);
});

 
 test('Faz pesquisa com lista vazia ', async() => {
  const gbifapi = new sgbifapi.searchSpecies;

  const list_name = [];

  return gbifapi.searchSpecies(list_name).then(result => {
      expect(result.status).toBe(422),
      expect(result.message).toBe("Error: O parametro teria que retornar vazio");
    });
});

test('Faz pesquisa com string ', async() => {
  const gbif = new gbifapi.searchSpecies;

  const list_name = 'Eichhornia azurea';

  return gbif.searchSpecies(list_name).then(result => {
      expect(result.status).toBe(422)
    });
});

test('Faz pesquisa baseada na lista ', async() => {
  const gbif = new gbifapi.searchSpecies;

  const list_name = ['Ocimum', 'Eichhornia azurea'];

  return gbif.searchSpecies(list_name).then(result => {
      expect(result.status).toBe(200)
    });
});