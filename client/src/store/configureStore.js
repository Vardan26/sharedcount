import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
import {createBrowserHistory} from "history";
import { routerMiddleware } from 'connected-react-router'

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

export default function configureStore(initialState = {}) {
    // Create the store with two middlewares
    // 1. sagaMiddleware: Makes redux-sagas work
    // 2. routerMiddleware: Syncs the location/URL path to the state
    const middlewares = [
        sagaMiddleware,
        routerMiddleware(history)
    ];

    const enhancers = [
        applyMiddleware(...middlewares, )
    ];

    const composeEnhancers =  compose;

    const store = createStore(
        createReducer(),
        fromJS(initialState),
        composeEnhancers(...enhancers)
    );

    // Extensions
    store.runSaga = sagaMiddleware.run;
    store.injectedReducers = {}; // Reducer registry
    store.injectedSagas = {}; // Saga registry

    return store;
}
