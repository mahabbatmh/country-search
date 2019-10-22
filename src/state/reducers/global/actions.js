import {API_ERROR} from "./types";

export const apiError = message => ({
    type: API_ERROR,
    payload: {
        message
    }
})
