import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { DessertProvider } from "./context/DessertContext.jsx";
import App from './components/App.jsx';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DessertProvider>
      <App />
    </DessertProvider>
  </StrictMode>
);
