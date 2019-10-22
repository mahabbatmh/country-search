import { put, takeLatest, call, select } from 'redux-saga/effects';
import country from "../../services/country";
import {ON_CAPITAL_NAME_SUBMIT} from "../reducers/country/types";
import {changeSelectedCountry, fetchCountrySuccess} from "../reducers/country/actions";
import {apiError} from "../reducers/global/actions";

const getCountries = state => state.countries.countries;

function* workerFetchCountries({ payload }){
    const { control, capital_name } = payload;
    try {
        const state_countries = yield select(getCountries);
        if (state_countries.data.find(country => country.capital === capital_name)){
            yield put(changeSelectedCountry(capital_name));
        }else{
            let response = yield call(country.getCountryWithCapital, capital_name);
            let { borders } = response;
            for (let i=0; i<borders.length; i++){
                const board_country = yield call(country.getCountryWithAlpha, borders[i]);
                borders[i] = board_country.name;
            }
            response.borders = borders;
            yield put(fetchCountrySuccess(response));
        }
        yield call(control.resolve);
    }catch (error) {
        yield call(control.reject);
        if(error.data.status === 404){
            yield put(apiError(error.data.message));
        }else {
            yield put(apiError('Something went wrong!'));
        }
    }
}

export default function* () {
    yield takeLatest(ON_CAPITAL_NAME_SUBMIT, workerFetchCountries);
}
