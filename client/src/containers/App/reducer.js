import {APP_ACTION, APP_ACTION_FAILURE, APP_ACTION_SUCCESS} from './constants';
const initialState = {
    text: ''
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case APP_ACTION: {
            return Object.assign({}, state, {text: ''})
        }
        case APP_ACTION_SUCCESS: {
            return Object.assign({}, state, {text: 'success'})
        }
        case APP_ACTION_FAILURE: {
            return Object.assign({}, state, {text: 'failure'})
        }
        default:
            return state;
    }
};

export default appReducer;
