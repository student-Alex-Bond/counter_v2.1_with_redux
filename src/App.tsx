import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "./bll/store/store";
import {decrementValueAC, incrementValueAC} from "./bll/reducer/counterReducer";

function App() {
    const dispatch = useDispatch()
    const value = useSelector<AppRootState, number>(state => state.counter.value)

    return (
        <div className="App">
            <header className="App-header">
                <span>{value}</span>
                <button onClick={() =>{dispatch(incrementValueAC())}}>increment</button>
                <button onClick={() =>{dispatch(decrementValueAC())}}>reset</button>
            </header>
        </div>
    );
}

export default App;
