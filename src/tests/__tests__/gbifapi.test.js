import 'regenerator-runtime/runtime';

//import gbifapi from '../../api/gbifapi';
import searchSpeciesapi from '../../api/gbifapi'

//jest.setTimeout(30000);

 describe('SearchSpeciesAPI', ()=>{
 
  test('Tamanho do retorno maior que 1', async () => {
    let count = 0;
    const result = await searchSpeciesapi('Monstera deliciosa');
    count = result["count"]
    console.log(count);
    expect(count).toBeGreaterThan(1);
});

   test('Tamanho do retorno igual 0', async () => {
    let count = 0;
    const result = await searchSpeciesapi('uahsgd');
    count = result["count"]
    expect(count).toBeGreaterThan(1000000000);
  }); 

     /*  test('Testing a search species', async () => {
        const result = await searchSpeciesapi('Monstera deliciosa');
        console.log('Resultado: ', result)
      });  
 */
  });