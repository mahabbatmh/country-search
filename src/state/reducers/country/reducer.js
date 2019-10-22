import Country from "models/Country";
import {CHANGE_SELECTED_COUNTRY, FETCH_COUNTRY_SUCCESS, REMOVE_COUNTRY} from "./types";

export const country_state = {
    selected_country: new Country({
        currencies:[],
        name:'',
        flag:'',
        capital: '',
        altSpellings: [],
        region: '',
        population: 0,
        borders:[],
        loaded: false
    }),
    countries:{
        data:[],
        loaded:false
    },
    capitals:[]
};

export default function(state=country_state, { type, payload }){
    switch (type) {
        case FETCH_COUNTRY_SUCCESS:
            return {
                selected_country: payload.country,
                capitals: [ ...state.capitals, payload.country.capital ],
                countries: {
                    data: [ ...state.countries.data, payload.country ],
                    loaded: true
                }
            };
        case CHANGE_SELECTED_COUNTRY:
            let selected_country = state.countries.data.find(country => country.capital === payload.capital_name);
            return {
                ...state,
                selected_country: selected_country
            };
        case REMOVE_COUNTRY:
            let new_countries_array = state.countries.data.filter(country => country.capital !==payload.capital_name);
            let new_selected_country = state.selected_country.capital === payload.capital_name
                                                    ? country_state.selected_country: state.selected_country;
            return {
                selected_country: new_selected_country,
                countries: {
                    data: new_countries_array,
                    loaded: new_countries_array.length>0
                },
                capitals: state.capitals.filter(capital => capital !== payload.capital_name)
            };
        default:
            return state;
    }
}
