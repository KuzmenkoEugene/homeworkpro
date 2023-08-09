import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app.jsx';
import { HashRouter } from "react-router-dom";

import './style/style.scss';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <HashRouter>
        <App/>
    </HashRouter>
)