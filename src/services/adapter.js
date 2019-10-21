import axios from 'axios'
import appConstants from "appConstants";

const client = axios.create({
    baseURL: appConstants.BASE_URL
});

export default function(options){
    function onSuccess(response){
        return response.data;
    }

    function onError(error){
        return Promise.reject(error.response || error.message);
    }

    return client(options)
        .then(onSuccess)
        .catch(onError);
}
