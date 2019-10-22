import { spawn, call, all, delay } from "redux-saga/effects";

import countries from './country';
import global from './global';

const makeRestartable = saga => {
    return function*() {
        yield spawn(function*() {
            while (true) {
                try {
                    yield call(saga);
                } catch (e) {
                    console.error("Saga error, the saga will be restarted", e);
                }
                yield delay(1000);
            }
        });
    };
};
const rootSagas = [
    countries,
    global
].map(makeRestartable);
export default function* rootSaga() {
    yield all(rootSagas.map(saga => call(saga)));
}
