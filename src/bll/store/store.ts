import {combineReducers, createStore} from "redux";
import counterReducer from '../../bll/reducer/counterReducer'
import {loadState, saveState } from "../utilities/utility";

const rootReducer = combineReducers({
    counter: counterReducer
})

export type AppRootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, loadState())



store.subscribe(() => {
    saveState({
        counter: store.getState().counter

    });
});

// @ts-ignore
window.store = store