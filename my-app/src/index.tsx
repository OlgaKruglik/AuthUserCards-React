import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import store from './stor/stor';
import App from './App';
import './style/index.css';

const rootElement = document.getElementById('root');
  if (rootElement) {

    const root = createRoot(rootElement);
    root.render(
        
    <React.StrictMode>
    <Provider store={store}>
        
    <App />
    </Provider>
    </React.StrictMode>
  );
  } else {
    console.error('Элемент с ID "root" не найден.');
}
