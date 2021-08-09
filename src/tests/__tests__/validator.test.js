import {Validator} from "../../speciesLink/validator";

var validator = new Validator();

const DATA_MOCKUP_TRUE = { 
    "record_id" : "1", "modified" : "2019-12-04 15:25:17-03", "institutionCode" : "PUCPR", "collectionCode" : "HUCP", "catalogNumber" : "7341", "basisOfRecord" : "S", "kingdom" : "Plantae", "phylum" : "Eudicotiledonea", "family" : "Lamiaceae", "genus" : "Cantinoa", "specificEpithet" : "althaeifolia", "scientificName" : "Cantinoa althaeifolia", "scientificNameAuthorship" : "(Pohl ex Benth.) Harley & J.F.B. Pastore.", "identifiedBy" : "Buchoski, M.G.", "yearIdentified" : "2018", "monthIdentified" : "08", "dayIdentified" : "27", "recordedBy" : "Silva, JM", "recordNumber" : "1095", "year" : "1992", "month" : "04", "day" : "13", "country" : "Brasil", "stateProvince" : "Paraná", "county" : "Curitiba", "locality" : "Jardim Petrópolis", "verbatimLongitude": "-20","verbatimLatitude": "392.0","decimalLongitude" : "-49.2731018066406", "decimalLatitude" : "-25.4277992248535", "coordinatePrecision" : "25180", "barcode" : "HUCP00012208", "imagecode" : "HUCP00012208", "geoFlag" : "auto"
}

const DATA_MOCKUP_FALSE = { 
    "record_id" : "", "modified" : "", "institutionCode" : "", "collectionCode" : "", "catalogNumber" : "", "basisOfRecord" : "", "kingdom" : "", "phylum" : "", "family" : "", "genus" : "", "specificEpithet" : "", "scientificName" : "", "scientificNameAuthorship" : "", "identifiedBy" : "", "yearIdentified" : "", "monthIdentified" : "", "dayIdentified" : "", "recordedBy" : "", "recordNumber" : "", "year" : "", "month" : "", "day" : "", "country" : "", "stateProvince" : "", "county" : "", "locality" : "", "verbatimLongitude": "","verbatimLatitude": "","decimalLongitude" : "bloqueada", "decimalLatitude" : "bloqueada", "coordinatePrecision" : "", "barcode" : "", "imagecode" : "", "geoFlag" : ""
}

const DATA_MOCKUP_VALIDATOR_TRUE = {
    "result" : [  
            { 
                "record_id" : "1", "modified" : "2019-12-04 15:25:17-03", "institutionCode" : "PUCPR", "collectionCode" : "HUCP", "catalogNumber" : "7341", "basisOfRecord" : "S", "kingdom" : "Plantae", "phylum" : "Eudicotiledonea", "family" : "Lamiaceae", "genus" : "Cantinoa", "specificEpithet" : "althaeifolia", "scientificName" : "Cantinoa althaeifolia", "scientificNameAuthorship" : "(Pohl ex Benth.) Harley & J.F.B. Pastore.", "identifiedBy" : "Buchoski, M.G.", "yearIdentified" : "2018", "monthIdentified" : "08", "dayIdentified" : "27", "recordedBy" : "Silva, JM", "recordNumber" : "1095", "year" : "1992", "month" : "04", "day" : "13", "country" : "Brasil", "stateProvince" : "Paraná", "county" : "Curitiba", "locality" : "Jardim Petrópolis", "verbatimLongitude": "-20","verbatimLatitude": "392.0","decimalLongitude" : "-49.2731018066406", "decimalLatitude" : "-25.4277992248535", "coordinatePrecision" : "25180", "barcode" : "HUCP00012208", "imagecode" : "HUCP00012208", "geoFlag" : "auto"
            },
            {
                "record_id" : "2", "modified" : "2021-07-16 08:46:40-03", "institutionCode" : "PUCPR", "collectionCode" : "HUCP", "catalogNumber" : "26015", "basisOfRecord" : "S", "kingdom" : "Plantae", "phylum" : "Eudicotiledonea", "family" : "Lamiaceae", "genus" : "Cantinoa", "specificEpithet" : "althaeifolia", "scientificName" : "Cantinoa althaeifolia", "scientificNameAuthorship" : "(Pohl ex Benth.) Harley & J.F.B. Pastore.", "identifiedBy" : "Canestraro, BK", "yearIdentified" : "2021", "monthIdentified" : "03", "recordedBy" : "Schmidlim, LAJ", "recordNumber" : "2", "year" : "1999", "month" : "03", "day" : "30", "country" : "Brasil", "stateProvince" : "Paraná", "county" : "Fazenda Rio Grande", "locality" : "Fazenda Experimental Gralha Azul", "verbatimLongitude": "-12","verbatimLatitude": "102","decimalLongitude" : "-49.3081016540527", "decimalLatitude" : "-25.6574993133545", "coordinatePrecision" : "12596", "occurrenceRemarks" : "Inflorescência lilás, arbustiva.", "barcode" : "HUCP00026015", "geoFlag" : "auto"
            }
    ]
}

