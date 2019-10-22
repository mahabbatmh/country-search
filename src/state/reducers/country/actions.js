import {CHANGE_SELECTED_COUNTRY, FETCH_COUNTRY_SUCCESS, ON_CAPITAL_NAME_SUBMIT, REMOVE_COUNTRY} from "./types";

export const capitalNameSubmit = (control, capital_name) => ({
    type: ON_CAPITAL_NAME_SUBMIT,
    payload: {
        control,
        capital_name
    }
});

export const fetchCountrySuccess = country => ({
    type: FETCH_COUNTRY_SUCCESS,
    payload: {
        country
    }
});

export const changeSelectedCountry = capital_name => ({
    type: CHANGE_SELECTED_COUNTRY,
    payload:{
        capital_name
    }
});

export const removeCountry = capital_name => ({
    type: REMOVE_COUNTRY,
    payload: {
        capital_name
    }
});
