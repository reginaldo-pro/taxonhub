import 'regenerator-runtime/runtime';

//import gbifapi from '../../api/gbifapi';
import searchSpecies from '../../api/gbifapi'

jest.setTimeout(30000);

 describe('SearchSpeciesAPI', ()=>{

 /*  test('Tamanho do retorno maior que 1', async () => {
    let count = 0;
    const result = await searchSpecies('Taberna disparifolia');
    count = Object.keys(result["result"]).length
    expect(count).toBeGreaterThan(1);
});
 */
  
/* test('Tamanho do retorno igual 0', async () => {
    let count = 0;
    const result = await searchSpecies('aaaaaa');
    count = Object.keys(result["result"]).length
    expect(count).toBe(0);
  }); */

    test('Testing a search species', async () => {
    const result = await searchSpecies('Alfaroa Standl');
    console.log('Resultado: ', result)
  });  
  
});  
