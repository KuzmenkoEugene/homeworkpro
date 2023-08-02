import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app.jsx';


import './style/style.scss';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App/>)