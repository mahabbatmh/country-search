import adapter from "./adapter";
import types from "./helpers/types";
import {main_country_fields} from "./helpers/filter";
import Country from "../models/Country";

const with_capital_url = '/capital';
const with_alpha_url = '/alpha';

/**
 *
 * @param capital_name { string }
 * @return { Country }
 */

const getCountryWithCapital = capital_name =>
    adapter({
        url: `${with_capital_url}/${capital_name}?fields=${main_country_fields}`,
        method: types.GET
    }).then(response => {
        response[0].loaded = true;
        return new Country(response[0]);
    });
/**
 *
 * @param alpha_code { string }
 * @return { { name: { string } } }
 */
const getCountryWithAlpha = alpha_code =>
    adapter({
        url:`${with_alpha_url}/${alpha_code}?fields=name;`,
        method: types.GET
    });


export default {
    getCountryWithCapital,
    getCountryWithAlpha
};
