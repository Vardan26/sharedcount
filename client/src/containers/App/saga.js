import { call, put, takeLatest } from 'redux-saga/effects'
import {APP_ACTION} from './constants';
import {appActionSuccess, appActionFailure} from "./actions";
import remote from '../../services/remote'


export default function* watchAppSaga() {
    yield takeLatest(APP_ACTION, _appAction);
}

function* _appAction(action) {
    const response = yield call(remote, {
        route: '/api/test',
        method: 'get'
    });

    if (response.success) {
        yield put(appActionSuccess(response.data));
    } else {
        yield put(appActionFailure(response));
    }
}

