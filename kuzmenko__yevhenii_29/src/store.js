import { combineReducers, legacy_createStore as createStore, applyMiddleware } from "redux";

import {
    postsReducer
} from './reducers';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    posts: postsReducer
});


const middleware = [logger, thunk];

export const store = createStore(rootReducer, applyMiddleware(...middleware)); 