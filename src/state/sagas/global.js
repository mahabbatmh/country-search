import { call, takeLatest } from 'redux-saga/effects'
import { toast } from "react-toastify";
import { API_ERROR } from "state/reducers/global/types";


function* workerApiError({ payload }){
    yield call(toast.error, payload.message);
}

export default function* () {
    yield takeLatest(API_ERROR, workerApiError);
}
