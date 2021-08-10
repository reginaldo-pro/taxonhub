function FDBApi(speciesName, callback){
    console.log('Nome espécie: ', speciesName);
    let xhr = new XMLHttpRequest();

    xhr.onload = function () { 
        if((xhr.readyState == 0 || xhr.readyState == 4) && xhr.status == 200)
          callback(this.responseText) 
    };

    xhr.open('GET', 'https://cors-anywhere.herokuapp.com/http://servicos.jbrj.gov.br/flora/taxon/' + speciesName, true);
    xhr.send();
}

export function getTaxon(speciesName, callback) {
    FDBApi(speciesName, data => callback(JSON.parse(data)));
}