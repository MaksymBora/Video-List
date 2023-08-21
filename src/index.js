import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Reader from './components/Reader/Reader';
import publications from './publications.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Reader items={publications} />
  </React.StrictMode>
);