const DATA_MOCKUP_VALIDATOR_FALSE = {
    "result" : [  
            { 
                "record_id" : "1", "modified" : "2019-12-04 15:25:17-03", "institutionCode" : "PUCPR", "collectionCode" : "HUCP", "catalogNumber" : "7341", "basisOfRecord" : "S", "kingdom" : "Plantae", "phylum" : "Eudicotiledonea", "family" : "Lamiaceae", "genus" : "Cantinoa", "specificEpithet" : "althaeifolia", "scientificName" : "Cantinoa ola althaeifolia", "scientificNameAuthorship" : "(Pohl ex Benth.) Harley & J.F.B. Pastore.", "identifiedBy" : "Buchoski, M.G.", "yearIdentified" : "2018", "monthIdentified" : "08", "dayIdentified" : "27", "recordedBy" : "Silva, JM", "recordNumber" : "1095", "year" : "1992", "month" : "04", "day" : "13", "country" : "Brasil", "stateProvince" : "Paraná", "county" : "Curitiba", "locality" : "Jardim Petrópolis", "verbatimLongitude": "-20","verbatimLatitude": "392.0","decimalLongitude" : "-49.2731018066406", "decimalLatitude" : "-25.4277992248535", "coordinatePrecision" : "25180", "barcode" : "HUCP00012208", "imagecode" : "HUCP00012208", "geoFlag" : "auto"
            },
            {
                "record_id" : "2", "modified" : "2021-07-16 08:46:40-03", "institutionCode" : "PUCPR", "collectionCode" : "HUCP", "catalogNumber" : "26015", "basisOfRecord" : "S", "kingdom" : "Plantae", "phylum" : "Eudicotiledonea", "family" : "Lamiaceae", "genus" : "Cantinoa", "specificEpithet" : "althaeifolia", "scientificName" : "Cantinoa althaeifolia", "scientificNameAuthorship" : "(Pohl ex Benth.) Harley & J.F.B. Pastore.", "identifiedBy" : "Canestraro, BK", "yearIdentified" : "2021", "monthIdentified" : "03", "recordedBy" : "Schmidlim, LAJ", "recordNumber" : "2", "year" : "1999", "month" : "03", "day" : "30", "country" : "Brasil", "stateProvince" : "Paraná", "county" : "Fazenda Rio Grande", "locality" : "Fazenda Experimental Gralha Azul", "verbatimLongitude": "-12","verbatimLatitude": "102","decimalLongitude" : "-49.3081016540527", "decimalLatitude" : "-25.6574993133545", "coordinatePrecision" : "12596", "occurrenceRemarks" : "Inflorescência lilás, arbustiva.", "barcode" : "HUCP00026015", "geoFlag" : "auto"
            }
    ]
}

function testValidateSpeciesLength(data){
    const verify = validator.validateSpecies(data);
    if (verify[0].length == 2 && verify[1].length == 0){
        return true;
    }
    return false;
}

describe('Função verifyLatitudeLongitude', () => {
    test('Entrada da função verdadeira', () => {
      expect(validator.verifyLatitudeLongitude(DATA_MOCKUP_TRUE)).toBe(true);
    });
    test('Entrada da função falsa', () => {
        expect(validator.verifyLatitudeLongitude(DATA_MOCKUP_FALSE)).toBe(false);
    });
});

describe('Função verifyNameBinomiais', () => {
    test('Entrada da função verdadeira', () => {
      expect(validator.verifyNameBinomiais(DATA_MOCKUP_TRUE)).toBe(true);
    });
    test('Entrada da função falsa', () => {
        expect(validator.verifyNameBinomiais(DATA_MOCKUP_FALSE)).toBe(false);
    });
});

describe('Função verifyLatitudeLongitudeMun', () => {
    test('Entrada da função verdadeira', () => {
        expect(validator.verifyLatitudeLongitudeMun(DATA_MOCKUP_TRUE)).toBe(true);
    });
    test('Entrada da função falsa', () => {
        expect(validator.verifyLatitudeLongitudeMun(DATA_MOCKUP_FALSE)).toBe(false);
    });
});

describe('Função testValidateSpeciesLength', () => {
    test('Entrada da função verdadeira', () => {
        expect(testValidateSpeciesLength(DATA_MOCKUP_VALIDATOR_TRUE["result"])).toBe(true);
    });
    test('Entrada da função falsa, pois existe um trinomio', () => {
        expect(testValidateSpeciesLength(DATA_MOCKUP_VALIDATOR_FALSE["result"])).toBe(false);
    });
});