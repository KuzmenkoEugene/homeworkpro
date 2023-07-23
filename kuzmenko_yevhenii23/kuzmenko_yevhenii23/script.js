import React from 'react'
import ReactDOM from 'react-dom/client'

import {MyHeader, MyMain} from './container/containers.jsx'

import "./style/style.scss";

const App = () => {
    return React.createElement(
        'wrapper',  
        null, 
        [   
            React.createElement(MyHeader),
            React.createElement(MyMain),
        ]
    )
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(App())

