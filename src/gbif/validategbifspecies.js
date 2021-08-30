
/**
Verificando se o cvs é válido. 
É recebido um arquivo csv para analise e triagem. 
*/

export const validatecvs = (file) => {
    if ( file.type == 'text/csv') {
        return (true);
    }
    return (false);
}
/**
Verificando e retirando nomes não binomiais
É recebido um arquivo csv para analise e triagem. 
*/

export const binames = (result) => {

    const nomesbinomiais = [];
    result.map((scientificName) => {
        if (scientificName.split(' ').length != 2) {
          return nomesbinomiais.push(scientificName);
        }

    })
    return {nomesbinomiais}
}
/**
Verificando e retirando registros sem latitude.
É recebido um arquivo csv para analise e triagem. 
*/
export const nolatitude = (result) => {

    const listdecimalLatitude = [];
    
    result.map((decimalLatitude) => {
        if (decimalLatitude == " " || decimalLatitude == "" || decimalLatitude == "0") {
          return listdecimalLatitude.push(decimalLatitude);
        }

    })
    return {listdecimalLatitude}
}
/**
Verificando e retirando registros sem longitude.
É recebido um arquivo csv para analise e triagem. 
*/
export const nolongitude = (result) => {

    const listdecimalLongitude = [];
    
    result.map((decimalLongitude) => {
        if (decimalLongitude == " " || decimalLongitude == "" || decimalLongitude == "0") {
          return listdecimalLongitude.push(decimalLongitude);
        }

    })
    return {listdecimalLongitude}
}






