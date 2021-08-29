import { validadeFile } from "./fileUploader";

function save(speciesList) {
  // mock save Database

  return new Promise((resolve, reject) => {
    resolve(true);
  });
}

function tplScraper(speciesList) {
  // mock do tplScraper

  let mockReturn = [
    {
      searchName: "Ananas comosus",
      returnName: "Ananas comosus (L.) Merr.",
      status: "Aceito",
      synonym: "",
      database: "TPL",
      family: "Bromeliaceae",
    },
    {
      searchName: "Ananas comosus",
      returnName: "Ananas comosus (L.B.Sm.) Camargo",
      status: "sinonimo",
      synonym: "Ananas comosus (L.) Merr.",
      database: "TPL",
      family: "Bromeliaceae",
    },
    {
      searchName: "Ananas comosus",
      returnName: "Ananas comosus (Baker) Coppens & F.Leal",
      status: "sinonimo",
      synonym: "Ananas comosus (L.) Merr.",
      database: "TPL",
      family: "Bromeliaceae",
    },
    {
      searchName: "Euterpe oleracea",
      returnName: "Euterpe oleracea Mart.",
      status: "Aceito",
      synonym: "",
      database: "TPL",
      family: "Arecaceae",
    },
    {
      searchName: "Euterpe oleracea",
      returnName: "Euterpe oleracea Engel",
      status: "sinonimo",
      synonym: "Euterpe oleracea Mart.",
      database: "TPL",
      family: "Arecaceae",
    },
  ];
  return new Promise((resolve, reject) => {
    resolve(mockReturn);
  });
}

function validateSpecies(filename) {
  // Iniciando validate species

  return new Promise((resolve, reject) => {
    validadeFile(filename) // chama o validateFile
      .then((output) => {
        tplScraper(output).then((scraperOutput) => {
          // chama tplScraper - MOCK
          // recebe do Scraper os dados das espécies e tenta salvar no banco
          save(scraperOutput).then(() => {
            resolve(scraperOutput);
          });
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
}

module.exports = { validateSpecies };
