import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

const app = require('./pages/home');

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root'),
);

if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept('./pages/home', () => {
    const NextApp = app.default;
    ReactDOM.render(<NextApp />, document.getElementById('root'));
  });
}
