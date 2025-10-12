import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import ResponsiveWrapper from './ResponsiveWrapper.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResponsiveWrapper>
      <App />
    </ResponsiveWrapper>
  </StrictMode>
);
