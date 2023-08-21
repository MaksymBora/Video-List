import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Reader from './components/Reader/Reader';
import publications from './publications.json';
import { GlobalStyle } from 'GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
    <Reader items={publications} />
  </React.StrictMode>
);
