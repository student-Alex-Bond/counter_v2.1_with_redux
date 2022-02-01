import {combineReducers, createStore} from "redux";
import counterReducer from '../../bll/reducer/counterReducer'

const rootReducer = combineReducers({
    counter: counterReducer
})

export type AppRootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)


// @ts-ignore
window.store = store