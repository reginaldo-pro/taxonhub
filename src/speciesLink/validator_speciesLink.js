import React, { Component } from "react";
import { hot } from "react-hot-loader";

//Mockup para testar uma entrada valida na função validator.
const DATA_MOCKUP_VALIDATOR = {
    "result" : [  
        { 
            "record_id" : "1", "modified" : "2019-12-04 15:25:17-03", "institutionCode" : "PUCPR", "collectionCode" : "HUCP", "catalogNumber" : "7341", "basisOfRecord" : "S", "kingdom" : "Plantae", "phylum" : "Eudicotiledonea", "family" : "Lamiaceae", "genus" : "Cantinoa", "specificEpithet" : "althaeifolia", "scientificName" : "Cantinoa althaeifolia", "scientificNameAuthorship" : "(Pohl ex Benth.) Harley & J.F.B. Pastore.", "identifiedBy" : "Buchoski, M.G.", "yearIdentified" : "2018", "monthIdentified" : "08", "dayIdentified" : "27", "recordedBy" : "Silva, JM", "recordNumber" : "1095", "year" : "1992", "month" : "04", "day" : "13", "country" : "Brasil", "stateProvince" : "Paraná", "county" : "Curitiba", "locality" : "Jardim Petrópolis", "verbatimLongitude": "-20","verbatimLatitude": "392.0","decimalLongitude" : "-49.2731018066406", "decimalLatitude" : "-25.4277992248535", "coordinatePrecision" : "25180", "barcode" : "HUCP00012208", "imagecode" : "HUCP00012208", "geoFlag" : "auto"
        },{
            "record_id" : "2", "modified" : "2021-07-16 08:46:40-03", "institutionCode" : "PUCPR", "collectionCode" : "HUCP", "catalogNumber" : "26015", "basisOfRecord" : "S", "kingdom" : "Plantae", "phylum" : "Eudicotiledonea", "family" : "Lamiaceae", "genus" : "Cantinoa", "specificEpithet" : "althaeifolia", "scientificName" : "Cantinoa althaeifolia", "scientificNameAuthorship" : "(Pohl ex Benth.) Harley & J.F.B. Pastore.", "identifiedBy" : "Canestraro, BK", "yearIdentified" : "2021", "monthIdentified" : "03", "recordedBy" : "Schmidlim, LAJ", "recordNumber" : "2", "year" : "1999", "month" : "03", "day" : "30", "country" : "Brasil", "stateProvince" : "Paraná", "county" : "Fazenda Rio Grande", "locality" : "Fazenda Experimental Gralha Azul", "verbatimLongitude": "-12","verbatimLatitude": "102","decimalLongitude" : "-49.3081016540527", "decimalLatitude" : "-25.6574993133545", "coordinatePrecision" : "12596", "occurrenceRemarks" : "Inflorescência lilás, arbustiva.", "barcode" : "HUCP00026015", "geoFlag" : "auto"
        },{
            "record_id" : "2", "modified" : "2021-07-16 08:46:40-03", "institutionCode" : "PUCPR", "collectionCode" : "HUCP", "catalogNumber" : "26015", "basisOfRecord" : "S", "kingdom" : "Plantae", "phylum" : "Eudicotiledonea", "family" : "Lamiaceae", "genus" : "Cantinoa", "specificEpithet" : "althaeifolia", "scientificName" : "Cantinoa althaeifolia", "scientificNameAuthorship" : "(Pohl ex Benth.) Harley & J.F.B. Pastore.", "identifiedBy" : "Canestraro, BK", "yearIdentified" : "2021", "monthIdentified" : "03", "recordedBy" : "Schmidlim, LAJ", "recordNumber" : "2", "year" : "1999", "month" : "03", "day" : "30", "country" : "Brasil", "stateProvince" : "Paraná", "county" : "Fazenda Rio Grande", "locality" : "Fazenda Experimental Gralha Azul", "verbatimLongitude": " ","verbatimLatitude": "102","decimalLongitude" : "-49.3081016540527", "decimalLatitude" : "-25.6574993133545", "coordinatePrecision" : "12596", "occurrenceRemarks" : "Inflorescência lilás, arbustiva.", "barcode" : "HUCP00026015", "geoFlag" : "auto"
        }
    ]
}

//Classe que faz a verificação dos campos em json.
export class Validator extends Component {

    //Metodo para verificação se existe os campos verbatimLongitude, verbatimLatitude e se não são nulos.
    verifyLatitudeLongitudeMun(props){
        if (("verbatimLongitude" in props) && ("verbatimLatitude" in props)){
            if (props["verbatimLongitude"] == " " || props["verbatimLongitude"] == "") return(false);
            if (props["verbatimLatitude"] == " " || props["verbatimLatitude"] == "") return(false);
            return(true);
        } 
        return(false);
    }
    
    //Metodo para verificação se existe o campo scientificName e se não é nulo.
    verifyNameBinomiais(props){
        if ("scientificName" in props){
            if (props["scientificName"] == " " || props["scientificName"] == "") return(false);
            if ((props["scientificName"].split(" ")).length != 2) return(false);
            return (true);
        }
        return(false);
    }
    
    //Metodo para verificação se existe os campos decimalLatitude, decimalLongitude e se não são nulos.
    verifyLatitudeLongitude(props){
        if (("decimalLatitude" in props) && ("decimalLongitude" in props)){
            if (props["decimalLatitude"] == " " || props["decimalLatitude"] == "" || props["decimalLatitude"] == "bloqueada") return(false);
            if (props["decimalLongitude"] == " " || props["decimalLongitude"] == "" || props["decimalLongitude"] == "bloqueada") return(false);
            return(true);
        }
        return(false);
    }
    
    //Metodo que retorna os json jsonValid com ocorrencias validas e jsonInvalid com ocorrencias invalidas.
    validateSpecies(props){
        if (props == null || Object.keys(props).length < 1) return (null);

        const jsonValid = [], jsonInvalid = [];
        for(let item in props){
            if (!this.verifyLatitudeLongitude(props[item]) || !this.verifyLatitudeLongitudeMun(props[item]) || !this.verifyNameBinomiais(props[item])){
                jsonInvalid.push(props[item])
            }else{
                jsonValid.push(props[item]);
            }
        }
        return ([jsonValid, jsonInvalid]);
    }

    //Metodo que é chamado para criar a tela. 
    render() {
        const jsonResult = this.validateSpecies(DATA_MOCKUP_VALIDATOR["result"]);
        const amountValid = jsonResult[0].length, amountInvalid = jsonResult[1].length
        return (
            <div>
                <h2>Quantidade de ocorrências validas: {amountValid}</h2>
                <h2>Quantidade de ocorrências invalidas: {amountInvalid}</h2>
            </div>
        );
    }
}

export default hot(module)(Validator);