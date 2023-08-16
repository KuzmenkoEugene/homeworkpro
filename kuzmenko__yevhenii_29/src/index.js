import React from 'react';
import {createRoot} from 'react-dom/client';
import { App } from './components/app.jsx';
import { HashRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store.js';


import './styles/style.scss';


const root = createRoot(document.getElementById('app'));
root.render(
        <Provider store={store}>
                <HashRouter>
                        <App/>
                </HashRouter>
        </Provider>
)