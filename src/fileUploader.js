const CsvReader = require('promised-csv');

function multiDimensionalUnique(arr) {
  var uniques = [];
  var itemsFound = {};
  for(var i = 0, l = arr.length; i < l; i++) {
      var stringified = JSON.stringify(arr[i]);
      if(itemsFound[stringified]) { continue; }
      uniques.push(arr[i]);
      itemsFound[stringified] = true;
  }
  return uniques;
}


function validadeFile(filename) {
  return new Promise((resolve, reject) => {
    var reader = new CsvReader();
    var output = [];

    reader.on('row', data => {
      // data is an array of data. You should
      // concatenate it to the data set to compile it.

      var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/

      // Pula linhas em branco
      if (data.length > 0) {
        data = data[0].split(' ');

        // Retorna erro se algum elemento conter caracteres inválidos
        if (format.test(data[0]) == true || format.test(data[1]) == true) throw new Error('File contains samples with illegal characters')

        // Retorna erro se algum dos elementos não for binário
        if (data.length != 2) throw new Error('File contains non-binary samples')

        output = output.concat([data]);
      }
    });

    reader.on('done', () => {
      // output will be the compiled data set.
      if (output.length == 0) {
        throw new Error('Empty file.')
      } else {
        // Remove duplicatas
        output = multiDimensionalUnique(output)
        resolve(output);
      }
    });

    reader.on('error', err => reject(err));

    reader.read(filename);
  })
}

module.exports = { validadeFile}