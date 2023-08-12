import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app.jsx';
import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
import './style/style.scss';
import { HashRouter } from "react-router-dom";
import logger from 'redux-logger';
import {Provider} from 'react-redux';

const initialState = {
    listToDo: ['item 1', 'item 2', 'item 3', 'item 4']
}

const listToDoReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD': {
            state = {
                ...state,
                listToDo: [...state.listToDo, action.payload]
            }

            break
        }
    }

    return state
}

const rootReducer = combineReducers({
    listToDoReducer: listToDoReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))

// store.subscribe(() => {
//     console.log('store => ', store.getState())
// })

store.dispatch({
    type: 'ADD',
    payload: 'test'
})


// console.log(store.getState().listToDoReducer.listTodu)


const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>
)