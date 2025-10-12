import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import ResponsiveWrapper from './ResponsiveWrapper.jsx';
import MatrixRainOverlay from './MatrixRainOverlay.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResponsiveWrapper>
      <App />
    </ResponsiveWrapper>
  </StrictMode>
);
