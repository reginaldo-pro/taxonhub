/**
 * Método: FDBApi
 * Sua função é realizar uma requisicao para a API: Flora do Brasil
 * @param { String } speciesName: nome da especie para realizar a busca
 * @param {*} callback: metodo de retorno
 */
function FDBApi(speciesName, callback){
    //console.log('Nome da espécie: ', speciesName);
    
    // crio um objeto do tipo XMLHttpRequest 
    let xhr = new XMLHttpRequest();

    // escuto o evento de retorno da requisicao
    xhr.onload = function () { 
        // caso de tudo certo com a requisicao
        if((xhr.readyState == 0 || xhr.readyState == 4) && xhr.status == 200){
            // passo a string para json e crio um atributo chamado status
            let response = JSON.parse(this.responseText);
            response.status = xhr.status;
            
            // retorno a string da resposta
            console.log('Resposta API sucess: ', response);
            callback(JSON.stringify(response));
            
            // caso a requisicao tenha falhado
        } else if (xhr.status != 200) {
            console.log('Resposta API error: ', xhr);
            // crio e envio uma string com apenas o atributo de status
            callback(JSON.stringify({status: xhr.status}));
        }
        
    };
    
    // crio a requisicao
    xhr.open('GET', 'http://servicos.jbrj.gov.br/flora/taxon/' + speciesName, true);
    
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