import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));


/* PRECISEI ALTERAR O INDEX.JS, POIS A VERSÃO DO ROUTER-DOM NÃO É MAIS COMPATIVEL
COM O NOVO INDEX DAS VERSÕES MAIS RECENTES

-> Versão nova:
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/
