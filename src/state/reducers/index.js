import {combineReducers} from "redux";
import countries from './country/reducer';
import global from './global/reducer';

export default combineReducers({
    countries,
    global
});
