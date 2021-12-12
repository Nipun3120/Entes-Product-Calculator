import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import App from './App';
import { ApcfContextProvider } from './contexts';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApcfContextProvider>
        <App />
      </ApcfContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);