import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import herosReducer from '../Reducers/Reducer';

const rootReducer = combineReducers({herosReducer});

export const store = createStore(rootReducer, applyMiddleware(thunk));