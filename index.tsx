import React from 'react';
import ReactDOM from 'react-dom/client';
// FIX: Corrected import paths to be relative.
import { AuthProvider } from './AuthContext';
import { DataProvider } from './DataContext';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <DataProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </DataProvider>
    </AuthProvider>
  </React.StrictMode>
);

// Register the service worker for PWA functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then(registration => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch(error => {
        console.log('ServiceWorker registration failed: ', error);
      });
  });
}