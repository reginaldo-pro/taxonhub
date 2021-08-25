import 'regenerator-runtime/runtime';

import gbifapi from '../../api/gbifapi';

jest.setTimeout(30000);


describe('SearchSpeciesAPI', ()=>{

  /* test('Tamanhos', async ()=>{

    const result = gbifapi.searchSpecies('Vochysia');
    var count = Object.keys(result["result"]).length
    console.log('Resultado: ',count)
  });  */

/*   test('Tamanho do retorno maior que 1', async () => {
    let count = 0;
    const result = await gbifapi.searchSpecies('Taberna disparifolia');
    count = Object.keys(result["result"]).length
    expect(count).toBeGreaterThan(1);
  });
 */
  /*  test('Testing a search species', async () => {

  const result = await gbifapi.searchSpecies('test');
  console.log('Resultado: ', result)
  });  */ 

   /* test('Faz pesquisa com string ', async() => {
  
    const list_name = 'Eichhornia azurea';
  
    return gbifapi.searchSpecies(list_name).then(result => {
        console.log('Resultado: ', result)
      });
  }); 
 */
 /*   test('Tamanho do retorno maior que 1', async () => {
    let count = 0;
    const result = await gbifapi.searchSpecies('Taberna disparifolia');
    count = Object.keys(result["result"]).length
    expect(count).toBeGreaterThan(1);
  });
   */
  /*  test('Faz pesquisa baseada na lista ', async() => {
    //const gbif = new gbifapi.searchSpecies;
  
    const list_name = ['Ocimum', 'Eichhornia azurea'];
  
    return gbifapi.searchSpecies(list_name).then(result => {
        console.log('Resultado: ', result)
      });
  }); 
   */
  
  /*  test('Faz pesquisa com string ', async() => {
    //const gbif = new gbifapi.searchSpecies;
  
    const list_name = 'Eichhornia azurea';
  
    return gbifapi.searchSpecies(list_name).then(result => {
        //expect(result.status).toBe(422)
        //console.log('Resultado: ', result)
      });
    }); 
 */
  /*  test('Faz pesquisa com lista vazia ', async() => {
    //const gbif = gbifapi.searchSpecies;
  
    const list_name = [];
  
    return gbifapi.searchSpecies(list_name).then(result => {
        expect(result.status).toBe(422),
        expect(result.message).toBe("Error: O parametro teria que retornar vazio");
      });
  });
 */
  test('Testing a search species', async () => {

    const result = await gbifapi.searchSpecies('Alfaroa Standl');
    console.log('Resultado: ', result)
  });  
  

});  
