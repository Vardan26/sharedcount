import {APP_ACTION, APP_ACTION_SUCCESS, APP_ACTION_FAILURE} from './constants';

export function appAction() {
    return {
        type: APP_ACTION
    }
}

export function appActionSuccess(data) {
    return {
        type: APP_ACTION_SUCCESS,
        data
    }
}

export function appActionFailure() {
    return {
        type: APP_ACTION_FAILURE
    }
}
