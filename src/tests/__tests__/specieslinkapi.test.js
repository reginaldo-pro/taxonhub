import 'regenerator-runtime/runtime'
import {searchSpecies} from '../../API/SpeciesLinkAPI';
jest.setTimeout(30000);
test('Testing a search for fun', async () => {
  const result = await searchSpecies('Vochysia');
    //console.log('Resultado: ', result)
});

