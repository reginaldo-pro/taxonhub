import 'regenerator-runtime/runtime';
import axios from 'axios';
axios.defaults.adapter = require('axios/lib/adapters/http');

/**
 * Método: FDBApi
 * Sua função é realizar uma requisicao para a API: Flora do Brasil
 * @param { String } speciesName: nome da especie para realizar a busca
 */
const FDBApi = async (speciesName) => {
  return axios
    .get('http://servicos.jbrj.gov.br/flora/taxon/' + speciesName)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        throw new Error(
          `Website response error with status: ${error.response.status}`,
        );
      } else if (error.request) {
        throw new Error(`Website request error: ${error.request}`);
      } else {
        throw new Error(`Error in setting up the request: ${error.message}`);
      }
    });
};

/**
 * Método: getTaxon
 * É a funcao que exporta o metodo implementado do FDBApi
 * @param { String } speciesName: nome da especie para realizar a busca
 */
const getTaxon = async (speciesName) => {
  try {
    // pego o retorno da requisição
    const searchedData = await FDBApi(speciesName);

    // crio a variavel de retorno
    let resultado = searchedData.result;
    let returnData = new Object();
    returnData.values = [];

    // caso tenha algum resultado
    if (null != resultado) {

      // passo por todos os resultados
      resultado.forEach(value => {

        // caso seja um nome aceito
        if (value.taxonomicstatus == "NOME_ACEITO") {

          // salvo o nome scientifico e a lista de sinonimos
          let data = new Object();
          data.scientificname = value.scientificname;
          data.synonymsList = value.SINONIMO;

          // salvo na variavel de retorno
          returnData.values.push(data);
        }

      });
    }

    return returnData;

  } catch (error) {
    // caso de erro
    throw new Error(error);
  }
  
};

export default getTaxon;
