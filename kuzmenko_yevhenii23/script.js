import React from 'react'
import ReactDOM from 'react-dom/client'

import {MyHeader, MyMain, MyNav, MyContent} from './container/containers.jsx'

import "./style/style.scss";

const App = () => {
    return React.createElement(
        'wrapper',  
        null, 
        [   
            React.createElement(MyHeader),
            React.createElement(MyNav),
            React.createElement(MyMain, 
                null, 
                React.createElement('div', null, "This is the additional div inside MyMain")
            ),
        ]
    )
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(App())

