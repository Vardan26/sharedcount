/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux-immutable';

import globalReducer from '../containers/App/reducer';
import { connectRouter } from 'connected-react-router';
import {history} from "./configureStore";

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
    return combineReducers({
        router: connectRouter(history),
        global: globalReducer,
        ...injectedReducers
    });
}
