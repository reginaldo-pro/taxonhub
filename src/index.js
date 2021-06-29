import React from 'react';
import ReactDOM from 'react-dom';
import LoadableApp from "./LoadableApp";



ReactDOM.render(
  <React.StrictMode>
    <LoadableApp />
  </React.StrictMode>,
  document.getElementById('root')
);

if (module.hot && process.env.NODE_ENV === "development") {
  module.hot.accept("./LoadableApp", () => {
    const NextApp = require("./LoadableApp").default;
    ReactDOM.render(<NextApp />, document.getElementById('root'));    
  });
}
