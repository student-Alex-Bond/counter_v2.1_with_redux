import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "./bll/store/store";

import Counter from "./component/counter/Counter";
import {
    resetValueAC,
    incrementValueAC,
    initialStateType,
    setValueAC,
    setMaxValueAC, setStartValueAC
} from "./bll/reducer/counterReducer";
import SetValue from "./component/setValue/SetValue";

function App() {
    const dispatch = useDispatch()
    const counter = useSelector<AppRootState, initialStateType>(state => state.counter)

    const increment = () => {
        dispatch(incrementValueAC())
    }
    const reset = () => {
        dispatch(resetValueAC())
    }

    const setValue = () => {
        dispatch(setValueAC())
    }

    const onChangeMaxValueCallback = (value: number) => {
        dispatch(setMaxValueAC(value))
        dispatch(resetValueAC())
        toggleError()
    }

    const onChangeStartValueCallback = (value: number) => {
        dispatch(setStartValueAC(value))
        toggleError()
    }

    const toggleError = () => {
        if (counter.startValue === counter.maxValue || counter.startValue > counter.maxValue || counter.startValue < 0 ) {
            setError(true)
            setIsViewMessage(true)
        } else {
            setError(false)
            setIsViewMessage(false)
        }
    }


    const [error, setError] = React.useState<boolean>(false)
    const [isViewMessage, setIsViewMessage] = React.useState<boolean>(false)

    useEffect(() => {
        toggleError()
    }, )

    return (
        <div className="App">
            <header className="App-header">
                <SetValue error={error}
                          startValue={counter.startValue}
                          maxValue={counter.maxValue}
                          setValue={setValue}
                          onChangeMaxValueCallback={onChangeMaxValueCallback}
                          onChangeStartValueCallback={onChangeStartValueCallback}
                />
                <Counter startValue={counter.startValue}
                         maxValue={counter.maxValue}
                         isViewMessage={isViewMessage}
                         value={counter.value}
                         increment={increment}
                         reset={reset}
                />
            </header>
        </div>
    );
}

export default App;
