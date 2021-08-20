function arrayData(element, index, array) {

}

/**
 * Método: FDBApi
 * Sua função é realizar uma requisicao para a API: Flora do Brasil
 * @param { String } speciesName: nome da especie para realizar a busca
 * @param {*} callback: metodo de retorno
 */
function FDBApi(speciesName, callback) {
    //console.log('Nome da espécie: ', speciesName);

    // crio um objeto do tipo XMLHttpRequest 
    let xhr = new XMLHttpRequest();

    // escuto o evento de retorno da requisicao
    xhr.onload = function () {
        // caso de tudo certo com a requisicao
        if ((xhr.readyState == 0 || xhr.readyState == 4) && xhr.status == 200) {
            //console.log('Resposta API sucess: ', JSON.parse(this.responseText));

            // passo a string para json e crio um atributo chamado status
            let response = JSON.parse(this.responseText);
            let resposta = [];
            response.status = xhr.status;
            
            if (null == response.result) {
                resposta.nome_retornado = '';
                resposta.nome_aceito = '';
                resposta.sinonimo = '';
                resposta.synonyms_list = []
            } else {
                resposta.nome_retornado = [];

                response.result.forEach((data, index) => {
                    resposta.nome_retornado.push(data.genus);
                    resposta.nome_aceito.push(data.scientificname);
                    resposta.taxonomicstatus.push(data.taxonomicstatus);

                    resposta.synonyms_list = [];
                    
                });
            }

            console.log('olha a resposta: ', resposta)

            // retorno a string da resposta
            callback(JSON.stringify(response));

            // caso a requisicao tenha falhado
        } else if (xhr.status != 200) {
            //console.log('Resposta API error: ', xhr);

            // crio e envio uma string com apenas o atributo de status
            callback(JSON.stringify({ status: xhr.status }));
        }

    };

    // crio a requisicao
    xhr.open('GET', 'https://cors-anywhere.herokuapp.com/http://servicos.jbrj.gov.br/flora/taxon/' + speciesName, true);

    // envio a requisicao
    xhr.send();
}

/**
 * Método: getTaxon
 * É a funcao que exporta o metodo implementado do FDBApi
 * @param { String } speciesName: nome da especie para realizar a busca
 * @param {*} callback: metodo de retorno
 */
export function getTaxon(speciesName, callback) {
    FDBApi(speciesName, (data) => callback(JSON.parse(data)));
}