import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Amplify } from '@aws-amplify/core';
import awsconfig from './aws-exports';
import App from './App.tsx';
import './index.css';

Amplify.configure(awsconfig);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);