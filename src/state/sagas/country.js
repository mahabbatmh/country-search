import { put, takeLatest, call } from 'redux-saga/effects';
import country from "../../services/country";
import {ON_CAPITAL_NAME_SUBMIT} from "../reducers/country/types";
import {fetchCountrySuccess} from "../reducers/country/actions";


function* workerFetchCountries({ control, capital_name }){
    try {
        let response = yield call(country.getCountryWithCapital, capital_name);
        let { boards } = response;
        for (let i=0; i<boards.length; i++){
            const board_country = yield call(country.getCountryWithAlpha, boards[i]);
            boards[i] = board_country.name;
        }
        response.boards = boards;
        yield put(fetchCountrySuccess(response));
        yield call(control.resolve);
    }catch (error) {
        yield call(control.reject);
        console.log(error);
    }
}

export default function* () {
    yield takeLatest(ON_CAPITAL_NAME_SUBMIT, workerFetchCountries);
}
