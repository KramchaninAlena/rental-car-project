import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/rental-car-project">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
          </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

