import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './utils/reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { RoutedApp } from './RoutedApp/RoutedApp';
import store from './store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <RoutedApp/>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals()
