import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

/* 
il file main è il primo che viene caricato, 
e si occupa di renderizzare il componente app all'interno di un div root, div contenuto nel file index.html 


*/