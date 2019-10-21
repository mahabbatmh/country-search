import {CHANGE_SELECTED_COUNTRY, FETCH_COUNTRY_SUCCESS, ON_CAPITAL_NAME_SUBMIT, REMOVE_COUNTRY} from "./types";

export const capitalNameSubmit = (control, capital_name) => ({
    type: ON_CAPITAL_NAME_SUBMIT,
    payload: {
        capital_name
    }
});

export const fetchCountrySuccess = country => ({
    type: FETCH_COUNTRY_SUCCESS,
    payload: {
        country
    }
});

export const changeSelectedCountry = country_name => ({
    type: CHANGE_SELECTED_COUNTRY,
    payload:{
        country_name
    }
});

export const removeCountry = country_name => ({
    type: REMOVE_COUNTRY,
    payload: {
        country_name
    }
});
