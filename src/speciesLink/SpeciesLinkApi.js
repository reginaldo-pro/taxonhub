import React, { Component } from "react";
import { hot } from "react-hot-loader";
import axios from 'axios'

function api() {
  fetch('http://api.splink.org.br/datasets/format/json', {
    method: 'GET',
    headers: {
    'Content-Type': 'application/json',
    //'Access-Control-Allow-Origin': '*'
    'Origin': 'https://api.splink.org.br'
    }
  })
  .then(response => response.json())
  .then(data => console.log(data));
}

/*
 *      headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
          }
 */
function api2() {
  console.log("-------------");
  const fetchData = () => {
    axios.get('https://api.splink.org.br/records/ScientificName/Eichhornia%20azurea/Synonyms/flora2020/Format/JSON',{
    headers:{
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Origin": "*"
    }

    })
        .then((response) => console.log(response.data))
        .catch((err) => {
            console.error("Erro: " + err);
  });
}
  fetchData();
  console.log("-------------");
}
function test(){
  _download = async (sp_names) => {
        return await new Promise((resolve, reject) => {
            return axios.get(
                'https://api.splink.org.br/records/ScientificName/Eichhornia%20azurea/Synonyms/flora2020/Format/JSON'
            ).then(response => {
                console.log("[SPL] Download de: " + response.data.result.length + " ocorrências.")
                resolve(response.data.result)
            }).catch(er => {
                reject(er)
            })
        })
  }
}
class SpeciesLinkApi extends Component {
    render() {
        api2();
        const mockData = [ "Eichhornia azurea", "Cantinoa althaeifolia" ];
        const lista = mockData.map((number) =>
            <li>{number}</li>
        );

        return (
            <div>
                <h1>API do Species Link :^)</h1>
                <b>Lista de Nomes:</b>
                {lista}
            </div>
        );
    }
}

export default hot(module)(SpeciesLinkApi);
