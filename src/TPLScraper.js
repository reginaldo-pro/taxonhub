import axios from "axios";
import cheerio from "cheerio";
import Papa from "papaparse";

/**
 * Checks if given string is blank (empty or composed with only whitespaces)
 * @param  {String} str String to check
 * @returns {Boolean} Result of the check in boolean format
 */
const isBlank = (str) => {
  return !str || /^\s*$/.test(str);
};

/**
 * Get the search result of a plant species in a plain-text CSV table from the The Plant List website
 * @param  {String} speciesName Name of a plant species
 * @returns {String} A plain-text CSV table containing the data searched
 */
const getSearchSpeciesData = async (speciesName) => {
  return axios
    .get("http://www.theplantlist.org/tpl1.1/search", {
      params: {
        q: speciesName,
        csv: true,
      },
      timeout: 10000,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        throw new Error(
          `Website response error with status: ${error.response.status}`
        );
      } else if (error.request) {
        throw new Error(`Website request error: ${error.request}`);
      } else {
        throw new Error(`Error in setting up the request: ${error.message}`);
      }
    });
};

/**
 * Parses a plain-text CSV table to an array of objects representing the rows
 * @param  {String} sepeciesData A plain-text CSV table
 * @returns {Array} Data parsed to an array of objects
 */
const parseSpeciesData = (sepeciesData) => {
  try {
    const parsed = Papa.parse(sepeciesData, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
    });

    if (Object.keys(parsed.errors).length !== 0) {
      throw new Error("Incorrect CSV");
    } else {
      return parsed.data;
    }
  } catch (error) {
    throw new Error(`Parsing data error: ${error.message}`);
  }
};

const getLegitimateSpeciesName = async (synonymSpeciesName) => {
  try {
    const synonymsHtmlPage = await axios.get(
      "http://www.theplantlist.org/tpl1.1/search",
      {
        params: {
          q: synonymSpeciesName,
        },
        timeout: 10000,
      }
    );

    const $ = cheerio.load(synonymsHtmlPage.data);

    let validSynonyms = {};
    $(".names.results > tbody > tr > .name.Synonym").each((index, element) => {
      if (!$(element).text().includes("[Illegitimate]")) {
        validSynonyms = {
          name: $(element).text(),
          endpoint: $(element).children().attr("href"),
        };
      }
    });

    let acceptedNames = [];
    for (const synonym of validSynonyms) {
      const acceptedHtmlPage = await axios.get(
        `http://www.theplantlist.org${synonym?.endpoint}`,
        {
          timeout: 10000,
        }
      );
      const $ = cheerio.load(acceptedHtmlPage.data);
      acceptedNames.push($("#columns .subtitle > a > .name").text());
    }

    return acceptedNames;
  } catch (error) {
    throw new Error(`Error in getting legitimate species name: ${error.message}`);
  }
};

/**
 * Returns data searched on The Plant List website for a given species name
 * @param  {String} speciesName Name of a plant species
 * @returns {Array} List of data found for the given species
 */
const searchSpecies = async (speciesName) => {
  if (!isBlank(speciesName)) {
    try {
      const searchedData = await getSearchSpeciesData(speciesName);
      const parsedData = parseSpeciesData(searchedData);
      const hasAcceptedName = parsedData.some(searchRow => searchRow['Taxonomic status in TPL'] === 'Accepted');

      // if (!hasAcceptedName) {
      //   const acceptedNames = await getLegitimateSpeciesName(speciesName);

      // }

      const formattedSearch = parsedData.map((searchRow) => {
        return {
          name: [
            searchRow.Genus,
            searchRow.Species,
            searchRow["Infraspecific rank"],
            searchRow["Infraspecific epithet"],
          ]
            .filter(Boolean)
            .join(" "),
          status: searchRow["Taxonomic status in TPL"],
          confidencLevel: searchRow["Confidence level"],
          source: searchRow.Source,
        };
      });

      return formattedSearch;
    } catch (error) {
      throw new Error(error);
    }
  } else throw new Error("A species name is required");
};

// export default searchSpecies;
// searchSpecies("Pontederia azurea")

// const a = await getLegitimateSpeciesName("Pontederia azurea");

// console.log(a)