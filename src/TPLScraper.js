import "dotenv/config";
import axios from "axios";
import Papa from "papaparse";

const isBlank = (str) => !str || /^\s*$/.test(str);

const searchSpecies = async (speciesName) => {
  if (!isBlank(speciesName)) {
    await axios
      .get(process.env.TPL_SEARCH_URL, {
        params: {
          q: speciesName,
          csv: true,
        },
        timeout: 10000
      })
      .then((response) => {
        const parsedSearch = Papa.parse(response.data, {
          header: true,
          dynamicTyping: true,
          skipEmptyLines: true,
        });

        const formattedSearch = parsedSearch.data.map((searchRow) => {
          return {
            name: [
              searchRow["Genus"],
              searchRow["Species"],
              searchRow["Infraspecific rank"],
              searchRow["Infraspecific epithet"],
            ]
              .filter(Boolean)
              .join(" "),
            status: searchRow["Taxonomic status in TPL"],
            confidencLevel: searchRow["Confidence level"],
            source: searchRow["Source"],
          };
        });

        console.log(formattedSearch);
      })
      .catch((err) => {
        console.log(err.toJSON());
      });
  }
};

searchSpecies("Ocimum basilicum");
