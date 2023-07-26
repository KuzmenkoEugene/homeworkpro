import React from 'react'
import ReactDOM from 'react-dom/client'

import {Counter} from './components/counter.jsx'

import './style/style.scss'

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <main>
            <h1> { this.props.title } </h1>
            <Counter/>
        </main>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App title="The best smile:)"/>)