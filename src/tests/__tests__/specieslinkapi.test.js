import 'regenerator-runtime/runtime'
import SpeciesLinkAPI from '../../API/SpeciesLinkAPI';
jest.setTimeout(30000);

test('Testing a search for fun', async () => {
  const result = await SpeciesLinkAPI.searchSpecies('Vochysia');
    //console.log('Resultado: ', result)
});

