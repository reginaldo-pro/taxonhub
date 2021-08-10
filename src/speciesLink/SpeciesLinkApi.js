import React, { Component } from "react";
import { hot } from "react-hot-loader";
import axios from 'axios';

function api2(lista) {
    const param = lista.join("/")
    console.log("OIA A LISTAAAA ",lista)
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.splink.org.br/records/ScientificName/${param}/Synonyms/flora2020/Format/JSON`)
    .then(response => {
        return response.json()
    })
}


const mockData = (([
            "Eichhornia azurea"
            ,"Cantinoa althaeifolia"
            ,"Abildgaardia ovata"
            ,"Abolboda pulchella"
            ,"Acisanthera inundata"
            ,"Rauvolfia sellowii"
            ,"Cantinoa althaeifolia"
            ,"Abarema turbinata",
                    "Comolia villosa",
                    "Stylosanthes campestris",
                    "Vochysia floribunda",
                    "Eugenia platyphylla",
                    "Chaetocalyx acutifolia",
                    "Actinocephalus ochrocephalus",
                    "Cicuta douglasii",
                    "Annona senegalensis",
                    "Hexasepalum radula",
                    "Trichosalpinx dura",
                    "Allophylus sericeus",
                    "Microlicia juniperina",
                    "Campomanesia pubescens",
                    "Luxemburgia ciliosa",
                    "Dalechampia humilis",
                    "Croton heliotropiifolius",
                    "Senna alata",
                    "Ipomoea dichotoma",
                    "Arundo donax"]));


class SpeciesLinkApi extends Component {

      constructor(props) {
        super(props);
        this.state = {error : null, isLoaded : false, items : [], count: 0, chunks: 0};
      }

      componentDidCatch(error, errorInfo) {
          console.log("ERRO: " + error);
          console.log("ERRO-INFO: " + errorInfo);
       }

        componentDidMount() {
          const getPages = (i) => {
            this.setState({
                count : this.state.count+1
            })
            const start = i * 5;
            const end = start + 5;
            const list = mockData.slice(start, end);
            if(list.length == 0){
              this.setState({
                isLoaded : true
                })
              return ;
            }

            api2(list)
                .then(data => {
                    const result = this.state.items.concat(data.result)

                    this.setState({
                      items : result
                     });

                    getPages(i+1)
                })
            .catch(error => { this.setState({error : error.message}); })

          };
          const length = mockData.length;
          const chunks = Math.ceil(length / 5);
          this.setState({
            chunks : chunks
          })
          getPages(0);
        }

        render() {

        if (this.state.error) {
            return <h1>{this.state.error}</h1>
        }

        if(!this.state.isLoaded){
            return <h1>Carregando {this.state.count}/{this.state.chunks}</h1>
        }

        console.log(this.state.items)

        const items = this.state.items.map(x => {
            return <li key={x.record_id+x.scientificName}> {x.record_id}:{x.institutionCode}     {x.county}</li>
        });
             const lista = mockData.map((number) =>
            <li key={number.toString()}>{number}</li>
        );

        return (
            <div>
                <h1>API do Species Link :^)</h1>
                <b>Lista de Nomes:</b>
                {lista}
                {items}
            </div>
        );
    }
      }

export default hot(module)(SpeciesLinkApi);
