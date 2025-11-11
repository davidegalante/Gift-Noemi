// Importa le librerie necessarie da React.
import React from 'react';
import ReactDOM from 'react-dom/client';
// Importa il componente principale dell'applicazione.
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';

// Trova l'elemento HTML con id 'root' nel DOM. Questo è il punto di montaggio per l'app React.
const rootElement = document.getElementById('root');
// Se l'elemento 'root' non viene trovato, lancia un errore per fermare l'esecuzione.
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Crea una "root" React per l'elemento DOM trovato. Questo è il nuovo modo di renderizzare in React 18.
const root = ReactDOM.createRoot(rootElement);
// Renderizza il componente App all'interno della root.
// React.StrictMode è un wrapper che aiuta a identificare potenziali problemi nell'app durante lo sviluppo.
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
