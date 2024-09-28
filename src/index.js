import React, { version } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import authReducer from "./state";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import{
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
// import { ChakraProvider } from '@chakra-ui/react';

const persistConfig = {key: "root", storage, version: 1};
const persistedReducer = persistReducer(persistConfig, authReducer);
const store = configureStore({
  reducer : persistedReducer,
  middleware:(getDefaultMiddlewere)=>
    getDefaultMiddlewere({
      serializableCheck:{
        ignoredActions:[  FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER

        ]
      }
    })
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
      {/* <ChakraProvider> */}
      <App />
      {/* </ChakraProvider> */}
      </PersistGate>
    </Provider>
  </React.StrictMode>
);


