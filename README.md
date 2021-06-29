# Taxonhub

A collector of information about species from:
  - Flora do Brasil (http://floradobrasil.jbrj.gov.br/);
  - The Plant List (http://www.theplantlist.org/);
  - GBIF (https://www.gbif.org/);
  - SpeciesLink (http://www.splink.org.br/).

# Install

Just clone the repo and run `npm install` into downloaded folder.

# Running tests

In project folder, you must execute `npm test` command to execute test cases.

To generate the coverage reached by test cases, you must execute `npm test- coverage`.

# Running in development mode

In order to run the project using electron in development mode, you must execute `npm run electron-dev`.

# Running in production mode

In order to run the project using electron in production mode, you must execute `npm run electron-prod`.

# Packaging the executable

It is possible to generate an executable (electron application) operational on Windows, Linux and IOs. To do so, you must execute `npm run electron-build`. The executable will be generated and packaged (into the `./dist` folder) according to the operational system used in the generating process. 
