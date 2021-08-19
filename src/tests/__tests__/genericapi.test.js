import searchSpecies from '../api/api';

test('Testing a search for fun', async () => {
  const result = await searchSpecies('Vochysia');
  console.log('Resultado: ', result)
});