import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux';
import { ConfigProvider } from './contexts/ConfigContext';
import { PersistGate } from 'redux-persist/integration/react';

import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store, persister } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <ConfigProvider>
            <PersistGate loading={null} persistor={persister}>
                <App />
            </PersistGate>
        </ConfigProvider>
    </Provider>);

reportWebVitals();