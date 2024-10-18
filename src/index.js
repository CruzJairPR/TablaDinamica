import React from 'react';
import { createRoot } from 'react-dom/client'; 
import AppRutas from './AppRutas';

const container = document.getElementById('root');
const root = createRoot(container); 

root.render(
  <React.StrictMode>
    <AppRutas />
  </React.StrictMode>
);
