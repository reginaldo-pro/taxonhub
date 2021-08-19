import searchSpecies from '../../api/gbifapi';

test('Testing a search for fun', async () => {
  const result = await searchSpecies('Vochysia');
  console.log('Resultado: ', result)
});