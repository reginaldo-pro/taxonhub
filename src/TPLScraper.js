import "dotenv/config";
import axios from "axios";
import Papa from "papaparse";

/**
 * Checks if given string is blank (empty or composed with only whitespaces) 
 * @param  {String} str String to check
 * @returns {Boolean} Result of the check in boolean format
 */
const isBlank = (str) => !str || /^\s*$/.test(str);

/**
 * Get the search result of a plant species in a plain-text CSV table from the The Plant List website
 * @param  {String} speciesName Name of a plant species
 * @returns {String} A plain-text CSV table containing the data searched 
 */
const getSearchSpeciesData = async (speciesName) => {
  return await axios
    .get(process.env.TPL_SEARCH_URL, {
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
  const parsed = Papa.parse(sepeciesData, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
  });

  if (Object.keys(parsed.errors).length !== 0) {
    throw new Error("Error in parsing data received from the website");
  } else {
    return parsed.data;
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

      const formattedSearch = parsedData.map((searchRow) => {
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

      return formattedSearch;

    } catch (error) {
     throw new Error(error)
    }
  }
  else throw new Error("A species name is required.")
};

export default searchSpecies;