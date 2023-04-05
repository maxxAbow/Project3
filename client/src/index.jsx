import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import authReducer from "./state";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import {
  persistStore,
  persistReducer,
  Flush,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist"
import storage from "redux-persist/lib/storage"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
