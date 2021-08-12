//jest.mock('node-fetch');
require('jest-fetch-mock').enableMocks()
//import fetch from 'node-fetch';
import {SpeciesLinkApi} from "../../speciesLink/SpeciesLinkApi.js"
import 'regenerator-runtime/runtime';

const api = new SpeciesLinkApi();

const MOCK_DATA_TRUE = (([
            "Eichhornia azurea"
            ,"Cantinoa althaeifolia"
            ]));

const MOCK_DATA_FALSE = (([ "" ]));


async function testApiValid(data){
    console.log("DATA: "+data)
    const jsonResult= await api.searchSpeciesAPI(data);
    jsonResult.then(data => {
        console.log("RL: "+ data.resul)

    })
    //if (jsonResult.length >= 1) return true;
    return false;
};

describe('testing api', () => {
    beforeEach(() => {
        fetch.resetMocks()
      });

    it('Test',async () => {
        fetch.mockResponseOnce(MOCK_DATA_TRUE);
        const res = await testApiValid(MOCK_DATA_TRUE);
        expect(res).toBe(false);
    });
})
/*describe('Função searchSpeciesAPI', () => {

    test('Entrada da função verdadeira', () => {
      expect(testApiValid(MOCK_DATA_TRUE)).toBe(true);
    });
});
*/
