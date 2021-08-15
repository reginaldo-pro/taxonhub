import axios from "axios";
import Papa from "papaparse";

const isBlank = (str) => (!str || /^\s*$/.test(str))

const searchSpecies = async (speciesName) => {
  
  if(!isBlank(speciesName)){
    const searchUrl = `http://www.theplantlist.org/tpl1.1/search?q=${speciesName}&csv=true`;
  
    await axios
      .get(searchUrl)
      .then((response) => {
        const parsedSearch = Papa.parse(response.data, {
          header: true,
          dynamicTyping: true,
          skipEmptyLines: true
        });
  
        const result = parsedSearch.data.map( searchRow => {
          return {
            name: [searchRow["Genus"], searchRow["Species"], searchRow["Infraspecific rank"], searchRow["Infraspecific epithet"]].filter(Boolean).join(' '),
            status: searchRow["Taxonomic status in TPL"],
            confidencLevel: searchRow["Confidence level"],
            source: searchRow["Source"]
          }
        })
  
        console.log(result);
      })
      .catch((err) => {
        throw new Error(err);
      });

  }
};

searchSpecies("Ocimum basilicum")
